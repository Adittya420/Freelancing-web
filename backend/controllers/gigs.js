import express from 'express';
import Gig from '../models/gigs.model.js';
const router = express.Router();

router.get('/checkout/:id', async (req, res) => {
    try {
      const gig = await Gig.findById(req.params.id);
      if (!gig) {
        return res.status(404).json({ message: 'Gig not found' });
      }
      res.json(gig);
    } catch (err) {
      res.status(500).json({ message: 'Error fetching gig', error: err });
    }
  });

export default router;

