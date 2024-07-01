"use strict";
/*
  Pragmatic JavaScript
  Chapter 2
  Programming Assignment

  Author: David Clemens
  Date:   2024-06-30
  Filename: script.js
*/

// Step 1: Create an in-memory object array for each table in the restaurant
let tables = [
  { tableNumber: 1, capacity: 4, isReserved: false },
  { tableNumber: 2, capacity: 2, isReserved: false },
  { tableNumber: 3, capacity: 6, isReserved: false },
  { tableNumber: 4, capacity: 4, isReserved: false },
  { tableNumber: 5, capacity: 8, isReserved: false }
];

// Step 2: Create the reserveTable function
/**
 * Function to reserve a table
 * @param {number} tableNumber - The number of the table to reserve
 * @param {function} callback - The callback function to call after reservation
 * @param {number} time - The time in milliseconds to wait before calling the callback
 */
function reserveTable(tableNumber, callback, time) {
  // Find the table object with the specified tableNumber
  let table = tables.find(t => t.tableNumber === tableNumber);

  // If the table does not exist, call the callback with an error message
  if (!table) {
    callback(`Table ${tableNumber} does not exist.`);
    return;
  }

  // If the table is not reserved, reserve it and call the callback after a delay
  if (!table.isReserved) {
    table.isReserved = true;
    setTimeout(() => {
      callback(`Table ${tableNumber} has been successfully reserved.`);
    }, time);
  } else {
    // If the table is already reserved, call the callback with an error message
    callback(`Table ${tableNumber} is already reserved.`);
  }
}

// Step 3: Handle form submission
document.getElementById("reservationForm").addEventListener("submit", function (e) {
  // Prevent the form from submitting the traditional way
  e.preventDefault();

  // Get the values from the form
  let name = document.getElementById("name").value;
  let tableNumber = parseInt(document.getElementById("tableNumber").value);
  let messageElement = document.getElementById("message");

  // Check if a table number was selected
  if (!isNaN(tableNumber)) {
    // Call the reserveTable function with the selected table number and a callback
    reserveTable(tableNumber, function (message) {
      // Display the message on the webpage
      messageElement.textContent = message;
      // Add or remove the success class based on the message
      if (message.includes("successfully")) {
        messageElement.classList.add("success");
      } else {
        messageElement.classList.remove("success");
      }
    }, 2000); // Reserve the table for 2 seconds before calling the callback
  } else {
    // If no table number was selected, display an error message
    messageElement.textContent = "Please select a table to reserve.";
    messageElement.classList.remove("success");
  }
});