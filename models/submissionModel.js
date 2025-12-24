import mongoose from "mongoose";

const SubmissionSchema = new mongoose.Schema(
    {
        assignment: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Assignment",
        },
        student: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Student",
        },
        content: String,
        status: {
            type: String,
            enum: ["pending", "completed"],
            default: "pending"
        },
        feedback: {
            type: String,
            default : "",
        },
        submittedAT: {
            type: Date,
            default: Date.now
        }

    });

export default mongoose.model("Submission", SubmissionSchema);
