import Freelancer from "../models/freelance.model.js"
import User from "../models/user.model.js";

export const postFreelancerDetails = async (req, res) => {
    const data = req.body;

    if (data.username === "") return res.status(500).json({ "Error": "Please provide username" });

    const resp = await User.findOne({ username: data.username })
    if (!resp) return res.status(404).json({ "Error": "No such account exists with given username" })

    try {
        const newFreelancer = new Freelancer({
            first_name: data.fname,
            last_name: data.lname,
            client_count: data.clientCount,
            resume_link: data.resume,
            ...data
        })
        await newFreelancer.save();
        return res.status(200).json({ "msg": "Freelancer added" });
    } catch (error) {
        return res.status(500).json({"Error": error});
    }
}