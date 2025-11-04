# ArgentBank: Building the Front-End of a Banking Application with React 💰

## 🎯 Project Objectives

The objective of this project was to **develop the front-end of a modern banking application** using **React** and **Redux**, and to connect it to an existing back-end via **API calls**.  
The goal was to create a fully functional, responsive, and user-friendly dashboard that allows users to view and manage their personal account information securely.

This project is part of the **Web Integrator training course – OpenClassrooms**.

---

## 🧠 Skills Developed

- **React Development** – Building a modular and maintainable user interface using functional components and hooks.  
- **State Management with Redux** – Implementing a global state system to handle user authentication and profile data consistently across the app.  
- **API Communication** – Writing REST API calls to connect the front-end and back-end, ensuring smooth client-server interactions.  
- **Environment Configuration** – Managing API endpoints securely through a `.env` environment file.  
- **Routing with React Router** – Setting up dynamic routes for pages such as home, login, and user profile.  
- **Swagger Documentation Reading & Writing** – Interpreting existing API documentation and **writing new Swagger (OpenAPI) specifications** for transaction-related endpoints (GET, POST, PUT, DELETE).  
- **Green Code Practices** – Optimizing images and creating reusable components to reduce redundancy and improve performance.  
- **Responsive UI Design** – Developing layouts that adapt seamlessly to different devices for an optimal user experience.  

---

## ⚙️ Technical Stack

- **Languages:** JavaScript (ES6+), HTML5, CSS3  
- **Framework:** React  
- **State Management:** Redux Toolkit  
- **Routing:** React Router  
- **API Documentation:** Swagger (OpenAPI)  
- **Backend:** [ArgentBank Backend Repository](https://github.com/OpenClassrooms-Student-Center/ArgentBank-Backend)  
- **Environment Variables:** `.env` file for API base URL configuration  
- **Tools:** Visual Studio Code, Git, GitHub, Node.js, npm  

---

## 🚀 Features Implemented

### 🔐 User Authentication
- Login form with error handling for incorrect credentials.  
- Logout functionality to securely end the user session.  
- Protected routes accessible only after successful authentication.

### 👤 User Profile Management
- Display of user-specific profile information retrieved via API.  
- Ability to **edit the user’s username (pseudo)** directly from the profile page.  
- First and last names displayed as read-only fields.

### 📊 Dashboard and Data Integration
- Integration of **back-end data** through API calls.  
- Redux store setup for managing authentication tokens and user data globally.  
- Implementation of **conditional rendering** based on login status.

### 🧾 API Documentation (Swagger)
- Creation of **Swagger documentation (OpenAPI YAML)** describing new endpoints for managing transactions.  
- Definition of **HTTP methods**, **routes**, **parameters**, and **response codes** for transaction operations (viewing, editing, adding, and deleting details).  
- Validation of API structure using Swagger Editor to ensure compliance with REST standards.

### 🌱 Green Code and Optimization
- Use of reusable and modular React components to optimize performance.  
- Lightweight and maintainable front-end architecture.  
- Image and asset optimization to improve loading speed.

---

## 📦 Getting Started

### Prerequisites
Before you begin, make sure you have installed:
- **Node.js** (v16 or later)
- **npm** or **yarn**
- A modern web browser (Chrome, Firefox, etc.)

### Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/Julie-Des/Projet10-oc
   ```

2. Install dependencies:
   
   ```bash
   npm install
   ```

3. Create a .env file at the root of the project and set the API URL:
   
   ```bash
   VITE_API_URL=http://localhost:3001/api/v1
   ```

4. Start the development server:
   
   ```bash
   npm run dev
   ```

### Backend Setup

The backend for this project is available at:
👉 https://github.com/OpenClassrooms-Student-Center/ArgentBank-Backend

Follow the instructions in that repository to start the API before running the front-end.

### Testing the Application

Once both the front-end and back-end are running:

Visit http://localhost:5173/
 (or your local Vite port).

You can log in using the test credentials provided in the backend documentation.

---

## 💻 Project Structure

```
├── 📂 src
│   ├── 📂 components
│   │   ├── 📄 Account.jsx
│   │   ├── 📄 EditNameForm.jsx
│   │   ├── 📄 Features.jsx
│   │   ├── 📄 Hero.jsx
│   │   ├── 📄 Layout.jsx
│   ├── 📂 pages
│   │   ├── 📄 HomePage.jsx
│   │   ├── 📄 SignIn.jsx
│   │   ├── 📄 User.jsx
│   │   ├── 📄 NotFound.jsx
│   ├── 📂 redux
│   │   ├── 📂 auth
│   │   │   ├── 📄 authAPI.js
│   │   │   ├── 📄 authSlice.js
│   │   ├── 📂 user
│   │   │   ├── 📄 userAPI.js
│   │   │   ├── 📄 userSlice.js
│   │   ├── 📄 store.js
│   ├── 📂 router
│   │   ├── 📄 AppRouter.jsx
│   ├── 📂 style
│   │   ├── 📄 main.css
│   ├── 📂 Data
│   │   ├── 📄 accountsData.json
│   ├── 📄 App.jsx
│   ├── 📄 main.jsx
├── 📄 .env
├── 📄 vite.config.js
├── 📄 package.json
├── 📄 README.md
```

---

## 📸 Screenshots

<img width="1888" height="882" alt="image" src="https://github.com/user-attachments/assets/bc5a271a-0272-447f-a272-fbe0d352fe99" />

<img width="1891" height="892" alt="image" src="https://github.com/user-attachments/assets/ae4430cc-1c7e-4a55-a2b2-12daa1f1b926" />

---

## 📬 Contact

Deshayes Julie - julie.deshayes14@gmail.com

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


