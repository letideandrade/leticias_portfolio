'use strict';

/**
 * element toggle function
 */

const elemToggleFunc = function (elem) { elem.classList.toggle("active"); }



/**
 * header sticky & go to top
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  if (window.scrollY >= 10) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }

});



/**
 * navbar toggle
 */

const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const navbar = document.querySelector("[data-navbar]");

navToggleBtn.addEventListener("click", function () {

  elemToggleFunc(navToggleBtn);
  elemToggleFunc(navbar);
  elemToggleFunc(document.body);

});

/**
 * skills toggle
 */

const toggleBtnBox = document.querySelector("[data-toggle-box]");
const toggleBtns = document.querySelectorAll("[data-toggle-btn]");
const skillsBox = document.querySelector("[data-skills-box]");

for (let i = 0; i < toggleBtns.length; i++) {
  toggleBtns[i].addEventListener("click", function () {

    elemToggleFunc(toggleBtnBox);
    for (let i = 0; i < toggleBtns.length; i++) { elemToggleFunc(toggleBtns[i]); }
    elemToggleFunc(skillsBox);

  });
}



/**
 * dark & light theme toggle
 */

const themeToggleBtn = document.querySelector("[data-theme-btn]");

themeToggleBtn.addEventListener("click", function () {

  elemToggleFunc(themeToggleBtn);

  if (themeToggleBtn.classList.contains("active")) {
    document.body.classList.remove("dark_theme");
    document.body.classList.add("light_theme");

    localStorage.setItem("theme", "light_theme");
  } else {
    document.body.classList.add("dark_theme");
    document.body.classList.remove("light_theme");

    localStorage.setItem("theme", "dark_theme");
  }

});

/**
 * check & apply last time selected theme from localStorage
 */

if (localStorage.getItem("theme") === "light_theme") {
  themeToggleBtn.classList.add("active");
  document.body.classList.remove("dark_theme");
  document.body.classList.add("light_theme");
} else {
  themeToggleBtn.classList.remove("active");
  document.body.classList.remove("light_theme");
  document.body.classList.add("dark_theme");
}



/* Full screen image */
  document.addEventListener('DOMContentLoaded', function() {
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach(card => {
      const figure = card.querySelector('figure');
      const image = figure.querySelector('img');

      figure.addEventListener('click', function() {
        // Cria um overlay para a tela cheia
        const fullscreenOverlay = document.createElement('div');
        fullscreenOverlay.classList.add('fullscreen-overlay');

        // Cria a imagem em tela cheia
        const fullscreenImage = document.createElement('img');
        fullscreenImage.src = image.src;
        fullscreenImage.alt = image.alt;

        // Cria o botão de fechar
        const closeButton = document.createElement('button');
        closeButton.innerHTML = '&times;';
        closeButton.classList.add('close-button');

        // Adiciona a imagem e o botão de fechar ao overlay
        fullscreenOverlay.appendChild(fullscreenImage);
        fullscreenOverlay.appendChild(closeButton);

        // Adiciona o overlay ao corpo do documento
        document.body.appendChild(fullscreenOverlay);

        // Adiciona um ouvinte de evento para fechar o overlay ao clicar no botão de fechar
        closeButton.addEventListener('click', function() {
          document.body.removeChild(fullscreenOverlay);
        });

        // Ativa o overlay de tela cheia
        setTimeout(function() {
          fullscreenOverlay.classList.add('active');
        }, 50); // Pequeno atraso para garantir que a transição de CSS funcione corretamente
      });
    });
  });