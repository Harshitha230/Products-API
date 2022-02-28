const express= require('express');
const bodyParser= require('body-parser');
const mongoose= require('mongoose');

const product= require('./routes/product.routes'); 
const app= express();

let username='harshitha'
let password='abcd1234';
let database='Cluster0'
let dev_db_url = `mongodb+srv://${username}:${password}@cluster0.ez3ki.mongodb.net/${database}?retryWrites=true&w=majority`;
let mongoDB = process.env.MONGODB_URI || dev_db_url;

mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/products', product);

let port=9000;
app.listen(port, ()=>{
    console.log("Server is running on port number:", port);
});

