import mongoose from "mongoose";

const MentorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },

    email: { 
        type: String, 
        required: true, 
        unique: true 
    },
    
    password: { 
        type: String, 
        required: true 
    },

    role : {
        type: String,
        default: "mentor",
    }
}, {timestamps: true})


export default mongoose.model("Mentor", MentorSchema)