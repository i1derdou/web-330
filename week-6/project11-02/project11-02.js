"use strict";
/*    JavaScript 7th Edition
      Chapter 11
      Project 11-02

      Project to city and state information from a provided postal code
      Author: David Clemens
      Date:   2024-07-07

      Filename: project11-02.js
*/

// Get references to the HTML elements by their IDs
let postalCode = document.getElementById("postalCode");
let place = document.getElementById("place");
let region = document.getElementById("region");
let country = document.getElementById("country");

// Add an event listener to the postalCode input that triggers when the input loses focus
postalCode.onblur = function() {

  // Get the values from the postalCode and country input fields
  let codeValue = postalCode.value;
  let countryValue = country.value;

  // Clear the place and region input fields
  place.value = "";
  region.value = "";

  // Fetch the location data from the Zippopotam.us API using the country and postal code
  fetch(`http://api.zippopotam.us/${countryValue}/${codeValue}`)
    .then(response => response.json()) // Convert the response to JSON
    .then(json => {
      // Populate the place and region input fields with data from the API response
      place.value = json.places[0]["place name"];
      region.value = json.places[0]["state abbreviation"];
  })
    .catch(error => console.log(error)); // Log any errors to the console

}



