"use strict";
import { imageBase_url } from "./api.js";

export function createMovieCard(movie) {
  const { poster_path, title, vote_average, release_date, id } = movie;
  const card = document.createElement("div");
  card.classList.add("movie-card");
  card.innerHTML = `
  <figure class="poster-box card-banner">
                <img
                  src="${imageBase_url}w342${poster_path}"
                  class="img-cover"
                  alt="${title}"
                />
              </figure>
              <h4 class="title">${title}</h4>
              <div class="meta-list">
                <div class="meta-item">
                  <img
                    src="assets/images/star.png"
                    width="20"
                    height="20"
                    alt="rating"
                    loading="lazy"
                  />
                  <span class="sapn">${vote_average.toFixed(1)}</span>
                </div>

                <div class="card-badge">${release_date.split("-")[0]}</div>
              </div>

              <a
                href="detail.html"
                title="${title}"
                class="card-btn"
                onclick="getMovieDetail(${id})"
              ></a>`;
  return card;
}
