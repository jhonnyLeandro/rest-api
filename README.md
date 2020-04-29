# Rest api with node.js and postgreSQL

This project was created and it is being updated for learning purposes about rest apis, database, cloud, devops.

## Steps for postgresql

To get the db working, the first step is to download and install postgresql, after that create
a specific role for this api, in that role create the database and into the database create the table users used to this project.

## Install postgresql in ubuntu

use this command to  install postgresql in ubuntu

sudo apt install postgresql-12

## log into psql client for postgresql

sudo -u postgres psql

## log in like an specific user to a database

psql -U <user> -d <database> -h 127.0.0.1 -W



## test the api with curl

curl -d '{"firstName":"name", "lastName":"lastname"}' -H "Content-Type: application/json" -X POST http://localhost:3000/user