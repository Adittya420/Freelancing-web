import mongoose from "mongoose";

const freelancerSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    username: String,
    email: String,
    category:String,
    employment:String,
    linkedin:String,
    resume_link:String,
    client_count:String
});

export default mongoose.model("Freelancer", freelancerSchema);