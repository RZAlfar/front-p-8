function theme(){
  document.body.classList.toggle("dark");
  document.querySelector(".offcanvas").classList.toggle("text-bg-dark");
  document.querySelector(".navbar").classList.toggle("navbar-dark");
  document.querySelector(".navbar").classList.toggle("bg-dark");
  document.querySelector(".btn-close").classList.toggle("btn-close-white");
  document
    .querySelector(".dropdown-menu")
    .classList.toggle("dropdown-menu-dark");
  document.querySelector("nav dot").classList.toggle("dark")
}