import assignmentModel from "../models/assignmentModel.js"
import studentModel from "../models/studentModel.js"


export const createAssignment = async (req, res) => {
    try {
        const { title, description , studentId} = req.body;

        if (!title || !description || !studentId) {
            res.status(400);
            throw new Error("All fields are required")
        }

        const student = await studentModel.findById(studentId)
        if (!student) {
            return res.status(404).json({
                success: false,
                message: "student not found"
            })
        }

        if (student.mentor.toString() !== req.user._id.toString()) {
            return res.status(403).json({
                success: false,
                message: "Unauthorize mentor! cannot assign task"
            })
        }

        const assignment = await assignmentModel.create({
            title,
            description,
            student: studentId,
            mentor: req.user._id
        });

        return res.status(201).json({
            success:true,
            message:"assignmnet created and assign to the student",
            assignment
        });
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:error.message
        })
    }
}

export const getAllAssignment = async (req,res)=>{
    try {
        const allAssignment = await assignmentModel.find({mentor: req.user._id})

        return res.status(200).json({
            success:true,
            allAssignment
        })
    } catch (error) {
        return res.status(500).json({message: error.message, success:false})
    }
}
