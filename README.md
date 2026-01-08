# 🛍 ShopHub – React E-Commerce Product Listing

A responsive product listing page built with React, featuring filtering, sorting, favorites, pagination, and localStorage persistence.

---

## 🚀 Features

- Product Grid with:
  - Image  
  - Name  
  - Price  
  - Category  
  - Rating
- Sticky Filter Bar
  - Filter by Category
  - Filter by Rating
  - Sort by Price (Ascending / Descending)
- Favorites System
  - Add / Remove products
  - Highlight favorite items
  - Persist using localStorage
- Client-side Pagination (6 products per page)
- Fully Responsive Layout

---

## 🛠 Tech Stack

- React (Functional Components & Hooks)
- Axios for API calls
- SCSS for styling
- Vite for bundling

---

## 📁 Folder Structure

src/
 components/
  ProductCard.jsx
  FilterBar.jsx
  Pagination.jsx
 data/products.json
 styles/
  app.scss
  product.scss
  filter.scss
 App.jsx
 main.jsx

---

## 📦 Installation

Make sure Node.js is installed.

npm install

---

## ▶ Run Project

npm run dev

---

## 🔄 Data Source

Product data is fetched from:

src/data/products.json

Using Axios:

axios.get('/data/products.json')

---

## 💾 Favorites Persistence

Favorites are stored in browser localStorage so the selection is retained after refresh.

---

## 📌 Notes

- No third-party UI libraries used  
- No external state management  
- Clean readable interview-ready code  

---

## 👨‍💻 Author
Ganesh Gavane
Front-end Developer
