"use strict";

window.addEventListener('DOMContentLoaded', function () {
  var url = 'https://icanhazdadjoke.com/';

  var fetchJoke = function fetchJoke() {
    axios.get(url, {
      headers: {
        Accept: "application/json"
      }
    }).then(function (response) {
      paragraphElement.textContent = response.data.joke;
    });
  };

  var paragraphElement = document.querySelector('#containerPElement');
  var newJokeButtonElement = document.querySelector('#containerButtonElement');
  fetchJoke();
  newJokeButtonElement.addEventListener('click', fetchJoke);
});