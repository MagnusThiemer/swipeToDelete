"use strict";

var coordinateStart;
var coordinateMove;
var container = document.querySelector('#container');
var targetItem;
var targetItemParent;
container.addEventListener('touchstart', function (event) {
  targetItem = event.target;

  if (event.target.tagName == "P") {
    coordinateStart = event.touches[0].clientX;
  }
});
container.addEventListener('touchmove', function (event) {
  if (targetItem.tagName == 'P') {
    targetItemParent = targetItem.parentNode;
    coordinateMove = event.touches[0].clientX;

    if (coordinateMove < coordinateStart && coordinateMove > coordinateStart - targetItemParent.clientWidth * 0.4) {
      targetItem.style.transform = "translateX(".concat(coordinateMove - coordinateStart, "px)");
    }
  }
});
container.addEventListener('touchend', function (event) {
  if (coordinateMove < coordinateStart - targetItemParent.clientWidth * 0.2) {
    targetItem.style.transform = "translateX(-".concat(targetItemParent.clientWidth * 0.4, "px)");
  } else {
    targetItem.style.transform = "translateX(0)";
  }
});