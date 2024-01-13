const mongoose = require('mongoose');
const { Schema } = mongoose;

const categorySchema = new Schema({
  alias: String,
  title: String
});

const restaurantSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  categories: [String], 
  price: {
    type: String
  },
  url: {
  },
  image_url: {
    type: String
  },
  addres: {
    type: String
  },
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = Restaurant;
