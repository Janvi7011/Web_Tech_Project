const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    productid: {
        type: String,
        required: true
    },
    userid: {
        type: [String],
        required: true
    },
    deliveryAddress: {
        type: String,
        required
    },
    amount: {
        type: Number,
        required: true
    },
    paymentMode: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Order', orderSchema);