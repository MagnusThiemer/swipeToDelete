"use strict";

window.addEventListener('DOMContentLoaded', function () {
  var binArray = JSON.parse(localStorage.getItem('bin'));
  var savedArray = JSON.parse(localStorage.getItem('saved'));
  var container = document.querySelector('#container');
  console.log(binArray, savedArray);
  var emptyBinButtonElement = document.querySelector('#emptyBinButton');

  var generateBinList = function generateBinList(array) {
    array.forEach(function (element) {
      var jokeLi = document.createElement('li');
      jokeLi.classList.add('container__li');
      jokeLi.id = element.id;
      var jokeP = document.createElement('p');
      jokeP.classList.add('container__p');
      jokeP.textContent = element.joke;
      jokeLi.appendChild(jokeP);
      container.appendChild(jokeLi);
    });
  };

  emptyBinButtonElement.addEventListener('click', function () {
    binArray = [];
    localStorage.setItem('bin', binArray);
    container.innerHTML = '';
    console.log('clicked');
  });
  generateBinList(binArray);
});