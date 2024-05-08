# Nodejs
Creating a Node project 
npm init -y

folder structure (Clean architecture):
Controllers-------functions 
models------------defining the schema 
route-------------defining the path
uploads-----------storage for the user images in folder or u can directly connect to mongoDB
.env-------------- in this we gonna define the mongoDB url afterwards we can encode this url so that not everyone can see the url
utils-------------here we going to define and connect mongoDB  [mongoose.connect(URL)]
server.js---------in ternminal we gonna sun this like cmd -> nodemon server.js


dependency installation-> npm i cors dotenv express mongoose multer nodemon 

