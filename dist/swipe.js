"use strict";

window.addEventListener('DOMContentLoaded', function () {
  console.log('swipe');
  var containerElement = document.querySelector('#container');
  containerElement.addEventListener('touchstart', function (event) {
    var touchStartPoint;
    var touchEndPoint;
    var targetJokeId = event.target.id;

    if (!targetJokeId) {
      targetJokeId = event.target.parentNode.id;
    }

    var targetJoke = document.querySelector("#".concat(targetJokeId));

    if (event.target.tagName === 'P' || event.target.tagName === 'LI') {
      touchStartPoint = event.touches[0].clientX;
      event.target.addEventListener('touchmove', function (event) {
        touchEndPoint = event.touches[0].clientX;
      });
      event.target.addEventListener('touchend', function () {
        if (touchStartPoint - touchEndPoint > 120) {
          document.querySelector("#".concat(targetJokeId, "DeleteButton")).style.display = 'block';
          /* deleteButton(targetJoke); */
        } else if (touchStartPoint - touchEndPoint < -120) {
          /*                     saveButton(targetJoke); */
          document.querySelector("#".concat(targetJokeId, "SaveButton")).style.display = 'block';
        }
      });
    }
  });
});