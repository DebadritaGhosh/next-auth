**NextAuth.js with Next.js, MongoDB, and Mongoose**

This project is a simple authentication application built using Next.js, MongoDB, and Mongoose, implementing authentication with NextAuth.js. Whether you're new to Next.js or looking to deepen your understanding of authentication in Next.js applications, this project serves as a practical hands-on experience.

## Features

- **Next.js**: Utilizes the power of Next.js for server-side rendering, static site generation, and more.
- **MongoDB**: A NoSQL database for storing user information and authentication data.
- **Mongoose**: MongoDB object modeling tool designed to work in an asynchronous environment.
- **NextAuth.js**: A complete authentication solution for Next.js applications, providing support for various authentication providers out of the box.
  
  ![Login](images/login.png) ![Register](images/register.png) ![Profile](images/profile.png)
  
## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/DebadritaGhosh/next-auth.git
    ```

2. Navigate into the project directory:

    ```bash
    cd next-auth
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Set up environment variables:

    Create a `.env` file in the root directory and add the following variables:

    ```plaintext
    MONGO_URI=your-mongodb-uri
	TOKEN_SECRET=your-token-secret
	DOMAIN=http://localhost:3000
    ```

5. Run the development server:

    ```bash
    npm run dev
    ```

6. Open your browser and visit `http://localhost:3000` to see the application in action.

## Usage

1. **Register**: Users can register with a username, unique email and password.

2. **Login**: Registered users can log in securely using their credentials.

3. **Profile**: Authenticated users have access to their profile page, where they can view and manage their account details.

## Acknowledgments 🙏

- Shoutout to Hitesh Choudhary ( https://youtu.be/eaQc7vbV4po?si=riAOnHn6wHrXKhtK )

---

**Explore the application and start building this basic next-auth application by following the tutorial! If you have any questions or feedback, feel free to reach out. Happy coding! 🚀
!** 🚀