const router = require('express').Router();
const axios = require('axios')
const express = require('express')
const Restaurant = require('../models/restaurant.model');

router.route('/').get((req, res) => {
    Restaurant.find()
    .then(restaurants => res.json(restaurants))
    .catch(err => res.status(400).json('Error: ' + err));
})

router.get('/search', async (req, res) => {
    try {
      const { term, location } = req.query;
      const response = await axios.get('https://api.yelp.com/v3/businesses/search', {
        headers: { Authorization: `Bearer YOUR_YELP_API_KEY` },
        params: { term, location },
      });
  
      // Save the fetched data into your MongoDB
      const businesses = response.data.businesses;
      await Restaurant.insertMany(businesses);
  
      res.json(businesses);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

module.exports = router;