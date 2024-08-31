import express from 'express';
import Gig from '../models/gigs.model.js';

const router = express.Router();

router.get('/gigs', async (req, res) => {    
    try {
        const filter = req.query.filter || {};
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
        res.status(500).json({ message: 'Error fetching data', error: err });
    }
});



export default router;

