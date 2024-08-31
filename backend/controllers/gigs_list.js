const express = require('express');
const Gigs = require('../models/gigs_model');
const router = express.Router();

router.get('/gigs', async (req, res) => {
    try {
        const filter = req.query.filter || {};
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const skip = (page - 1) * limit;

        const gigs = await Gigs.find(filter).skip(skip).limit(limit);
        const total = await Gigs.countDocuments(filter);

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



module.exports = router;

