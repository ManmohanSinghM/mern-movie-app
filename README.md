# 🎬 MERN Stack Movie Application

A full-stack movie management application built with React, Node.js, MongoDB, and Redis. Features include user authentication, role-based access control (Admin/User), and a background job queue for processing movie additions.

## 🚀 Live Demo
**Application URL:** [PASTE YOUR VERCEL LINK HERE]  
**Backend API:** [PASTE YOUR RAILWAY LINK HERE]

---

## ✨ Features

- **Authentication:** Secure Login & Signup using JWT (JSON Web Tokens).
- **RBAC (Role-Based Access Control):**
  - **Guests:** Can view movies and search/filter.
  - **Users:** Can view movies, pagination, and sorting.
  - **Admins:** Can **Add** and **Delete** movies.
- **Advanced Data Handling:**
  - Server-side Search, Sort, and Pagination.
  - Efficient database queries with MongoDB.
- **Background Processing:**
  - Uses **Redis + Bull** to handle heavy tasks (simulating a movie processing queue) asynchronously.

---

## 🛠 Tech Stack

- **Frontend:** React (Vite), Material UI (MUI), Axios, React Router.
- **Backend:** Node.js, Express.js.
- **Database:** MongoDB Atlas.
- **Queue System:** Redis Cloud, Bull.
- **Deployment:** Vercel (Frontend), Railway (Backend).

---

## 🔑 Demo Credentials

To test the **Admin features** (Add/Delete movies), you can log in with:

- **Username:** `admin`
- **Password:** `adminpassword123`

*(Or sign up to create your own account, then update the role to 'admin' in the database).*

---

## 💻 Local Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/YOUR_USERNAME/mern-movie-app.git](https://github.com/YOUR_USERNAME/mern-movie-app.git)
   cd mern-movie-app
