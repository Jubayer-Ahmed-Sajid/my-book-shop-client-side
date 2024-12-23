# My Book Shop

My Book Shop is a web application for managing books, users, and orders. It includes features for both buyers and sellers, such as viewing book details, adding books to the cart, managing user roles, and more.

## Live Demo

Check out the live application [here](https://book-shop-jp-project.vercel.app).


## Features

- **User Authentication**: Login and registration for users.
- **Admin Dashboard**: Manage users, approve user status, and assign admin roles.
- **Seller Dashboard**: Add, update, and delete books.
- **Buyer Dashboard**: View wishlist, add books to the cart, and manage orders.
- **Book Details**: View detailed information about each book.
- **Responsive Design**: Optimized for both desktop and mobile devices.

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

## Installation

1.  **Clone the repository**:

    ```sh
    https://github.com/Jubayer-Ahmed-Sajid/my-book-shop-client-side.git
    ```

2.  **Install dependencies**:

    ```sh
    npm install
    ```

3.  **Set up environment variables**:

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

1. **Start the development server**:

   ```sh
   npm run dev
   ```

   This will start the application on `http://localhost:5173`.

2. **Build the application for production**:

   ```sh
   npm run build
   ```

   This will create a `build` directory with the production build of the application.

