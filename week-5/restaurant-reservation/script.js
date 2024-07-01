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
function reserveTable(tableNumber, callback, time) {
  let table = tables.find(t => t.tableNumber === tableNumber);

  if (!table) {
    callback(`Table ${tableNumber} does not exist.`);
    return;
  }

  if (!table.isReserved) {
    table.isReserved = true;
    setTimeout(() => {
      callback(`Table ${tableNumber} has been successfully reserved.`);
    }, time);
  } else {
    callback(`Table ${tableNumber} is already reserved.`);
  }
}

// Step 3: Handle form submission
document.getElementById("reservationForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent the form from submitting the traditional way

  let name = document.getElementById("name").value;
  let tableNumber = parseInt(document.getElementById("tableNumber").value);
  let messageElement = document.getElementById("message");

  reserveTable(tableNumber, function (message) {
    messageElement.textContent = message;
  }, 2000); // Reserve the table for 2 seconds before calling the callback
});
