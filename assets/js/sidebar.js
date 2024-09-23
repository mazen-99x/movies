"use strict";
import { api_key, fetchDataFromServer } from "./api.js";

export function sidebar() {
  const sidebarInner = document.createElement("div");
  sidebarInner.classList.add("sidebar-inner");

  sidebarInner.innerHTML = `
    <div class="sidebar-inner">
      <div class="sidebar-list">
        <p class="title">Genre</p>
      </div>
      <div class="sidebar-list">
        <p class="title">Language</p>
        <a href="./movie-list.html" menu-close class="sidebar-link"
        onclick='getMovieList("with_original_language=en","English")'>English</a>
        <a href="./movie-list.html" menu-close class="sidebar-link"
        onclick='getMovieList("with_original_language=it","Italian")'>Italian</a>
        <a href="./movie-list.html" menu-close class="sidebar-link"
        onclick='getMovieList("with_original_language=de","German")'>German</a>
        <a href="./movie-list.html" menu-close class="sidebar-link"
        onclick='getMovieList("with_original_language=ru","Russian")'>Russian</a>
        <a href="./movie-list.html" menu-close class="sidebar-link"
        onclick='getMovieList("with_original_language=ko","Korean")'>Korean</a>
        <a href="./movie-list.html" menu-close class="sidebar-link"
        onclick='getMovieList("with_original_language=hi","Hindi")'>Hindi</a>
        <a href="./movie-list.html" menu-close class="sidebar-link"
        onclick='getMovieList("with_original_language=pt","Portuguese")'>Portuguese</a>
        <a href="./movie-list.html" menu-close class="sidebar-link"
        onclick='getMovieList("with_original_language=tr","Turkish")'>Turkish</a>
        <a href="./movie-list.html" menu-close class="sidebar-link"
        onclick='getMovieList("with_original_language=es","Spanish")'>Spanish</a>
        <a href="./movie-list.html" menu-close class="sidebar-link"
        onclick='getMovieList("with_original_language=ja","Japanese")'>Japanese</a>
        <a href="./movie-list.html" menu-close class="sidebar-link"
        onclick='getMovieList("with_original_language=fr","French")'>French</a>
        <a href="./movie-list.html" menu-close class="sidebar-link"
        onclick='getMovieList("with_original_language=ar","Arabic")'>Arabic</a>
      </div>
      <div class="sidebar-footer">
        <p class="copyright">
          Copyright 2024
          <a href="https://www.facebook.com/profile.php?id=100036184008117">mazen</a>
        </p>
        <img
          src="assets/images/tmdb-logo.svg"
          width="130"
          height="17"
          alt="the movie database logo"
        />
      </div>
    </div>
  `;

  // Fetch genre list from the API
  fetchDataFromServer(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${api_key}`,
    function ({ genres }) {
      const genreList = {}; // Initialize genre list

      // Fill genreList object with genres from the API
      for (const { id, name } of genres) {
        genreList[id] = name;
      }

      // After fetching the genres, create genre links
      genreLink(genreList);
    }
  );

  // Function to generate genre links dynamically
  const genreLink = function (genreList) {
    for (const [genreId, genreName] of Object.entries(genreList)) {
      const link = document.createElement("a");
      link.classList.add("sidebar-link");
      link.setAttribute("href", "./movie-list.html?genre=" + genreId); // Use genre ID in URL
      link.setAttribute("menu-close", "");
      link.setAttribute(
        "onclick",
        `getMovieList("with_genres=${genreId}","${genreName}")`
      );
      link.textContent = genreName;
      sidebarInner.querySelectorAll(".sidebar-list")[0].appendChild(link);
    }

    // Append sidebar to the page after links are created
    const sidebar = document.querySelector("[sidebar]");
    sidebar.appendChild(sidebarInner);
    toggleSidebar(sidebar);
  };

  // Function to toggle sidebar visibility
  const toggleSidebar = function (sidebar) {
    const sidebarBtns = document.querySelectorAll("[menu-btn]");
    const sidebarTogglers = document.querySelectorAll("[menu-toggler]");
    const sidebarClose = document.querySelectorAll("[menu-close]");
    const overlay = document.querySelector("[overlay]");

    // Add event listeners to togglers and close buttons
    addEventonElements(sidebarTogglers, "click", function () {
      sidebar.classList.toggle("active");
      sidebarBtns.forEach((btn) => btn.classList.toggle("active"));
      overlay.classList.toggle("active");
    });

    addEventonElements(sidebarClose, "click", function () {
      sidebar.classList.remove("active");
      sidebarBtns.forEach((btn) => btn.classList.remove("active"));
      overlay.classList.remove("active");
    });
  };
}
