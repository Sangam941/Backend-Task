import express from 'express'
import { allSubmission, reviewSubmission, submitAssignment } from '../controllers/submissionController.js'
import isAuthenticated from '../middlewares/isAuthenticated.js'

const router = express.Router()

router.post("/submit", submitAssignment)
router.get("/all-submission", isAuthenticated, allSubmission)
router.post("/review/:id", isAuthenticated, reviewSubmission)

export default router