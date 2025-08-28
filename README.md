# RecipeBookProject
This application is a way to let users view recipes up front without having to read someone's life story\

# Backend 
Instructions:\
   -run the following commands in this order\
     1. docker compose up\
     2. cd /server\
     3. npm run migrate //This will run knex migrate:latest && knex seed:run to seed our database//\
  All docker files and knex configurations are set to seed a combination of data from the RecipeDB Api as well as data from Fakerjs\
  Check all the endpoints to understand what kind of requests you'll be able to make on the front end\
