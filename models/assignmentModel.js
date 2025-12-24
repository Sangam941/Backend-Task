import mongoose from "mongoose";

const AssignmentSchema = new mongoose.Schema(
    {
        title: String,
        description: String,
        mentor: { 
            type: mongoose.Schema.Types.ObjectId,
            ref: "Mentor" 
        },

        student: { 
            type: mongoose.Schema.Types.ObjectId, 
            ref: "Student" 
        }
    });

export default mongoose.model("Assignment", AssignmentSchema);
