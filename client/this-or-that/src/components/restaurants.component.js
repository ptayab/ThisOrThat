import React, { Component } from 'react';



export default class Restaurants extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name: '',
      cuisine: '',
      price: '',
      dietaryRestrictions: '',
      restaurants: [],
      filterOptions: {
        cuisines: ['American', 'Asian', 'Italian', 'Mexican', 'Japanese', 'Indian'], 
        dietaryRestrictions: ['Vegetarian', 'Vegan', 'Gluten-Free'], 
        prices: ['$', '$$', '$$$'] 
      }
    }
  }

  onSearchRestaurant(e) {
     
    this.setState(
      {

      }
    )
  }

  handleCheckbox(category, option) {
    this.setState((prevState) => {
      const selectedOptions = [...prevState[category]];
    })
  }



  render() {
      return (
          <div>Restaurant</div>

          
      )
  }


}