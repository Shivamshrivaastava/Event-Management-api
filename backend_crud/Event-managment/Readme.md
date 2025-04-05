# 🎉 Event Management Backend API

A robust Node.js + Express backend for managing users, events, and bookings. Built using MongoDB and JWT authentication.

---

## 🚀 Features

- User registration & login (with role-based access)
- JWT authentication & middleware
- Event creation, update, delete (by event creator or admin)
- Booking events and canceling bookings
- Admin-only access to all users
- MongoDB database integration

---

## 📁 Project Structure
event-management-backend/
├── config/
│   └── db.js
├── controllers/
│   ├── auth.controller.js
│   ├── event.controller.js
│   └── booking.controller.js
├── middleware/
│   ├── auth.middleware.js
│   └── role.middleware.js
├── models/
│   ├── user.model.js
│   ├── event.model.js
│   └── booking.model.js
├── routes/
│   ├── auth.routes.js
│   ├── event.routes.js
│   └── booking.routes.js
├── .env
├── app.js
├── server.js
├── package.json
└── README.md

---

## 📦 Tech Stack

- Node.js
- Express.js
- MongoDB & Mongoose
- JWT for Authentication
- Dotenv for environment configuration




