import studentModel from "../models/studentModel.js"


export const createStudent = async (req,res)=>{
    try {
        const { name, email} = req.body

        const student = await studentModel.findOne({email})

        if(student){
            return res.status(409).json({
                success:false,
                message:"This student is already exist"
            })
        }

        const newStudent = await studentModel.create({
            name,
            email,
            mentor: req.user._id
        })

        return res.status(201).json({
            message:"new student crested",
            newStudent
        })
    } catch (error) {
        return res.status(500).json({message: error.message, success:false})
    }
}

export const getAllStudent = async (req,res)=>{
    try {
        const allStudent = await studentModel.find({mentor: req.user._id})

        return res.status(200).json({
            success:true,
            allStudent
        })
    } catch (error) {
        return res.status(500).json({message: error.message, success:false})
    }
}

export const updateStudent = async (req,res)=>{
    try {
        const {id} = req.params
        const {name, email} = req.body

        const updatedStudent = await studentModel.findByIdAndUpdate(id, {name, email}, {new:true})

        return res.status(200).json({
            success:true,
            message:"student updated",
            updatedStudent
        })
    } catch (error) {
        return res.status(500).json({message: error.message, success:false})
    }
}

export const deleteStudent = async (req,res)=>{
    try {
        const {id} = req.params

        const updatedStudent = await studentModel.findByIdAndDelete(id)

        return res.status(200).json({
            success:true,
            message:"student deleted successfully",
        })
    } catch (error) {
        return res.status(500).json({message: error.message, success:false})
    }
}