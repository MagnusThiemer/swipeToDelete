"use strict";

window.addEventListener('DOMContentLoaded', function () {
  var container = document.querySelector('#container');
  var binArray = JSON.parse(localStorage.getItem('bin'));
  container.addEventListener('click', function (event) {
    if (event.target.tagName === 'I' && event.target.parentNode.classList.contains('container__delete-button')) {
      deleteFromBin(event.target.parentNode.parentNode.id);
    } else if (event.target.classList.contains('container__delete-button')) {
      deleteFromBin(event.target.parentNode.id);
    }
  });

  var deleteFromBin = function deleteFromBin(id) {
    binArray = binArray.filter(function (item) {
      return item.id !== id;
    });
    var removeJoke = document.querySelector("#".concat(id));
    removeJoke.classList.add('animate__animated', 'animate__fadeOutLeft', 'height__0', 'animate__fast');
    setTimeout(function () {
      removeJoke.style.minHeight = '0';
    }, 400);
    setTimeout(function () {
      container.removeChild(removeJoke);
    }, 800);
    localStorage.setItem('bin', JSON.stringify(binArray));
  };
});