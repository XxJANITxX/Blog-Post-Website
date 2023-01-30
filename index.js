// Importing required files from modules folder
const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const fileUpload = require('express-fileupload');
const storeUserController = require('./controllers/storeUser');
const expressSession = require("express-session");

// Express
const app = new express();
app.set('view engine','ejs');

/* Express Middlewares 
Used for initating passed values before handling request*/

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(fileUpload());
app.use(expressSession({secret:'keyboard cat'}));

// Custom Middleware
const validateMiddleWare = require('./middleware/validationMiddleware');
app.use('/posts/store',validateMiddleWare);


// Importing Controllers
const newPostController = require('./controllers/newPost');
const aboutPageController = require('./controllers/aboutPage');
const contactPageController = require('./controllers/contactPage');
const homeController = require('./controllers/home');
const storePostController = require('./controllers/storePost');
const getPostController = require('./controllers/getPost');
const newUserController = require("./controllers/newUser");
const loginController = require("./controllers/login");
const loginUserController = require('./controllers/loginUser');

// Starting server
app.listen(4000,()=>{
    console.log("App listening at port 4000");
});


app.get('/',homeController);


// Use of controllers for static pages
app.get('/posts/new',newPostController);
app.get('/about',aboutPageController);
app.get('/contact',contactPageController);

// Use of controllers for dynamic pages 
//app.get('/search',)                                       -----------------Under progress
app.get('/post/:id',getPostController );
app.post('/posts/store',storePostController);
app.get('/auth/register',newUserController);
app.post('/users/register',storeUserController);
app.get('/auth/login',loginController);
app.post('/users/login',loginUserController);