"use strict";

window.addEventListener('DOMContentLoaded', function () {
  var url = 'http://jsonplaceholder.typicode.com/users';
  axios.get(url).then(function (response) {
    /* console.log(response.data[1]) */
  });
});