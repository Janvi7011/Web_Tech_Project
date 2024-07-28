const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    productid: Number,
    productname: String,
    companyname: String,
    priceperunit:Number,
    category: String,
    image: String,
    createdAt:Date,
    status:  String
});

module.exports = mongoose.model('Product', productSchema);