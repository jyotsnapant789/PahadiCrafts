# 🛒 MERN E-Commerce Website

Welcome to the **MERN E-Commerce Website**! This project is a feature-rich e-commerce application built using the powerful MERN stack, complete with an intuitive user-facing store and an all-encompassing admin dashboard.

## ✨ Features

### 🌟 User Frontend:

- **🔒 Secure Authentication**: Register, login, and manage user profiles effortlessly.
- **🛍️ Product Exploration**: Browse and search through an extensive product catalog with advanced filtering options.
- **🛒 Shopping Cart**: Add products to your cart, modify quantities, and proceed to a hassle-free checkout.
- **💳 Seamless Payments**: Make secure payments using Stripe integration.
- **📦 Order Management**: View or der history, track deliveries, and manage returns with ease.

### ⚙️ Admin Dashboard:

- **🛠️ Product Management**: Add, update, or delete products with a user-friendly interface.
- **📂 Category Management**: Organize products into categories for better navigation.
- **📑 Order Management**: View, process, and update orders efficiently.
- **👥 User Management**: Manage user roles and access levels.

## 🛠️ Tech Stack

- **MongoDB**: Robust NoSQL database for storing all application data.
- **Express.js**: Fast and minimalistic backend framework.
- **React.js**: Modern frontend library for building dynamic user interfaces.
- **Node.js**: JavaScript runtime environment for running the backend.
- **Stripe**: Integrated payment gateway for processing transactions.
- **JWT**: JSON Web Tokens for secure user sessions.

## 🗂️ Folder Structure

```plaintext
/
|-- admin/            # React.js admin frontend code
|-- backend/          # Node.js backend code (Express.js)
|-- frontend/         # React.js frontend code
|-- .gitignore        # Files and folders to be ignored by Git
|-- README.md         # Project documentation
```

## 🤸 Quick Start

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [NPM](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/MenathNDGD/MERN-Ecommerce.git
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Set Up Environment Variables**

<details>
<summary><code>/admin/.env</code></summary>

```env
VITE_BACKEND_URL = "http://localhost:4000"
```

</details>

<details>
<summary><code>/backend/.env</code></summary>

```env
MONGODB_URI = mongodb+srv://jyotsna:ZOHigrnBjryDq5hr@cluster.y5at2uv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster

CLOUDINARY_API_KEY = '553438413973999'

CLOUDINARY_SECRET_KEY = 'Wsq7SPT4L98JNQwOkYXoLJt_P1M'

CLOUDINARY_CLOUD_NAME = 'djyu2wyb2'

JWT_SECRET = '0ac2178f2de944d1d21d47a964e931324bab5e6bbb6f239c846ad091dd6fe182a32b92cb8f9dd3c1e3d93499f56560f27a0dde16ed01a5440646ac7002053024'

ADMIN_EMAIL = "admin@pahadi.com" #For testing only

ADMIN_PASSWORD = "admin@123" #For testing only

```

</details>

<details>
<summary><code>/frontend/.env</code></summary>

```env
VITE_BACKEND_URL = "http://localhost:8080"
```

</details>

Replace the placeholder values with your actual Appwrite credentials.

**Running the Project**

**Admin Dashboard Running On:**

```bash
cd admin
```

```bash
npm run dev
```

**Backend Running On:**

```bash
cd backend
```

```bash
npm run server
```

**Frontend Running On:**

```bash
cd frontend
```

```bash
npm run dev
```

Open [http://localhost:5174](http://localhost:5174) in your browser to view the admin dashboard.

Open [http://localhost:400](http://localhost:400) in your browser to run the backend.

Open [http://localhost:5173](http://localhost:5173) in your browser to view the frontend project.
