# 📸 PhotoLabs - React Photo Sharing App

PhotoLabs is a **React-based photo-sharing application** that allows users to browse, like, and view details of various photos. This project was developed as part of the Web Development React course.

## 🚀 Features

- 🔹 Browse a collection of curated photos.
- ❤️ Like/unlike photos and keep track of favorites.
- 📌 View detailed information about each photo in a modal.
- 🔍 Navigate through different topics/categories.
- 🖥️ Smooth UI with interactive animations.

## Setup

**1️⃣ Clone the Repository**

**2️⃣ Install dependencies with `npm install` in each respective**
`/frontend` and `/backend`.

## [Frontend] Running Webpack Development Server

```sh
cd frontend
npm start
```

## [Backend] Running Backend Servier

Read `backend/readme` for further setup details.

```sh
cd backend
npm start
```

## 📁 Project Structure

/photo-labs
│── /frontend
│   ├── /public           # Static assets (index.html, images, etc.)
│   ├── /src
│   │   ├── /components   # Reusable UI components
│   │   ├── /routes       # Page views and routing
│   │   ├── /hooks        # Custom React hooks
│   │   ├── /styles       # SCSS stylesheets
│   │   ├── App.js        # Root component
│   │   ├── index.js      # React DOM entry point
│── /backend
│   ├── server.js         # Express server setup
│   ├── database/         # Database schema & queries
│   ├── routes/           # API routes for photos & topics
│── package.json
│── README.md

## ⚙️ Technologies Used

Frontend:
React (18.2.0)
React DOM (18.2.0)
React Scripts (5.0.1)
SCSS (1.59.2)
Webpack (Used in React Scripts)

Backend:
Node.js & Express (4.16.4)
PostgreSQL (pg 8.5.1)
CORS (2.8.5)
Dotenv (7.0.0)
Helmet (3.18.0)
Body-parser (1.18.3)


