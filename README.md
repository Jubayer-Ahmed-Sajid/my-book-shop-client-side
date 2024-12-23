# My Book Shop

My Book Shop is a web application for managing books, users, and orders. It includes features for both buyers and sellers, such as viewing book details, adding books to the cart, managing user roles, and more.

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

1. **Clone the repository**:

    ```sh
    git clone https://github.com/Jubayer-Ahmed-Sajid
/my-book-shop.git
    cd my-book-shop
    ```

2. **Install dependencies**:

    ```sh
    npm install
    ```

3. **Set up environment variables**:

    Create a `.env` file in the root directory and add the following variables:

    ```env
    REACT_APP_API_URL=https://your-api-url.com
    REACT_APP_JWT_SECRET=your-jwt-secret
    ```

## Running the Application

1. **Start the development server**:

    ```sh
    npm start
    ```

    This will start the application on `http://localhost:3000`.

2. **Build the application for production**:

    ```sh
    npm run build
    ```

    This will create a `build` directory with the production build of the application.

## Project Structure

