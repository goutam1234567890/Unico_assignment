# Unico Product Card Assignment

This project is a product card component built using **React**, **Redux**, and **TanStack Query (React Query)**, as per the assignment requirements provided by **Unico Connect**.

## ✨ Features

- Product data fetched from [Fake Store API](https://fakestoreapi.com/)
- State management using **Redux** (cart and favorites)
- Light/Dark mode toggle
- Cart and favorites persisted using **localStorage**
- Quantity control buttons and favorites toggle
- Error and loading states
- Responsive layout

## 🛠️ Tech Stack

- React (JavaScript)
- TanStack Query (`@tanstack/react-query`)
- HTML + CSS (No Tailwind or TypeScript used)
- React Context API (for theme)
- localStorage for persistence

## 📁 Folder Structure

unico-product-card/
├── public/
├── src/
│ ├── components/
│ │ └── ProductCard.js
│ ├── context/
│ │ └── GlobalContext.js
│ ├── pages/
│ │ └── Home.js
│ ├── styles/
│ │ └── App.css
│ ├── App.js
│ ├── index.js
├── package.json
└── README.md

## 🚀 How to Run

1. Clone the repo:
   git clone https://github.com/your-username/unico-product-card.git

2. Navigate into the folder:
cd unico-product-card

3. Install dependencies:
npm install

4. Start the development server:
npm start
