# Music library_API REST

## API REST implementation with Node.js 

The idea of this project is to implement an API REST to storage tracks. Using Node.js and Mongo or Postgres as database.

#### Project Objetives:
- Implementation with Node.js.
- Models implementation depending of DB. 
- Mongo Database in Atlas.
- Postgres Database.
- Create users with JWT (Json Web Token).
- Routes protected (only users admin can update).
- Send errors to Slack.


**Note:** In order to change between Mongo/Postgres:
1. Go to `.env` file 
2. Change ENGINE_DB

*POSTGRES*
``` 
	ENGINE_DB=postgres
	
```
*MONGO*
``` 
	ENGINE_DB=nosql 
	
```


#### Models:
- Users.
- Tracks.
- Storage.


#### Functionalities:
- User registration.
- User login.
- Upload tracks.
- See all tracks.
- See storage.
- Delete tracks.
