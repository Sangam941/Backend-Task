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

## API Endpoints

| Endpoint | Method | Description | Auth Required |
|----------|--------|-------------|---------------|
| /api/auth/login | POST | Mentor login | ✅ |
| /api/mentor/students | GET | Get all students | ✅ Mentor only |
| /api/mentor/students | POST | Add student | ✅ Mentor only |
| /api/mentor/students/:id | PUT | Update student | ✅ Mentor only |
| /api/mentor/students/:id | DELETE | Delete student | ✅ Mentor only |
| /api/assignments | POST | Assign task to student | ✅ Mentor only |
| /api/mentor/assignments | GET | List assignments | ✅ Mentor only |
| /api/submissions | POST | Student submits assignment | ❌ |
| /api/submissions/:id/review | PUT | Mentor reviews submission | ✅ Mentor only |

---

## Setup Instructions

1. Clone the repository
```bash
git clone <repo-link>
cd mentor-student-backend
