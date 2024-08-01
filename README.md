# My Blog App

A simple blog post application built with the MERN stack (MongoDB, Express, React, Node.js). This app allows users to create, view, update, and delete blog posts.

## Features

- **View Blog Posts**: List all blog posts with titles and excerpts.
- **View Post Details**: Click on a post to view its full content.
- **Create Post**: Add new blog posts with a title and body.
- **Edit Post**: Update existing blog posts.
- **Delete Post**: Remove blog posts from the list.
- **Search Posts**: Filter posts by title.
- **Pagination**: Navigate through multiple pages of posts.

## Prerequisites

- Node.js (v14 or later)
- MongoDB Atlas account

## Installation

### 1. Clone the Repository

        ```bash
        git clone https://github.com/your-username/my-blog-app.git
        cd my-blog-app
        ```

### 2. Set Up the Server
    
    Create a .env file in the server directory.

    Add your MongoDB Atlas connection string to the .env file:
        MONGO_URI=your_mongodb_connection_string

    Navigate to the server directory:
        
        ```bash
        cd server
        npm install
        npm start
        ```
### 3. Set Up the Client

    Navigate to the client directory:
    ```bash
    cd ../client
    npm install
    npm start


Contributing
Feel free to fork the repository and submit pull requests. Please ensure your code adheres to the project's coding standards and passes all tests.

License
This project is licensed under the MIT License - see the LICENSE file for details.

Contact
Author: Naveen Kumar Lakkaram
GitHub: https://github.com/lakkaramnaveen