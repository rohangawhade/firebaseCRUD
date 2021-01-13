const express = require('express');
const app = express();
const path = require('path');

const dotenv = require('dotenv');
dotenv.config();
const {apiKey, authDomain, databaseURL, projectId, storageBucket, messagingSenderId, appId, measurementId} = process.env;

app.set('view engine', 'ejs')
app.set("views", path.join(__dirname, "views/templates/"));

app.get('/', (req, res) => {
    res.render('home', {apiKey:apiKey, authDomain:authDomain, databaseURL:databaseURL, projectId:projectId, storageBucket:storageBucket, messagingSenderId:messagingSenderId, appId:appId, measurementId:measurementId});
})

app.listen(3000, () => {
    console.log("Server started...");
    console.log("http://localhost:3000/");
})