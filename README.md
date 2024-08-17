# Mobile Mart

Mobile Mart is an online mobile phone store where users can browse and purchase various mobile devices. The application is built using React for the frontend and an Express.js server with MongoDB for the backend.

## Features

- Browse all available mobile phones.
- Filter products by brand, category, and price range.
- Search for specific products by name or model.
- User authentication (login and logout).
- Responsive design for mobile and desktop screens.
- Pagination for product listings.
- Admin features to add, update, and delete products.

## Technologies Used

### Frontend

- **React**: JavaScript library for building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **React Router DOM**: For navigation and routing.
- **React Query**: Data fetching and state management.
- **Axios**: For making HTTP requests.
- **Firebase**: For user authentication.
- **Swiper**: For creating sliders and carousels.
- **SweetAlert2**: For alert messages and notifications.

### Backend

- **Node.js**: JavaScript runtime for building the server.
- **Express.js**: Web framework for handling server routes.
- **MongoDB**: NoSQL database for storing product data.
- **Mongoose**: ODM library for MongoDB.
- **jsonwebtoken (JWT)**: For secure authentication.
- **Cors**: Middleware to handle cross-origin requests.

## Setup and Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/haruntahid/mobile-mart.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd mobile-mart
   ```

3. **Install dependencies for both frontend and backend:**
   **For frontend:**

   ```bash
   cd mobile-mart-client
   npm install
   ```

   **For backend:**

   ```bash
   cd mobile-mart-server
   npm install
   ```

4. **Set up environment variables:**

   ```bash
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   ```

5. **Run the development server:**
   **For frontend and backend:**
   ```bash
   npm run dev
   ```
