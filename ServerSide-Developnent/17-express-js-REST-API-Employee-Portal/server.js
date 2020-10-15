const express = require('express');
const app = express();
const dotEnv = require('dotenv');
const path = require('path');

// configure dotEnv
dotEnv.config({path : './config/config.env'});

// configure static files path
app.use('/public', express.static('public'));

// accept the form data from client
app.use(express.json());
app.use(express.urlencoded({extended : false}));

const hostname = process.env.EXPRESS_HOST_NAME;
const port = process.env.EXPRESS_PORT;

// simple request
app.get('/', (request , response) => {
    response.send(`<h2>Welcome to Employee Portal Express Server</h2>`);
});

// configure routers
app.use('/employees' , require('./router/employeeRouter'));
app.use('/admin' , require('./router/adminRouter'));
app.use('/users' , require('./router/userRouter'));


app.listen(port, hostname, () => {
    console.log(`Express Server is started at http://${hostname}:${port}`)
});
