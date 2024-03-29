const showRegisterFormBtn = document.querySelector("#showRegisterFormBtn");
const showLoginFormBtn = document.querySelector("#showLoginFormBtn");
const regImg = document.querySelector("#regImg");
const regForm = document.querySelector("#regForm");
const loginImg = document.querySelector("#loginImg");
const loginForm = document.querySelector("#loginForm");

showRegisterFormBtn.addEventListener("click", function () {
   regImg.classList.add("hidden");
   regForm.classList.remove("hidden");

   loginImg.classList.remove("hidden");
   loginForm.classList.add("hidden");
});

showLoginFormBtn.addEventListener("click", function () {
   loginImg.classList.add("hidden");
   loginForm.classList.remove("hidden");

   regImg.classList.remove("hidden");
   regForm.classList.add("hidden");
});
