const button = document.querySelector(".button");

button.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log(e)
});
