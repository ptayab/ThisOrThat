const router = require('express').Router();
const axios = require('axios');
const express = require('express');
const Restaurant = require('../models/restaurant.model');
require('dotenv').config();

const yelpApiKey = process.env.YELP_KEY;

router.route('/').get((req, res) => {
  Restaurant.find()
    .then(restaurants => res.json(restaurants))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.get('/search', async (req, res) => {
  try {
    const { term, location } = req.query;
    let offset = 0;
    const maxResults = 100;
    const businessesWithFlattenedCategories = [];

    while (offset < maxResults) {
      const response = await axios.get('https://api.yelp.com/v3/businesses/search', {
        headers: { Authorization: `Bearer ${yelpApiKey}` },
        params: { term, location, offset },
      });

      const businesses = response.data.businesses;

      if (businesses.length === 0) {
        break;
      }

      const businessesWithCategories = businesses.map(business => ({
        ...business,
        categories: business.categories.flatMap(category => `${category.alias}, ${category.title}`),
      }));

      businessesWithFlattenedCategories.push(...businessesWithCategories);

      await Restaurant.insertMany(businessesWithCategories, { ordered: false });

      offset += businesses.length;
    }

    console.log('Data stored in MongoDB!');
    res.json(businessesWithFlattenedCategories);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});





module.exports = router;
