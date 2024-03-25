"# ignyt-shop" 

## Features

- User authentication (register, login, logout)
- User roles (admin, regular user)
- JWT token authentication and authorization
    - API endpoints that return data are protected by requiring a JWT token
    - Protected routes (only admin can access create, update, delete operations) by using middleware
- Beer overview (list, details)
- Managing beers (CRUD operations)
- Managing users (CRUD operations, only admin)
- Shopping cart (add, remove, base functionality for checkout)
- Favorites (add, remove)

![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![Express.js](https://img.shields.io/badge/Express-000000.svg?style=for-the-badge&logo=Express&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Node.js](https://img.shields.io/badge/Node.js-%23339933.svg?style=for-the-badge&logo=node.js&logoColor=white)  
![Mongoose](https://img.shields.io/badge/Mongoose-880000.svg?style=for-the-badge&logo=Mongoose&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-%23ca4245.svg?style=for-the-badge&logo=react-router&logoColor=white)
![React Bootstrap](https://img.shields.io/badge/React_Bootstrap-%23563d7c.svg?style=for-the-badge&logo=bootstrap&logoColor=white)
![React Icons](https://img.shields.io/badge/React_Icons-%23000000.svg?style=for-the-badge&logo=react&logoColor=white)  
![JavaScript](https://img.shields.io/badge/JavaScript-%23f7df1e.svg?style=for-the-badge&logo=javascript&logoColor=black)
![npm](https://img.shields.io/badge/npm-%23cb3837.svg?style=for-the-badge&logo=npm&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-%23000000.svg?style=for-the-badge&logo=json-web-tokens&logoColor=white)  
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)
![Postman](https://img.shields.io/badge/Postman-%23ff6c37.svg?style=for-the-badge&logo=postman&logoColor=white)

## Getting Started

### Prerequisites

- Node.js
- npm
- MongoDB Atlas account (or local MongoDB server)

### Installation

1. Clone the repository
   ```sh
   git clone git@github.com:anamarijapapic/craft-beer-shop.git
    ```
2. Position to the project folder
    ```sh
    cd craft-beer-shop
    ```
3. Position to the server folder
    ```sh
    cd server
    ```
4. Copy the `config.env.example` file and rename it to `config.env` in the server folder. Fill in the environment variables with your own values.
    ```sh
    cp config.env.example config.env
    ```
5. Install server dependencies
    ```sh
    npm install
    ```
6. Seed the database with initial data
    ```sh
    npm run seed
    ```
7. Start the server
    ```sh
    npm start
    ```
8. Open another terminal and position to the client folder
    ```sh
    cd client
    ```
9. Install client dependencies
    ```sh
    npm install
    ```
10. Start the client
    ```sh
    npm start
    ```
11. Open your browser and go to [http://localhost:3000/](http://localhost:3000/)
