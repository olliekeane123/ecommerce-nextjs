[<img width="2538" height="1348" alt="opengraph image" src="https://github.com/user-attachments/assets/0964f8a6-67b1-4489-b2bd-ce7a3608fc27" />](https://ecommerce-nextjs-six-inky.vercel.app/)

# eCommerce Application

This is a full-stack eCommerce application built with **Next.js**, **TypeScript**, and **Tailwind CSS**. It provides a modern, responsive user interface and key features for an online store.

### Key Features 🚀

-   **User Authentication**: Secure user login and registration powered by **NextAuth.js** using Google as the provider.
-   **Persistent Shopping Cart**: The shopping cart is initially saved in browser **cookies** and is seamlessly migrated to the user's account in a **MongoDB** database upon login.
-   **Product Catalog**: Users can browse a variety of products with features like **pagination** for easy navigation.
-   **Search Functionality**: A simple search feature allows users to find products.
-   **Responsive Design**: The application is built with **Tailwind CSS** and **DaisyUI**, ensuring a beautiful and functional experience on all devices, from mobile phones to desktop computers.
-   **Admin Product Management**: A dedicated page for adding new products is available at `/add-product`. Users must be signed in to access it. *Note: There is no special admin authentication, and no functionality to edit or remove products yet.*
-   **Generic Footer**: The site includes a footer with links such as "About" and "Contact Us," but these links are not currently functional.

---

### Technical Stack ⚙️

-   **Frontend**: Next.js 15, React 19, TypeScript
-   **Styling**: Tailwind CSS 4, DaisyUI
-   **Authentication**: NextAuth.js (Google Provider)
-   **Database**: MongoDB (via Prisma and MongoDB Atlas)
-   **ORM**: Prisma
-   **Validation**: Zod

---

### Getting Started 🚀

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/olliekeane123/ecommerce-nextjs
    cd ecommerce-nextjs
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Set up environment variables**:
    Create a `.env` file in the root directory and add your environment variables. You will need to configure your database connection string and NextAuth.js credentials.

    ```
    # Database
    DATABASE_URL="[your-mongodb-connection-string]"

    # NextAuth.js
    AUTH_SECRET="[a-random-secret-string]"
    GOOGLE_CLIENT_ID="[your-google-client-id]"
    GOOGLE_CLIENT_SECRET="[your-google-client-secret]"
    ```
    You can generate a strong secret string with a tool or by running `openssl rand -base64 32` in your terminal.

4.  **Run database migrations**:
    Prisma will generate the necessary database schema based on your `prisma/schema.prisma` file. This step is automatically handled by the `postinstall` script, but you can run it manually if needed.
    ```bash
    npx prisma migrate dev
    ```

5.  **Run the development server**:
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

---

### Todo List 📝

-   [ ] **Payment Integration**: Implement a secure payment gateway like **Stripe** to process transactions.
-   [ ] **Advanced Search**: Improve the product search functionality with features like fuzzy search, faceting, and indexing to provide more accurate and relevant results.
-   [ ] **User Profiles**: Add a dedicated user profile page where users can view their order history and manage their information.
-   [ ] **Admin Functionality**: Expand the admin dashboard to allow for editing and removing products, and viewing all orders.
-   [ ] **Working Footer Links**: Make the links in the footer, such as "About Us" and "Contact Us," functional.
-   [ ] **Product Reviews**: Allow users to leave reviews and ratings on products.
