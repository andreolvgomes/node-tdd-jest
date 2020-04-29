https://carloslevir.com/api-completa-node-sequelize-mysql/
https://www.youtube.com/watch?v=2G_mWfG0DZE&list=PL3x5iQNNDtX5DWnKBbISx_whtuNGD4dgg&index=7&t=2s

--dependencies
npm install --save express
npm install --save sequelize
npm install --save mysql2
npm install --save-dev sequelize-cli

-- int sequelize
npx sequelize init

-- create database
npm sequelize db:create

-- create migrations
npx sequelize migration:create --name=create-users
ou
npx sequelize migration:create --name create-users

-- execute migrations
npx sequelize db:migrate

--JEST
npm install --save-dev jest
npx jest --init

-intellisense for Jest not working in VS code
npm install @types/jest

-- execute test
"posttest": "npx sequelize db:migrate:undo:all"