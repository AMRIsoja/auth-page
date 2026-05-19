# 🔐 Responsive Login & Signup Page

A modern, responsive authentication UI built with **React (Vite)** featuring client-side validation, smooth transitions, and a clean user experience.

---

## 🚀 Live Demo

https://auth-page-pearl.vercel.app/

---

## 📁 Repository

https://github.com/AMRIsoja/auth-page

---

## ✨ Features

- 🔐 Login and Signup forms
- ✅ Full client-side validation
- 👁️ Show / hide password toggle
- ⚠️ Inline error messages per field
- ⏳ Loading state on form submission
- 🎬 Smooth fade/slide transitions between forms
- 📱 Fully responsive (mobile + desktop)
- ♿ Accessibility improvements (labels, aria attributes)
- 🎨 Clean UI with CSS Modules

---

## 🧠 Validation Rules

### Email
- Must be valid email format

### Password
- Minimum 8 characters
- At least 1 uppercase letter
- At least 1 number

### Username (Signup)
- Minimum 3 characters

### Confirm Password
- Must match password

---

## 🛠️ Tech Stack

- React (Vite)
- JavaScript (ES6+)
- CSS Modules
- HTML5
- Deployed on Vercel

---

## 📂 Project Structure
src/
├── components/
│   ├── InputField.jsx
│   ├── LoginForm.jsx
│   └── SignupForm.jsx
├── pages/
│   └── AuthPage.jsx
├── styles/
│   ├── global.css
│   ├── AuthPage.module.css
│   ├── InputField.module.css
│   └── LoginForm.module.css
├── utils/
│   └── validation.js
├── App.jsx
└── main.jsx

---

## ⚙️ Installation & Setup

```bash
git clone https://github.com/AMRIsoja/auth-page.git
cd auth-page
npm install
npm run dev
