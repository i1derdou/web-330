"use strict";
/*    JavaScript 7th Edition
      Chapter 12
      Project 12-03

      Project to show a recipe with expanding/contracting content
      Author: David Clemens
      Date:   2024-07-28

      Filename: project12-03.js
*/

// Run the script once the page is fully loaded
$(() => {
  // jQuery selector for the children of article h2 elements
  $("article > h2").click((e) => {
    // Declare variables for the heading, the following list, and the heading's image
    let heading = $(e.target);
    let list = $(heading).next();
    let headingImage = $(heading).children("img");

    // jQuery slideToggle method to show or hide the list with a sliding animation
    $(list).slideToggle(500);

    // Change the image source depending on its current state
    if ($(headingImage).attr("src") === "plus.png") {
      $(headingImage).attr("src", "minus.png");
    } else {
      $(headingImage).attr("src", "plus.png");
    }
  });
});
