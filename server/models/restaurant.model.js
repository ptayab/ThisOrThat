const restaurantSchema = new Schema ({
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

})

const Restaurants = mongoose.model('Resturants', restaurantSchema)

module.exports = Restaurants;