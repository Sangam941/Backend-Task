import assignmentModel from "../models/assignmentModel.js";
import submissionModel from "../models/submissionModel.js";

export const submitAssignment = async (req, res) => {
    try {
        const { assignmentId, studentId, content } = req.body

        if (!assignmentId || !studentId || !content) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            })
        }

        const assignment = await assignmentModel.findById(assignmentId);

        if (!assignment) return res.status(404).json({
            success: false,
            message: "Assignment not found"
        })

        if (assignment.student.toString() !== studentId) {
            return res.status(403).json({
                success: false,
                message: "Student not assigned to this task"
            })
        }

        const submission = await submissionModel.create({
            assignment: assignmentId,
            student: studentId,
            content
        })

        return res.status(201).json({
            success: true,
            message: "Assignment submitted successfully",
            submission
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.messasge
        })
    }
}

export const allSubmission = async (req,res)=>{
    try {
        const submits = await submissionModel.find().populate("assignment", "title description student")

        return res.status(200).json({
            success:true,
            submits
        })
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:error.message
        })
    }
}

export const reviewSubmission = async (req, res) => {
    try {
        const { status, feedback } = req.body

        const submission = await submissionModel.findById(req.params.id).populate("assignment")

        if (!submission){
            return res.status(404).json({ 
                success:false,
                message: "Submission not found" 
            })
        }

        if (submission.assignment.mentor.toString() !== req.user._id.toString()){
            return res.status(403).json({ 
                success:false,
                message: "Not authorized" 
            })
        }

        submission.status = status
        submission.feedback = feedback

        await submission.save()
        return res.status(200).json({
            success:true,
            message:"feedback added"
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}