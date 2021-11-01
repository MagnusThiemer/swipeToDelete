"use strict";

window.addEventListener('DOMContentLoaded', function () {
  var url = 'https://icanhazdadjoke.com/';
  var jokesArray = [];

  var fillJokesArray = function fillJokesArray() {
    for (var i = 0; i < 10; i++) {
      axios.get(url, {
        headers: {
          Accept: "application/json"
        }
      }).then(function (response) {
        jokesArray.push({
          id: response.data.id,
          joke: response.data.joke
        });
      });
    }
  };

  fillJokesArray();
  console.log(jokesArray);
});