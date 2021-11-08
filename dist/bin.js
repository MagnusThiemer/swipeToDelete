"use strict";

window.addEventListener('DOMContentLoaded', function () {
  var binArray = JSON.parse(localStorage.getItem('bin'));
  var savedArray = JSON.parse(localStorage.getItem('saved'));
  var container = document.querySelector('#container');
  var emptyBinButtonElement = document.querySelector('#emptyBinButton');

  var generateBinList = function generateBinList(array) {
    array.forEach(function (element) {
      var jokeLi = document.createElement('li');
      jokeLi.classList.add('container__li');
      jokeLi.id = element.id;
      var jokeP = document.createElement('p');
      jokeP.classList.add('container__p');
      jokeP.textContent = element.joke;
      var deleteButton = document.createElement('div');
      /*             let saveButton = document.createElement('div'); */

      deleteButton.classList.add('container__delete-button');
      /*             saveButton.classList.add('container__save-button'); */

      deleteButton.innerHTML = '<i class="fas fa-trash-alt"></i>';
      /*             saveButton.innerHTML = '<i class="fas fa-bookmark"></i>'; */

      /*             jokeLi.appendChild(saveButton); */

      jokeLi.appendChild(deleteButton);
      jokeLi.appendChild(jokeP);
      container.appendChild(jokeLi);
    });
  };

  emptyBinButtonElement.addEventListener('click', function () {
    binArray = [];
    localStorage.setItem('bin', binArray);
    container.innerHTML = '';
  });
  generateBinList(binArray);
});