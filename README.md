# Node Express/MongoDB + React/Redux App - FundedU

This is a MERN stack based fully functioning web application, which supports features of signing up, logging in, making authenticated requests, add associates, upload files, etc.

## Tech Stack

#### Front-end

* The front-end client is built as a simple-page-application using React and Redux (for middlewares and reducers).
* React-Router is used for navigation.
* Redux-Thunk is used for processing asynchronous requests.
* Materialize CSS is used for page styling.

#### Back-end

* The back-end server is built with Express.js and Node.js, which provides completed REST APIs for data interaction.
* Passport.js is used as an authentication middleware in the sever.
* JSON Web Token (JWT) is used for signing in user and making authenticated requests.

#### Database

* MongoDB is used as the back-end database, which include different data models/schemas (i.e., name, email, associates, files).
* Mongoose is used to access the MongoDB for CRUD actions (create, read, update and delete).

## Usage

Below are the steps to run the application:

1. Install Node.js;
2. Install MongoDB;
3. In `root` directory, run `npm install`;
4. In `root` directory, run `npm run dev`;