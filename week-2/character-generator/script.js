/*
  Pragmatic JavaScript
  Chapter 1
  Programming Assignment

  Author: David Clemens
  Date: 2024-06-09
  Filename:
*/

"use strict";

function createCharacter(name, gender, characterClass) {
  return {
    getName: function() {
        return name;
    },
    getGender: function() {
        return gender;
    },
    getClass: function() {
        return characterClass;
    }
  };
}

document.getElementById("generateHero").addEventListener("click", function(e) {

  // Prevent form from submitting
  e.preventDefault();

  // Get form values
  const name = document.getElementById('heroName').value;
  const gender = document.getElementById('heroGender').value;
  const characterClass = document.getElementById('heroClass').value;

  // Create character
  const character = createCharacter(name, gender, characterClass);

  // Display character information
  document.getElementById('characterOutput').innerHTML = '<br><strong>Name:</strong> ' + character.getName() + '<br><strong>Gender:</strong> ' + character.getGender() + '<br><strong>Class:</strong> ' + character.getClass();

});