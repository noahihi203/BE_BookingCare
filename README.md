# Noah's Node.js Backend

This is a backend server built with Node.js, using Express as the web framework and Sequelize as the ORM for managing relational database operations. The server provides RESTful APIs, with support for environment configurations, authentication, and various utility packages for efficient development.

## Table of Contents
1. [Features](#features)
2. [Technologies Used](#technologies-used)
3. [Getting Started](#getting-started)
4. [Scripts](#scripts)
5. [Environment Variables](#environment-variables)
6. [Folder Structure](#folder-structure)
7. [API Endpoints](#api-endpoints)
8. [License](#license)

---

## Features

- RESTful API design using Express.js.
- ORM-based database management with Sequelize.
- Environment-based configuration using dotenv.
- User authentication with bcrypt.
- Server-side templating with EJS.
- Cross-Origin Resource Sharing (CORS) enabled.
- Code linting and live reload with Babel and Nodemon.

## Technologies Used

- **Node.js** - Backend runtime environment
- **Express** - Minimal web framework
- **Sequelize** - ORM for database management
- **MySQL2** - MySQL client for Node.js
- **EJS** - Embedded JavaScript templating
- **Babel** - ES6+ support for cleaner syntax
- **Nodemon** - Development utility for live server reloads
- **CORS** - Cross-Origin Resource Sharing

## Getting Started
###Installation
1. Clone the repository: 
```bash
git clone https://github.com/noah/backend-nodejs
cd backend-nodejs
```
2. Install dependencies:
```bash
npm install
```
3. Set up environment variables:
Create a .env file in the root directory and add necessary variables.
4. Initialize the database:
```bash
npx sequelize-cli db:migrate
```
###Scripts
The following scripts are available in package.json:
- ```bash npm start```: Starts the server using nodemon and babel-node for live reload and ES6+ support.
- ```bash npm test```: Placeholder for testing, exits with code 1.

##Environment Variables
Define the following variables in a .env file in the project root:
```plaintext
  DB_HOST=localhost
  DB_USER=root
  DB_PASSWORD=yourpassword
  DB_NAME=yourdbname
  PORT=3000
  SECRET_KEY=your_secret_key
```
##Folder Structure

```bash
.
├── src
│   ├── config        # Database and environment config
│   ├── controllers   # Express route controllers
│   ├── models        # Sequelize models
│   ├── routes        # Express route definitions
│   └── server.js     # Main server file
├── .env              # Environment variables
├── .gitignore        # Ignored files for Git
├── package.json      # Project metadata and scripts
└── README.md         # Project documentation
```

### Prerequisites

Ensure you have Node.js (v14 or higher) and npm installed on your system.

```bash
# Check Node.js version
node -v

# Check npm version
npm -v
