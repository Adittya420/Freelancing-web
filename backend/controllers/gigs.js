const express = require('express');
const Gigs = require('../models/gigs_model');
const router = express.Router();

router.get('/checkout/:id', async (req, res) => {
    try {
      const gig = await Gigs.findById(req.params.id);
      if (!gig) {
        return res.status(404).json({ message: 'Gig not found' });
      }
      res.json(gig);
    } catch (err) {
      res.status(500).json({ message: 'Error fetching gig', error: err });
    }
  });

module.exports = router;

