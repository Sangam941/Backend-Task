import mongoose, { mongo } from "mongoose";

const StudentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },

    email: { 
        type: String, 
        required: true, 
        unique: true 
    },
    
    mentor : {
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Mentor"
    }
}, {timestamps: true})

export default mongoose.model("Student", StudentSchema)