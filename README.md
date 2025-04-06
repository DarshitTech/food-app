# 🍔 Food & Restaurant App 

Welcome to **Food & Restaurant App** – your one-stop solution for seamless food ordering, restaurant management, and user authentication. Built with **Node.js**, **Express.js**, and **MongoDB**, this app ensures a smooth experience for both users and restaurant owners. 🚀



## 🚀 Quick Start Guide

### 🔹 **1. Clone the Repository**
```sh
git clone https://github.com/DarshiT2009/food-app.git
cd food-app
```

### 🔹 **2. Install Dependencies**
```sh
npm install
```

### 🔹 **3. Configure Environment Variables**
Create a `.env` file in the root directory and add:
```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=3000
```

### 🔹 **4. Run the Server**
```sh
npm start
```

---

## 🔥 API Endpoints

### 📌 **Authentication APIs**
- `POST /api/v1/auth/register` – Create a new user
- `POST /api/v1/auth/login` – User login

### 📌 **User APIs**
- `GET /api/v1/user/:id` – Retrieve user details
- `PUT /api/v1/user/update/:id` – Update user profile
- `PUT /api/v1/user/update-password` – Change password
- `POST /api/v1/user/reset-password` – Reset password
- `DELETE /api/v1/user/:id` – Delete user account

### 📌 **Restaurant APIs**
- `POST /api/v1/restaurant` – Create a restaurant
- `GET /api/v1/restaurant` – View all restaurants
- `GET /api/v1/restaurant/:id` – Get restaurant details
- `DELETE /api/v1/restaurant/:id` – Remove restaurant

### 📌 **Category APIs**
- `POST /api/v1/category` – Add category
- `GET /api/v1/category` – List all categories
- `PUT /api/v1/category/:id` – Update category
- `DELETE /api/v1/category/:id` – Remove category

### 📌 **Food APIs**
- `POST /api/v1/food` – Add a food item
- `GET /api/v1/food` – View all food items
- `GET /api/v1/food/:id` – Get food item details
- `GET /api/v1/food/restaurant/:id` – Get food items by restaurant
- `DELETE /api/v1/food/:id` – Remove food item
- `PUT /api/v1/food/:id` – Edit food details

### 📌 **Order APIs**
- `POST /api/v1/order` – Place an order
- `PUT /api/v1/order/status/:id` – Update order status
- `GET /api/v1/order/restaurant/:id` – Get all orders for a restaurant

---

## 🛠️ Built With

- **Node.js** - Backend runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - ODM for MongoDB
- **JWT** - Secure authentication
- **bcryptjs** - Password encryption

---

## 💡 Contributing
We welcome contributions! Fork the repository, make changes, and submit a pull request. 🎉

---


⚡ **Star this repository to support the project! ⭐**

