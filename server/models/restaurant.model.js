const mongoose = require('mongoose');
const { Schema } = mongoose;

const restaurantSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    cuisine: {
        type: String
    },
    price: {
        type: String
    },
    dietaryRestrictions: {
        type: [String]
    }
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = Restaurant;
