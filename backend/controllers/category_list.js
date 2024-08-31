import express from 'express';
import Category from '../models/category.model.js'
import Gig from '../models/gigs.model.js';
const router = express.Router();

const escapeRegExp = (string) => {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
};

router.get('/category', async (req, res) => {
    try {
        const categories = await Category.find();
        res.json(categories);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
});

router.get('/gigs/:category', async (req, res) => {
    try {
        const category = req.params.category;
        const categoryData = await Category.findOne({ category });

        if (!categoryData) {
            return res.status(404).json({ message: 'Category not found' });
        }

        const filter = {
            skills: { $in: categoryData.subcategory.map(skill => new RegExp(escapeRegExp(skill), "i")) }
        };

        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const skip = (page - 1) * limit;

        const gigs = await Gig.find(filter).skip(skip).limit(limit);
        const total = await Gig.countDocuments(filter);

        res.json({
            data: gigs,
            total,
            page,
            totalPages: Math.ceil(total / limit)
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


export default router;

