
#  Food & Restaurant App  
A full-featured food ordering and restaurant management system that allows users to **order food**, **manage restaurants**, and **securely authenticate**, built with **Node.js**, **Express.js**, and **MongoDB**. 🚀  

---

## 🌟 Features

- 🔐 **User Authentication** – Secure login, register, and password management with JWT.  
- 🧑‍🍳 **Restaurant Management** – Add, view, update, and delete restaurants.  
- 🍽️ **Menu Management** – Create and manage food categories and items.  
- 🛒 **Order System** – Place, track, and update food orders.  
- 🧑‍🤝‍🧑 **Role-Based Support** – Features for both users and restaurant admins.  
- 🔁 **API-Driven** – RESTful API architecture for modularity and scalability.

---

## 🔧 Prerequisites

Make sure you have the following installed:

- [Git](https://git-scm.com/)  
- [Node.js & npm](https://nodejs.org/)  
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) or local instance

---

## 🛠️ Setup Instructions

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/DarshiT2009/food-app.git
cd food-app
```

### 2️⃣ Install Required Dependencies
```bash
npm install
```

### 3️⃣ Configure Environment Variables  
Create a `.env` file in the root directory:
```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=3000
```

### 4️⃣ Run the Server
```bash
npm start
```

> 💡 Use `nodemon` if you want auto-restart on file changes.

---

## 📡 API Overview

The app is fully powered by RESTful APIs. Here’s a breakdown:

### 🔐 Authentication APIs
- `POST /api/v1/auth/register` – Create an account  
- `POST /api/v1/auth/login` – Log in with credentials  

### 👤 User APIs
- `GET /api/v1/user/:id` – Get user details  
- `PUT /api/v1/user/update/:id` – Update user profile  
- `PUT /api/v1/user/update-password` – Change password  
- `POST /api/v1/user/reset-password` – Reset password  
- `DELETE /api/v1/user/:id` – Delete user account  

### 🍽️ Restaurant APIs
- `POST /api/v1/restaurant` – Add a new restaurant  
- `GET /api/v1/restaurant` – View all restaurants  
- `GET /api/v1/restaurant/:id` – Get restaurant by ID  
- `DELETE /api/v1/restaurant/:id` – Delete a restaurant  

### 🧾 Category APIs
- `POST /api/v1/category` – Add category  
- `GET /api/v1/category` – Get all categories  
- `PUT /api/v1/category/:id` – Update category  
- `DELETE /api/v1/category/:id` – Delete category  

### 🍕 Food APIs
- `POST /api/v1/food` – Add food item  
- `GET /api/v1/food` – Get all food items  
- `GET /api/v1/food/:id` – Get specific food item  
- `GET /api/v1/food/restaurant/:id` – Get food by restaurant  
- `PUT /api/v1/food/:id` – Update food item  
- `DELETE /api/v1/food/:id` – Delete food item  

### 🛍️ Order APIs
- `POST /api/v1/order` – Place an order  
- `PUT /api/v1/order/status/:id` – Update order status  
- `GET /api/v1/order/restaurant/:id` – Get restaurant orders  

---

## 🎥 Demo & Preview

- 🎬 **Video Walkthrough**: [Watch on YouTube](https://youtu.be/PU4fUWZl09Y)  

---

## 🤝 Contributing

We 💖 contributions!  
Feel free to:
- Fork the repo  
- Raise pull requests  
- Suggest new features or report bugs via [Issues](https://github.com/DarshiT2009/food-app/issues)

---

## 📌 Tech Stack

- **Backend**: Node.js, Express.js  
- **Database**: MongoDB + Mongoose  
- **Authentication**: JWT (JSON Web Token), bcryptjs  

---

## 🙌 Acknowledgements

- [MongoDB](https://www.mongodb.com/)  
- [Express.js](https://expressjs.com/)  
- [JWT](https://jwt.io/)  
- [bcryptjs](https://www.npmjs.com/package/bcryptjs)


