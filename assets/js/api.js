"use strict";
const api_key = "76740fcc7dbc4a857c786802cbf10e1c";
const imageBase_url = "https://image.tmdb.org/t/p/";

const fetchDataFromServer = function (url, callback, param) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => callback(data, param));
};
export { imageBase_url, api_key, fetchDataFromServer };
