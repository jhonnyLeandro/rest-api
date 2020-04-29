# Rest api with nodejs and postgreSQL

This project was created and it is being updated for learning purposes about rest apis, database, cloud, devops.

## Get going postgreSQL

To get the db working, the first step is to download and install postgresql, after that create
a specific role for this api. Now with our role we can create our database and our tables. I will describe the steps below.
### Install postgresql in ubuntu

Use this command to  install postgresql in ubuntu

`sudo apt install postgresql-12`

### Log into psql with postgres user

`sudo -u postgres psql`

### Log into psql with a specific user and database

`psql -U user -d database -h 127.0.0.1 -W`


## Test the api

We are going to use the tool curl to test the functionality of the api

### Get

`curl http://localhost:3000/users`

### Post

`curl -d '{"firstName":"name", "lastName":"lastname"}' -H "Content-Type: application/json" -X POST http://localhost:3000/user`


### Put

`curl -d '{"firstName":"name", "lastName":"lastname"}' -H "Content-Type: application/json" -X PUT  http://localhost:3000/user/id`

### Delete

`curl  -X DELETE  http://localhost:3000/user/1`


# References

- [Setting up a restful api with nodejs and postgreSQL](https://blog.logrocket.com/setting-up-a-restful-api-with-node-js-and-postgresql-d96d6fc892d8/)
