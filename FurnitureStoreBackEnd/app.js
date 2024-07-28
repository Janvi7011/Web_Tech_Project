const express = require('express');
const mongoose = require('mongoose');
const users = require('./userController');
const products = require('./productController');
const app = express();
const Cors = require("cors");


mongoose.connect("mongodb+srv://janvidesai01:janvidesai01@cluster0.o4ds1fx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

var corsOption = {
    origin1: " http://localhost:4200"
}
app.use(Cors(corsOption));
app.use(express.json());
app.post('/user', users.createUser);
app.get('/user', users.fetchAllUsers);
app.delete('/user/:Id', users.deleteUser);
app.put('/user/:Id', users.updateUser);


app.post('/product', products.createProduct);
app.get('/product', products.fetchAllProducts);
app.get('/product/:id', products.findProductById);
app.put('/product/:id', products.updateProduct);
app.delete('/product/:id', products.deleteProduct);

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

