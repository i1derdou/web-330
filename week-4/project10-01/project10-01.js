"use strict";
/*    JavaScript 7th Edition
      Chapter 10
      Project 10-01

      Project to create a drag and drop jigsaw puzzle
      Author: David Clemens
      Date:   2024-06-23

      Filename: project10-01.js
*/

// Reference to the puzzle board
let puzzleBoard = document.getElementById("puzzleBoard");
// Counter for the zIndex style of each puzzle piece
let zCounter = 1;
// Array of integers from 1 to 48
let intList = new Array(48);
// pointerX and pointerY will contain the initial coordinates of the pointerX
// pieceX and pieceY will contain the initial coordinates of a puzzle piece
let pointerX, pointerY, pieceX, pieceY;

// Sort the integers from 1 to 48 in random order
for (let i = 0; i < 48 ; i++) {
   intList[i] = i+1;
}
intList.sort(function() {
   return 0.5 - Math.random();
});

// generate randomly-sorted puzzle pieces
for (let i = 0; i < 48; i++) {
   let piece = document.createElement("img");
   piece.src = "piece" + intList[i] + ".png";
   let rowNum = Math.ceil((i+1)/8);
   let colNum = (i + 1) - (rowNum - 1)*8;
   piece.style.top = (rowNum - 1)*98 + 7 + "px";
   piece.style.left = (colNum - 1)*98 + 7 + "px";
   piece.draggable = false; // override the default draggability of images
   puzzleBoard.appendChild(piece);
}

// Node list representing the puzzle pieces
let pieces = document.querySelectorAll("div#puzzleBoard img");

// Add event listener to each puzzle piece for the 'pointerdown' event
for(let items of pieces) {
  items.addEventListener("pointerdown", grabPiece);
}

// Function to handle the 'pointerdown' event
function grabPiece(e) {
  // Store the initial pointer coordinates
  pointerX = e.clientX;
  pointerY = e.clientY;

  // Prevent default touch behavior
  e.target.style.touchAction = "none";

  // Increment z-index to bring the selected piece to the front
  zCounter++;
  e.target.style.zIndex = zCounter;

  // Store the initial position of the piece
  pieceX = e.target.offsetLeft;
  pieceY = e.target.offsetTop;

  // Add event listeners for moving and dropping the piece
  e.target.addEventListener("pointermove", movePiece);
  e.target.addEventListener("pointerup", dropPiece);
}

// Function to handle the 'pointermove' event
function movePiece(e) {
  // Calculate the difference between the current and initial pointer coordinates
  let diffX = e.clientX - pointerX;
  let diffY = e.clientY - pointerY;

  // Update the position of the piece based on the pointer movement
  e.target.style.left = pieceX + diffX + "px";
  e.target.style.top = pieceY + diffY + "px";
}

// Function to handle the 'pointerup' event
function dropPiece(e) {
  // Remove the event listeners for moving and dropping the piece
  e.target.removeEventListener("pointermove", movePiece);
  e.target.removeEventListener("pointerup", dropPiece);
}
