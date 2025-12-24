import express from 'express'
import { createStudent, deleteStudent, getAllStudent, updateStudent } from '../controllers/studentController.js'
import isAuthenticated from '../middlewares/isAuthenticated.js'

const router = express.Router()

router.post("/create-new-student", isAuthenticated ,createStudent)
router.get("/get-all-student", isAuthenticated ,getAllStudent)
router.put("/update-student/:id", isAuthenticated ,updateStudent)
router.delete("/delete-student/:id", isAuthenticated ,deleteStudent)

export default router