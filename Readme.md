# 🍔 Food Delivery App

A full-stack MERN Food Delivery application where users can browse food items, manage their cart, place orders, and admins can manage products and orders through a dedicated dashboard.

---

## ✨ Features

### 👤 User
- User Authentication (JWT)
- Browse Food Items
- Add/Remove Items from Cart
- Place Orders
- Secure Checkout (Stripe)
- Order History

### 🛠️ Admin
- Admin Dashboard
- Add New Food Items
- Manage Existing Foods
- View Customer Orders
- Update Order Status

### ⚙️ Backend
- RESTful APIs
- JWT Authentication
- MongoDB Database
- Image Upload Support (Multer)
- Stripe Payment Integration

---

## 🛠️ Tech Stack

### Frontend
- React
- Vite
- React Router DOM
- Axios

### Admin Panel
- React
- Vite
- React Toastify
- Axios

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- Bcrypt
- Multer
- Stripe

---

## 📂 Project Structure

```
Food Delivery App
│
├── frontend/      # User Application
├── admin/         # Admin Dashboard
└── backend/       # REST API Server
```

---

## 🚀 Getting Started

### 1. Clone Repository

```bash
git clone https://github.com/your-username/food-delivery-app.git
cd food-delivery-app
```

---

### 2. Backend Setup

```bash
cd backend
npm install
npm run server
```

---

### 3. Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

### 4. Admin Panel Setup

```bash
cd admin
npm install
npm run dev
```

---

## 🔑 Environment Variables

Create a `.env` file inside the **backend** folder.

```env
PORT=4000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

STRIPE_SECRET_KEY=your_stripe_secret_key

FRONTEND_URL=http://localhost:5173
```

---

## 📸 Screenshots

Add screenshots inside an `assets` folder and update the paths below.

| Home | Cart |
|------|------|
|<img width="1906" height="1044" alt="Image" src="https://github.com/user-attachments/assets/ca7cf1a0-963b-413f-8207-64140bf61198" />|
|<img width="1802" height="1035" alt="Image" src="https://github.com/user-attachments/assets/d32d6b27-ae7b-4290-9fc1-a9b9e8a6bc00" />|

| Login | Checkout |
|------|------|
|<img width="1833" height="1037" alt="Image" src="https://github.com/user-attachments/assets/8dce6119-7204-4de2-8711-98b398287dd2" />|
|<img width="1820" height="1018" alt="Image" src="https://github.com/user-attachments/assets/f135a0cf-c5c8-4a2a-bdc4-6594cf9e6189" />|

| Admin Dashboard | Orders |
|------|------|
|<img width="1845" height="1034" alt="Image" src="https://github.com/user-attachments/assets/8dbe7556-82ed-45d1-bb19-47abbbc9fcf1" />|
|<img width="1890" height="1039" alt="Image" src="https://github.com/user-attachments/assets/927ae3b0-92f6-425a-be31-7d6996535704" />|

---

## 📌 API Features

- User Authentication
- Food Management
- Cart Management
- Order Management
- Payment Processing
- Admin Operations

---

## 📈 Future Improvements

- Email Notifications
- Coupon System
- Search & Filters
- Wishlist
- Ratings & Reviews
- Live Order Tracking
- Docker Support

---

## 👨‍💻 Author

**Kartik Palan**

GitHub: https://github.com/kartikpalan1022-reaper

---

## 📄 License

This project is licensed under the MIT License.