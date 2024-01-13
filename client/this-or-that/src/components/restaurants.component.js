import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Restaurants() {
  const cuisineList = ['American', 'Asian', 'Italian', 'Mexican', 'Japanese', 'Indian', 'Canadian',
                        'Chinese', 'Korean', 'Thai', 'Greek', 'Spanish', 'German', 'Peruvian' ];
  const dietaryList = ['vegetarian', 'halal', 'vegan'];
  const priceList = ['$', '$$', '$$$'];

  const [restaurants, setRestaurants] = useState([]);
  const [selectedCuisines, setSelectedCuisines] = useState([]);
  const [selectedPrice, setSelectedPrice] = useState([]);
  const [selectedDietary, setSelectedDietary] = useState([])
  const [generatedRestaurant, setGeneratedRestaurant] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await axios.get('http://localhost:5000/restaurants/search', {
          params: { term: 'restaurant', location: 'Saskatoon' },
        });

        const response = await axios.get('http://localhost:5000/restaurants');
        setRestaurants(response.data);

      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);


  const generateRestaurant = () => {
    const filteredRestaurants = restaurants.filter((restaurant) => {
      const cuisineMatch = selectedCuisines.length === 0 || selectedCuisines.some(c => restaurant.categories.some(category => category.toLowerCase().includes(c.toLowerCase())));
      const dietaryMatch = selectedDietary.length === 0 || selectedDietary.some(d => restaurant.categories && restaurant.categories.some(category => category.toLowerCase().includes(d.toLowerCase())));
      const priceMatch = selectedPrice.length === 0 || selectedPrice.some(p => restaurant.price && restaurant.price.includes(p));

      return ( cuisineMatch && priceMatch && dietaryMatch );

    });

    const randomIndex = Math.floor(Math.random() * filteredRestaurants.length);
    const generatedRestaurant = filteredRestaurants[randomIndex];

    console.log(generatedRestaurant);
    setGeneratedRestaurant(generatedRestaurant);


  }

  const handleCheckbox = (category, option) => {

    if (category === 'cuisine') {
      setSelectedCuisines((prevCuisines) => {
        if (prevCuisines.includes(option)) {
          return prevCuisines.filter((cuisine) => cuisine !== option);
        } else {
          return [...prevCuisines, option];
        }
      });
    }

    if (category === 'dietary') {
      setSelectedDietary((prevDietary) => {
        if (prevDietary.includes(option)) {
          return prevDietary.filter((dietary) => dietary !== option);
        } else {
          return [...prevDietary, option];
        }
      });
    }

    if (category === 'price') {
      setSelectedPrice((prevPrice) => {
        if (prevPrice.includes(option)) {
          return prevPrice.filter((price) => price !== option);
        } else {
          return [...prevPrice, option];
        }
      });
    }
  };

  return (
    <div className='restaurant-container'>
      <div>
      <div className='filters'>
      <div>
          <h3>Cuisines: </h3>
          {cuisineList.map((cuisine) => (
            <div className='category-list' key={cuisine}>
              <label>
                <input
                  className="optionsList"
                  type="checkbox"
                  checked={selectedCuisines.includes(cuisine)}
                  onChange={() => handleCheckbox('cuisine', cuisine)}
                  aria-label={`Checkbox for ${cuisine}`}
                />
                {cuisine}
              </label>
            </div>
          ))}
        </div>

        <h3>Dietary Restrictions: </h3>
        {dietaryList.map((dietary) => (
          <div key={dietary}>
            <label className='category-list' key={dietary}>
              <input
                className="optionsList"
                type="checkbox"
                checked={selectedDietary.includes(dietary)}
                onChange={() => handleCheckbox('dietary', dietary)}
                aria-label={`Checkbox for ${dietary}`}
              />
              {dietary}
            </label>
          </div>
        ))}

        <h3>Price: </h3>
        {priceList.map((price, index) => (
          <div key={index}>
            <label className='category-list' key={price}>
              <input
                className="optionsList"
                type="checkbox"
                checked={selectedPrice.includes(price)}
                onChange={() => handleCheckbox('price', price)}
                aria-label={`Checkbox for ${price}`}
              />
              {price}
            </label>
          </div>
        ))}
        </div>

        <button onClick={generateRestaurant}>Satisfy My Cravings!</button>
      </div>

      <div className='results'>
        <h3 className='results-title'>Check out: </h3>
        {generatedRestaurant && (
          <div className='generated-restaurant'>
            {generatedRestaurant.image_url && (
              <img className='restaurant-image' src={generatedRestaurant.image_url} alt="Restaurant Image" />
            )}
          </div>
        )}
      </div>

      <div className='results-information'>
        {generatedRestaurant && (
          <div className='generated-restaurant'>
            <h4>{generatedRestaurant.name}</h4>
            <p> Address: {generateRestaurant.address}</p>
            <a href={generatedRestaurant.url} target="_blank" rel="noopener noreferrer">
              More Information
            </a>
          </div>
        )}
      </div>
    </div>
  );
}