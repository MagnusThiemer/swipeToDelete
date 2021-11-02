"use strict";

window.addEventListener('DOMContentLoaded', function () {
  var url = 'https://icanhazdadjoke.com/';
  var container = document.querySelector('#container');

  var fetch10Jokes = function fetch10Jokes() {
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
        var jokeId = "joke".concat(i);
        var jokeP = document.createElement('p');
        jokeP.classList.add('container__p');
        jokeP.textContent = response.data.joke;
        var deleteButton = document.createElement('div');
        var saveButton = document.createElement('div');
        deleteButton.classList.add('container__delete-button');
        saveButton.classList.add('container__save-button');
        deleteButton.innerHTML = '<i class="fas fa-trash-alt"></i>';
        saveButton.innerHTML = '<i class="fas fa-bookmark"></i>';
        deleteButton.addEventListener('click', function () {
          return deleteJoke(jokeId);
        });
        jokeLi.appendChild(saveButton);
        jokeLi.appendChild(deleteButton);
        jokeLi.appendChild(jokeP);
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

  function deleteJoke(elementId) {
    var removeJoke = document.querySelector("#".concat(elementId));
    container.removeChild(removeJoke);
  }
});