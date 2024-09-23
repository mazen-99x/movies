let searchBox = document.querySelector("[search-box]");
let searchTogglers = document.querySelectorAll("[search-toggler]");

// make events in tags
const addEventonElements = function (elements, eventType, callback) {
  for (const ele of elements) {
    ele.addEventListener(eventType, callback);
  }
};
addEventonElements(searchTogglers, "click", function () {
  searchBox.classList.toggle("active");
});

const getMovieDetail = function (movieId) {
  window.localStorage.setItem("movieId", String(movieId));
};
const getMovieList = function (urlParam, genreName) {
  window.localStorage.setItem("urlParam", urlParam);
  window.localStorage.setItem("genreName", genreName);
};
