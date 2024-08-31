import express from "express";
import { postFreelancerDetails } from "../controllers/freelance.controller.js";


const router = express.Router();

router.post("/", postFreelancerDetails);

export default router;