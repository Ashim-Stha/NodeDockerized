
# Node.js Dockerized Application NodeDockerized

This is a Node.js application that uses Docker for containerization. The application includes user authentication, session management with Redis, and MongoDB for data storage. It also includes Nginx as a reverse proxy.

## Features

- **User Authentication**: Secure user signup and login using JWT (JSON Web Tokens).
- **Session Management**: Sessions are managed using Redis to ensure scalability and performance.
- **MongoDB Integration**: MongoDB is used as the primary database for storing user and post data.
- **Nginx Reverse Proxy**: Nginx is used to handle incoming HTTP requests and forward them to the Node.js application.
- **Dockerized**: The entire application is containerized using Docker, making it easy to deploy and manage.

## Project Structure

```
.
├── .dockerignore
├── .env
├── .gitignore
├── app.js
├── config/
│   └── config.js
├── controllers/
│   ├── authController.js
│   └── postController.js
├── docker-compose.backup.yml
├── docker-compose.dev.yml
├── docker-compose.prod.yml
├── docker-compose.yml
├── docker.md
├── Dockerfile
├── middleware/
│   └── authMiddleware.js
├── models/
│   ├── postModel.js
│   └── userModel.js
├── nginx/
│   └── default.conf
├── package.json
├── routes/
│   ├── postRoutes.js
│   └── userRoutes.js
```

## Getting Started

### Prerequisites

- Docker
- Docker Compose

### Installation

1. Clone the repository:
    ```sh
    git clone <repository_url>
    cd <repository_name>
    ```

2. Create a `.env` file in the root directory and add the following:
    ```env
    PORT=5000
    MONGO_USER=root
    MONGO_PASSWORD=example
    SESSION_SECRET=secret
    ```

3. Build and start the Docker containers:
    ```sh
    docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d --build
    ```

### Usage

- The application will be available at `http://localhost:3000`.
- The API endpoints are:
  - `POST /api/v1/users/signup` - Sign up a new user
  - `POST /api/v1/users/login` - Log in a user
  - `GET /api/v1/posts` - Get all posts (protected)
  - `POST /api/v1/posts` - Create a new post (protected)
  - `GET /api/v1/posts/:id` - Get a single post by ID (protected)
  - `PATCH /api/v1/posts/:id` - Update a post by ID (protected)
  - `DELETE /api/v1/posts/:id` - Delete a post by ID (protected)

### Development

- To run the application in development mode:
    ```sh
    docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d
    ```

- To view logs:
    ```sh
    docker-compose logs -f
    ```

### Production

- To run the application in production mode:
    ```sh
    docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d --build
    ```

## Built With

- [Express](https://expressjs.com/) - Web framework for Node.js
- [Mongoose](https://mongoosejs.com/) - MongoDB object modeling for Node.js
- [Redis](https://redis.io/) - In-memory data structure store
- [Docker](https://www.docker.com/) - Containerization platform
- [Nginx](https://www.nginx.com/) - Web server and reverse proxy

## File Descriptions

- **app.js**: Main application file that sets up the Express server, connects to MongoDB, and configures session management with Redis.
- **config/config.js**: Configuration file for environment variables.
- **controllers/authController.js**: Controller for user authentication (signup and login).
- **controllers/postController.js**: Controller for handling CRUD operations on posts.
- **docker-compose.yml**: Base Docker Compose file for shared configurations.
- **docker-compose.dev.yml**: Docker Compose file for development environment.
- **docker-compose.prod.yml**: Docker Compose file for production environment.
- **Dockerfile**: Dockerfile for building the Node.js application image.
- **middleware/authMiddleware.js**: Middleware for protecting routes that require authentication.
- **models/postModel.js**: Mongoose model for posts.
- **models/userModel.js**: Mongoose model for users.
- **nginx/default.conf**: Nginx configuration file for reverse proxy.
- **routes/postRoutes.js**: Routes for handling post-related API endpoints.
- **routes/userRoutes.js**: Routes for handling user-related API endpoints.
- **package.json**: Project metadata and dependencies.
