// const openNav = document.querySelector(".open-btn");
// const closeNav = document.querySelector(".close-btn");
// const menu = document.querySelector(".nav-list");

// const menuLeft = menu.getBoundingClientRect().left;
// openNav.addEventListener("click", () => {
//   if (menuLeft < 0) {
//     menu.classList.add("show");
//   }
// });

// closeNav.addEventListener("click", () => {
//   if (menuLeft < 0) {
//     menu.classList.remove("show");
//   }
// });

// // Fixed Nav
// const navBar = document.querySelector(".nav");//return the first elemnt
// const navHeight = navBar.getBoundingClientRect().height;//object providing information about the size of an element and its position relative to the viewport
// window.addEventListener("scroll", () => {
//   const scrollHeight = window.pageYOffset;
//   if (scrollHeight > navHeight) {
//     navBar.classList.add("fix-nav");
//   } else {
//     navBar.classList.remove("fix-nav");
//   }
// });

// // Scroll To
// const links = [...document.querySelectorAll(".scroll-link")];
// links.map(link => {
//   if (!link) return;
//   link.addEventListener("click", e => {
//     e.preventDefault();//prevent the link above from following url

//     const id = e.target.getAttribute("href").slice(1);

//     const element = document.getElementById(id);
//     const fixNav = navBar.classList.contains("fix-nav");
//     let position = element.offsetTop - navHeight;

//     window.scrollTo({
//       top: position,
//       left: 0,
//     });

//     navBar.classList.remove("show");
//     menu.classList.remove("show");
//     document.body.classList.remove("show");
//   });
// });
