# Tweet Feed Loader!

NodeJS Application for loading tweets and users from two text files. As well returning them by request.


# Installation

Running npm install will install all required packages for running node server,
as well as requirements of MongoDB running in background.

## Source folder
Folder contains following subfolders:
	 - DB ( init for mongo )
	 - Model, contains models for mongoose
	 - Middleware, connection between routes and services
	 - Services, communication with database(fetching, inserting data)
	 - Tests, unit tests with jest
	 - 
## Testing

Running `npm run test` will start test that will cover parsing and inserting into database as well as reading from database.

## Running in dev mode

To run server in dev mode use command `npm run dev`
## Service folder
Service folder contains two files, one is for importing users and tweets to database and other is for reading txt files and parsing it into readable data.
		
Example of user service function:
    async  function getUsers() {return  await User.find()}
    


### Parser Service
Two functionalities: LoadTweets and LoadUsers.
After reading files and converting them to string, it will split them by breakline and other needed split (i.e. "follows" or "> " or ", ") depending if it is a tweet or a user he/she follows.
### User Service
User Service contains functions

 - GetUser,  fetch user by username and his tweets, as well as his friends and their tweets
 - GetUsers, returns all users
 - ImportUsers, called by parser middleware to bulk insert users that are read from parser service

### Creating parser request

For parser to run create POST Method on endpoint : http://localhost:4000/parse/

### User routes

	GET: http://localhost:4000/user/
	GET: http://localhost:4000/user/:username
	
