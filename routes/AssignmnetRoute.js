import express from 'express'
import { createAssignment, getAllAssignment } from '../controllers/assignmentController.js'
import isAuthenticated from '../middlewares/isAuthenticated.js'

const router = express.Router()

router.post("/create-assignment", isAuthenticated , createAssignment)
router.get("/get-all-assignment", isAuthenticated , getAllAssignment)

export default router