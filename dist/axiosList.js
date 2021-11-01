"use strict";

window.addEventListener('DOMContentLoaded', function () {
  var url = 'https://icanhazdadjoke.com/';

  var fetch10Jokes = function fetch10Jokes() {
    var container = document.querySelector('#container');
    var jokeArray = [];
    container.innerHTML = '';

    var _loop = function _loop(i) {
      axios.get(url, {
        headers: {
          Accept: "application/json"
        }
      }).then(function (response) {
        jokeArray.push(response.data.joke);
        var jokeLi = document.createElement('li');
        jokeLi.classList.add('container__li');
        jokeLi.id = "joke".concat(i);
        var jokeP = document.createElement('p');
        jokeP.classList.add('container__p');
        jokeP.textContent = response.data.joke;
        var deleteButton = document.createElement('button');
        var saveButton = document.createElement('button');
        deleteButton.classList.add('container__delete-button');
        saveButton.classList.add('container__save-button');
        deleteButton.innerHTML = '<i class="fas fa-trash-alt"></i>';
        saveButton.innerHTML = '<i class="fas fa-bookmark"></i>';
        jokeLi.appendChild(saveButton);
        jokeLi.appendChild(deleteButton);
        jokeLi.appendChild(jokeP);
        /*                 deleteButton(jokeLi, i);
                        saveButton(jokeLi, i); */

        container.appendChild(jokeLi);
      });
    };

    for (var i = 0; i < 10; i++) {
      _loop(i);
    }
  };

  var paragraphElement = document.querySelector('#containerPElement');
  var newJokeButtonElement = document.querySelector('#containerButtonElement');
  newJokeButtonElement.addEventListener('click', fetch10Jokes);
  fetch10Jokes();
  /* SWIPE FUNCTION */
});