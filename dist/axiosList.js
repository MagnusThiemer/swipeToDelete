"use strict";

window.addEventListener('DOMContentLoaded', function () {
  var url = 'https://icanhazdadjoke.com/';
  var container = document.querySelector('#container');
  /*     localStorage.setItem('bin', [23, 35, 55, 'hello']);
      console.log(localStorage.bin);
      const bin = localStorage.bin
      console.log(localStorage.bin); */

  /* ---------- LOCAL STORAGE EXAMPLE ---------- */

  var binArray = [];
  /*     binArray.push(23, 'hello', 33); */

  /*     localStorage.setItem('bin', binArray); */

  /*     console.log(localStorage.bin.split(',')); */

  /* ------------------------------------------- */

  var fetch10Jokes = function fetch10Jokes() {
    var jokeArray = [];
    container.innerHTML = '';

    for (var i = 0; i < 10; i++) {
      axios.get(url, {
        headers: {
          Accept: "application/json"
        }
      }).then(function (response) {
        jokeArray.push(response.data.joke);
        var jokeLi = document.createElement('li');
        jokeLi.classList.add('container__li');
        jokeLi.id = "_".concat(response.data.id);
        var jokeP = document.createElement('p');
        jokeP.classList.add('container__p');
        jokeP.textContent = response.data.joke;
        var deleteButton = document.createElement('div');
        var saveButton = document.createElement('div');
        deleteButton.classList.add('container__delete-button');
        saveButton.classList.add('container__save-button');
        deleteButton.innerHTML = '<i class="fas fa-trash-alt"></i>';
        saveButton.innerHTML = '<i class="fas fa-bookmark"></i>';
        jokeLi.appendChild(saveButton);
        jokeLi.appendChild(deleteButton);
        jokeLi.appendChild(jokeP);
        container.appendChild(jokeLi);
      });
    }
  };

  var newJokeButtonElement = document.querySelector('#containerButtonElement');
  newJokeButtonElement.addEventListener('click', fetch10Jokes);
  fetch10Jokes();
  container.addEventListener('click', function (event) {
    if (event.target.tagName === 'I' && event.target.parentNode.classList.contains('container__delete-button')) {
      deleteJoke(event.target.parentNode.parentNode.id);
    } else if (event.target.classList.contains('container__delete-button')) {
      deleteJoke(event.target.parentNode.id);
    }
  });

  function deleteJoke(elementId) {
    binArray.push(elementId);
    localStorage.setItem('bin', binArray);
    var binCounterElement = document.querySelector('#binCounter');
    binCounterElement.style.display = 'flex';
    binCounterElement.textContent = binArray.length;
    var removeJoke = document.querySelector("#".concat(elementId));
    removeJoke.classList.add('animate__animated', 'animate__fadeOutLeft', 'height__0', 'animate__fast');
    setTimeout(function () {
      removeJoke.style.minHeight = '0';
    }, 400);
    setTimeout(function () {
      container.removeChild(removeJoke);
    }, 800);
  }
});