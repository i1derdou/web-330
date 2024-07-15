/*
  Pragmatic JavaScript
  Chapter 3
  Programming Assignment

  Author: David Clemens
  Date:   2024-07-14
  Filename: script.js
*/

"use strict";

// Array of chef objects with properties for name, specialty, weakness, and location
const chefs = [
  { name: 'Gordon Ramsay', specialty: 'British cuisine', weakness: 'Anger management', location: 'London' },
  { name: 'Massimo Bottura', specialty: 'Italian cuisine', weakness: 'Perfectionism', location: 'Modena' },
  { name: 'Thomas Keller', specialty: 'French cuisine', weakness: 'Attention to detail', location: 'California' }
];

// Function to retrieve chef data based on the index in the array
function getChefData(index) {
  return new Promise((resolve, reject) => {
      // Set different delay times for each chef to simulate data retrieval time
      const delay = (index + 1) * 2000;
      setTimeout(() => {
          // Simulate a 70% success rate for retrieving chef data
          if (Math.random() < 0.7) {
              resolve(chefs[index]);
          } else {
              reject(`Failed to retrieve data for Chef ${index + 1}`);
          }
      }, delay);
  });
}

// Use Promise.allSettled to handle all promises, both fulfilled and rejected
Promise.allSettled([
  getChefData(0),
  getChefData(1),
  getChefData(2)
]).then(results => {
  results.forEach((result, index) => {
      // Select the section corresponding to the current chef
      const chefSection = document.querySelector(`#chef${index + 1} .chef-info`);
      if (result.status === 'fulfilled') {
          // If the promise is fulfilled, display the chef's data
          const chef = result.value;
          chefSection.innerHTML = `
              <p><strong>Name:</strong> ${chef.name}</p>
              <p><strong>Specialty:</strong> ${chef.specialty}</p>
              <p><strong>Weakness:</strong> ${chef.weakness}</p>
              <p><strong>Location:</strong> ${chef.location}</p>
          `;
      } else {
          // If the promise is rejected, display an error message
          chefSection.innerHTML = `<p class="error">${result.reason}</p>`;
      }
  });
});