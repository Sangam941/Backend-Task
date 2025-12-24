import express from "express"
import dotenv from "dotenv"
import connectDB from "./config/db.js"
import MentorRoute from "./routes/MentorRoute.js"
import StudentRoute from "./routes/StudentRoute.js"
import AssignmentRoute from "./routes/AssignmnetRoute.js"
import SubmissionRoute from "./routes/SubmissionRoute.js"

dotenv.config()
connectDB()

const app = express()
const PORT = process.env.PORT || 8000

app.use(express.json())

app.use("/api/auth", MentorRoute)
app.use("/api/students", StudentRoute)
app.use("/api/assignment", AssignmentRoute)
app.use("/api/submission", SubmissionRoute)


app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
