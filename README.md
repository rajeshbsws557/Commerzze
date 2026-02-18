# 🛍️ Daraz - E-Commerce Website

A fully functional, beautiful e-commerce platform built with **Next.js**, **TypeScript**, and **Tailwind CSS**, featuring 500+ products and complete shopping functionality.

## ✨ Features

### Core Functionality
- ✅ **500+ Products** - Comprehensive product catalog with 12 categories
- ✅ **Product Search** - Real-time search across products, categories, and descriptions
- ✅ **Shopping Cart** - Add, remove, and update quantities with persistent storage
- ✅ **Wishlist** - Save favorite products for later
- ✅ **Product Filtering** - Filter by price, sort by price and rating
- ✅ **Category Navigation** - Browse by 12 different product categories
- ✅ **Flash Deals** - View all products with discounts up to 60%
- ✅ **Product Details** - Comprehensive product pages with ratings, reviews, and related items
- ✅ **Responsive Design** - Fully mobile-friendly interface

### Product Categories
1. Electronics
2. Clothing
3. Home & Garden
4. Sports & Outdoors
5. Beauty & Personal Care
6. Books & Media
7. Toys & Games
8. Food & Grocery
9. Health & Wellness
10. Automotive
11. Pet Supplies
12. Office & Stationery

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ installed
- npm or yarn package manager

### Installation

1. **Navigate to project directory:**
```bash
cd c:\Users\Networking-Lab\Pictures\Web-App
```

2. **Install dependencies:**
```bash
npm install
```

3. **Run development server:**
```bash
npm run dev
```

4. **Open in browser:**
Visit `http://localhost:3000`

## 📦 Build & Deployment

### Production Build
```bash
npm run build
npm start
```

### Linting
```bash
npm run lint
```

## 🏗️ Project Structure

```
src/
├── app/                          # Next.js App Router pages
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                 # Home page
│   ├── globals.css              # Global styles
│   ├── product/[id]/page.tsx    # Product detail page
│   ├── cart/page.tsx            # Shopping cart page
│   ├── wishlist/page.tsx        # Wishlist page
│   ├── all-products/page.tsx    # All products page
│   ├── category/[slug]/page.tsx # Category page
│   ├── search/page.tsx          # Search results page
│   └── deals/page.tsx           # Flash deals page
├── components/                   # React components
│   ├── Header.tsx               # Header with navigation
│   ├── Footer.tsx               # Footer
│   ├── ProductCard.tsx          # Product card component
│   └── ProductGrid.tsx          # Product grid layout
├── data/                        # Static data
│   └── products.ts              # 500+ products database
├── store/                       # State management
│   └── index.ts                 # Zustand store (cart, wishlist)
├── types/                       # TypeScript types
│   └── index.ts                 # Type definitions
└── lib/                         # Utility functions
```

## 🎨 Key Components

### Header Component
- Logo and branding
- Search functionality
- Navigation menu
- Cart and wishlist counters
- Mobile responsive menu

### ProductCard Component
- Product image with hover effect
- Price display with discounts
- Rating and reviews
- Quick add to cart button
- Wishlist toggle

### Product Page
- Detailed product information
- Image gallery
- Quantity selector
- Add to cart functionality
- Related products
- Shipping and return information

### Cart Page
- Full cart management
- Order summary with tax and shipping
- Price calculations
- Quantity adjustment
- Remove items

### Wishlist Page
- View all saved products
- Quick cart addition
- Remove from wishlist

## 💾 State Management

Using **Zustand** for lightweight state management:

```typescript
// Cart Store
useCartStore() - Manage shopping cart items

// Wishlist Store
useWishlistStore() - Manage wishlist items
```

Both stores use localStorage for persistence.

## 🎯 Pages Overview

| Page | URL | Description |
|------|-----|-------------|
| Home | `/` | Homepage with featured products and categories |
| All Products | `/all-products` | Browse all products with filters |
| Category | `/category/:slug` | View products by category |
| Product | `/product/:id` | Detailed product information |
| Search | `/search?q=query` | Search results |
| Deals | `/deals` | Flash deals and discounts |
| Cart | `/cart` | Shopping cart |
| Wishlist | `/wishlist` | Saved products |

## 🎨 Styling

- **Tailwind CSS** - Utility-first CSS framework
- **Lucide Icons** - Beautiful icon library
- **Custom Color Scheme** - Daraz red (#EE4D2D) theme
- **Responsive Design** - Mobile, tablet, and desktop optimized

## 📱 Device Support

- ✅ Desktop (1920px and above)
- ✅ Laptop (1024px - 1919px)
- ✅ Tablet (768px - 1023px)
- ✅ Mobile (320px - 767px)

## 🔐 Security Features

- Secure state management with Zustand
- Input validation
- Safe image loading
- XSS protection through React

## 📈 Performance

- Next.js optimizations
- Image optimization with Next.js Image component
- Efficient rendering with React
- Code splitting and lazy loading ready
- Fast development with Turbopack

## 🎁 Product Generation

Products are dynamically generated with:
- Realistic names and descriptions
- Price ranges (₨500 - ₨50,000)
- Discount calculations (0-60%)
- Random ratings (3.5 - 5.0)
- Stock availability
- Multiple sellers
- Category assignments

## 🛠️ Technologies Used

- **Next.js 15+** - React framework with server-side rendering
- **TypeScript** - Type-safe JavaScript
- **React 19** - UI library
- **Tailwind CSS** - Utility-first CSS
- **Zustand** - State management
- **Lucide Icons** - Icon library
- **Next.js Image** - Optimized image component

## 📝 Environment Configuration

- Node version: 16+
- npm version: 8+
- Build time: ~30 seconds
- Bundle size: Optimized

## 🚀 Future Enhancements

- [ ] User authentication
- [ ] Payment gateway integration
- [ ] Order management
- [ ] Review and rating system
- [ ] Real-time inventory tracking
- [ ] Email notifications
- [ ] Admin dashboard
- [ ] Analytics

## 🤝 Contributing

Feel free to customize and enhance this template for your needs.

## 📄 License

**Non-Commercial License** - This project is for educational and portfolio purposes only. Commercial use is strictly prohibited without prior written consent.

## 📞 Support

For issues or questions, please check the documentation or create an issue in the repository.

---

**Happy Shopping!** 🎉 Build your e-commerce dreams with Daraz template.
