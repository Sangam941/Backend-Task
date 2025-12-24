# Mentor-Student Management System (Backend Only)

## Description
This is a backend-only Mentor-Student Management System. Mentors can manage students, assign tasks, review submissions, and track progress. Students can submit assignments via API. No frontend is required.

---

## Features

### Authentication
- Mentor login using JWT
- Role-based access control

### Student Management (Mentor Only)
- Create student
- Read all assigned students
- Update student
- Delete student

### Assignment Management
- Assign tasks to individual students
- View assignments per mentor

### Submission Management
- Students submit assignments via API
- Mentor can review submissions
- Update submission status (completed/incomplete) and provide feedback

---

## Database Design

**Entities:**
- Mentor
- Student
- Assignment
- Submission

**Relationships:**
- Mentor → Student: 1-to-many
- Mentor → Assignment: 1-to-many
- Student → Assignment: 1-to-many
- Student → Submission: 1-to-many
- Assignment → Submission: 1-to-1

---


## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB & Mongoose
- JWT (Authentication)
- Bcrypt (Password Hashing)
- ES Modules (`import` / `export`)

---

## 📂 Project Structure
├──/  
│ ├── config/  
│ ├── controllers/  
│ ├── middlewares/  
│ ├── models/  
│ ├── routes/  
│ └── utils/  
| ├── .env  
| ├── .gitignore  
| ├── package.json  
| ├── package-lock.json  
| └── server.js  

## Base URL

Use the following base URL for all API requests:

**Live (Deployed) Backend:**  
`https://backend-task-ml7b.onrender.com`

**Local Development (Optional):**  
`http://localhost:5000`

---


## Mentor login credentials:
```bash
{
    "email": "mentor@gmail.com",
    "password": "mentor"
}
```
---
## API Endpoints

| Endpoint | Method | Description | Auth Required |
|----------|--------|-------------|---------------|
| https://backend-task-ml7b.onrender.com/api/auth/register | POST | Mentor register | ✅ |
| https://backend-task-ml7b.onrender.com/api/auth/login | POST | Mentor login | ✅ |
| https://backend-task-ml7b.onrender.com/api/students/get-all-student | GET | Get all students | ✅ Mentor only |
| https://backend-task-ml7b.onrender.com/api/students/create-new-student | POST | Add student | ✅ Mentor only |
| https://backend-task-ml7b.onrender.com/api/students/update-student/:id | PUT | Update student | ✅ Mentor only |
| https://backend-task-ml7b.onrender.com/api/students/delete-student/:id | DELETE | Delete student | ✅ Mentor only |
| https://backend-task-ml7b.onrender.com/api/assignment/create-assignment | POST | Assign task to student | ✅ Mentor only |
| https://backend-task-ml7b.onrender.com/api/assignment/get-all-assignment | GET | List assignments | ✅ Mentor only |
| https://backend-task-ml7b.onrender.com/api/submission/submit | POST | Student submits assignment | ❌ |
| https://backend-task-ml7b.onrender.com/api/submission/all-submission | GET | List all submissions | ✅ Mentor only |
| https://backend-task-ml7b.onrender.com/api/submission/review/:id | POST | Mentor reviews submission | ✅ Mentor only |

---


## ⚙️ Setup Instructions

### 🔹 Prerequisites

Ensure the following are installed:

- Node.js (v18 or later)
- npm
- MongoDB (Local or MongoDB Atlas)
- Git

---

### 🔹 Clone the Repository

```bash
git clone https://github.com/Sangam941/Backend-Task.git

```
---

### 🔹install Dependencies

```bash
npm install
```
---

### 🔹 Environment Variables

`PORT = `  
`MONGODB_URL = `  
`JWT_SECRET = `  
`JWT_TOKEN_EXPIRE = `  

---
