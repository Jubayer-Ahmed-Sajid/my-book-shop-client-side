# My Book Shop

My Book Shop is an online platform for buying and selling books. It provides a seamless experience for buyers, sellers, and admins to manage their book collections, orders, and user accounts.

## Live Demo

Check out the live application [here](https://book-shop-jp-project.vercel.app).

## Features

### 1. User Authentication and Authorization
- **JWT Security**: Secure authentication and authorization using JSON Web Tokens (JWT). Users can securely log in and access protected routes based on their roles (buyer, seller, admin).
- **Role-Based Access Control**: Different access levels for buyers, sellers, and admins to ensure that users can only access the features relevant to their roles.

### 2. Book Management
- **Add, Edit, and Delete Books**: Sellers can manage their book collections by adding, editing, and deleting books.
- **View Books**: Buyers can browse and search for books by categories, authors, and other filters.

### 3. Shopping Cart and Wishlist
- **Shopping Cart**: Buyers can add books to their shopping cart and proceed to checkout.
- **Wishlist**: Buyers can add books to their wishlist for future reference.

### 4. Order Management
- **Order History**: Buyers can view their order history such as products added to the cart or wishlist.


### 5. User Management
- **Profile Management**: Users can view and update their profile information.
- **Admin Dashboard**: Admins can manage all users, promote buyers to sellers, and view platform statistics.

### 6. Responsive Design
- **Fully Responsive**: The platform is designed to be fully responsive, ensuring a seamless experience across different devices and screen sizes.

### 7. Data Tables with @tanstack/react-table
- **Advanced Table Features**: Utilizes `@tanstack/react-table` for advanced table features such as sorting, pagination, and filtering.
- **Responsive Tables**: Tables are designed to be responsive, ensuring usability on different screen sizes.

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Jubayer-Ahmed-Sajid/my-book-shop-client-side
   ```
2. Navigate to the project directory::
   ```bash
   cd my-book-shop
   ```

3. Install dependencies:
   ```sh
   npm install
   ```

4. Set up environment variables:
   Create a `.env` file in the root directory and add the following variables:
   ```env
   VITE_IMAGE_HOSTING_KEY = 8a8981f4d0f401c61db3f653c2571b72
   VITE_APIKEY= AIzaSyBwPFUTuw8N44UOIWjCXMnT1mUWu6zUhmc
   VITE_AUTHDOMAIN= my-book-shop-a3373.firebaseapp.com
   VITE_PROJECTID= my-book-shop-a3373
   VITE_STORAGEBUCKET= my-book-shop-a3373.firebasestorage.app
   VITE_MESSAGINGSENDERID= 576581076781
   VITE_APPID= 1:576581076781:web:5b5878e52679a4599175a4
   ```

## Running the Application

1. Start the development server:
   ```sh
   npm run dev
   ```
   This will start the application on `http://localhost:5173`.

2. Build the application for production:
   ```sh
   npm run build
   ```
   This will create a `build` directory with the production build of the application.

