/*
  Pragmatic JavaScript
  Chapter 4
  Programming Assignment

  Author:   David Clemens
  Date:     2024-07-21
  Filename: script.js
*/

"use strict";

// Define an array of movie objects
const movies = [
  {
      title: "Inception",
      director: "Christopher Nolan",
      year: 2010,
      synopsis: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO."
  },
  {
      title: "The Matrix",
      director: "The Wachowskis",
      year: 1999,
      synopsis: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers."
  },
  // Add more movie objects as needed
];

// Function to fetch movie data
function fetchMovie(title) {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          const movie = movies.find(movie => movie.title.toLowerCase() === title.toLowerCase());
          if (movie) {
              resolve(movie);
          } else {
              reject(`Movie titled "${title}" not found.`);
          }
      }, 1000); // Simulate network delay
  });
}

// Async function to display movie data
async function displayMovie(event) {
  event.preventDefault();
  const title = document.getElementById('title').value;
  const movieTitleElem = document.getElementById('movie-title');
  const movieDirectorElem = document.getElementById('movie-director');
  const movieYearElem = document.getElementById('movie-year');
  const movieSynopsisElem = document.getElementById('movie-synopsis');
  const errorMessageElem = document.getElementById('error-m0essage');

  try {
      const movie = await fetchMovie(title);
      movieTitleElem.textContent = movie.title;
      movieDirectorElem.textContent = movie.director;
      movieYearElem.textContent = movie.year;
      movieSynopsisElem.textContent = movie.synopsis;
      errorMessageElem.classList.add('hidden');
  } catch (error) {
      movieTitleElem.textContent = '';
      movieDirectorElem.textContent = '';
      movieYearElem.textContent = '';
      movieSynopsisElem.textContent = '';
      errorMessageElem.textContent = error;
      errorMessageElem.classList.remove('hidden');
  }
}

// Attach event listener to the form
document.getElementById('movie-form').addEventListener('submit', displayMovie);
