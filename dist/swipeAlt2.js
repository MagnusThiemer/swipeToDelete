"use strict";

var coordinateStart;
var coordinateMove;
var container = document.querySelector('#container');
var targetItem;
container.addEventListener('touchstart', function (event) {
  if (event.target.tagName == "P") {
    console.log(event.target);
    coordinateStart = event.touches[0].clientX;
    targetItem = event.target;
  }
});
container.addEventListener('touchmove', function (event) {
  coordinateMove = event.touches[0].clientX;

  if (coordinateMove < coordinateStart) {
    targetItem.style.transform = "translateX(".concat(coordinateMove - coordinateStart, "px)");
    console.log(targetItem.style.transform);
  }
});