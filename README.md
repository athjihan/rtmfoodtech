# RTM FoodTech

A modern web application for RTM FoodTech built with React and Vite. This project showcases a food technology platform with product catalog, ordering information, and job listings.

## Features

- **Product Catalog**: Browse and view detailed information about food products
- **Order Guide**: Step-by-step instructions on how to place orders
- **Contact Page**: Get in touch with the team
- **Job Listings**: View available career opportunities
- **Responsive Design**: Mobile-friendly interface using Tailwind CSS
- **3D Graphics**: Interactive 3D elements with Three.js and React Three Fiber
- **Smooth Animations**: Rich user experiences with animation libraries

## Tech Stack

- **Frontend Framework**: React 19
- **Build Tool**: Vite 7
- **Styling**: Tailwind CSS 4 + PostCSS
- **Routing**: React Router DOM 7
- **3D Graphics**: Three.js with React Three Fiber
- **Icons**: Lucide React
- **Animations**: React Type Animation, React CountUp
- **Intersection Observer**: For scroll-triggered animations
- **Linting**: ESLint

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

5. Preview the production build:
```bash
npm run preview
```

## Project Structure

```
src/
├── components/       # Reusable React components
│   ├── Footer.jsx
│   ├── Hero.jsx
│   ├── Layout.jsx
│   ├── Navbar.jsx
│   └── ProductCard.jsx
├── pages/           # Page components
│   ├── Home.jsx
│   ├── Katalog.jsx
│   ├── ProductDetail.jsx
│   ├── CaraPesan.jsx
│   ├── Kontak.jsx
│   └── Loker.jsx
├── data/            # Data files
│   ├── products.js
│   └── products.json
├── assets/          # Static assets
│   ├── icon/
│   └── mesin/
├── index.css        # Global styles
└── main.jsx         # Application entry point

content/            # Content pages
```

## Available Routes

- `/` - Home page
- `/katalog` - Product catalog
- `/produk/:id` - Product detail page
- `/cara-pesan` - How to order guide
- `/kontak` - Contact page
- `/loker` - Job listings

## Development

### Code Quality

Run ESLint to check code quality:
```bash
npm run lint
```

### HMR (Hot Module Replacement)

Vite provides fast HMR during development for a smooth development experience.
