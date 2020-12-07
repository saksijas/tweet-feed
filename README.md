# Tweet Feed Loader!

NodeJS Application for loading tweets and users from two text files. As well returning them by request.

# Installation

Running npm install will install all required packages for running node server,
as well as requirements of MongoDB running in background.

## Technology stack

This application uses Node with Express and MongoDB.

### Start project

npm start or npm run dev

## Project structure

In the project structure we have the following parts:

```
|- src
  |- helpers/
  |- db/
  |- middleware/
  |- models/
  |- resources/
  |- routes/
  |- services/
  |- tests/
```

helpers folder contains errorHandler component.

db folder contains file for db connection

middleware folder connection between routes and services

services folder communication with database(fetching, inserting data)

routes folder contains express router config for user and parse routes

test folder contains tests for parser and user service.

## Testing

Running `npm run test` will start test that will cover parsing and inserting into database as well as reading from database.

## Running in dev mode

To run server in dev mode use command `npm run dev`

## Service folder

Service folder contains two files, one is for importing users and tweets to database and other is for reading txt files and parsing it into readable data.
Example of user service function:
async function getUsers() {return await User.find()}

### Parser Service

Two functionalities: LoadTweets and LoadUsers.
After reading files and converting them to string, it will split them by breakline and other needed split (i.e. "follows" or "> " or ", ") depending if it is a tweet or a user he/she follows.

### User Service

User Service contains functions

-   GetUser, fetch user by username and his tweets, as well as his friends and their tweets
-   GetUsers, returns all users
-   ImportUsers, called by parser middleware to bulk insert users that are read from parser service

### Creating parser request

For parser to run create POST Method on endpoint : http://localhost:4000/parse/

### User routes

    GET: http://localhost:4000/user/
    GET: http://localhost:4000/user/:username
