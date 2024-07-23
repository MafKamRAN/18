const button = document.getElementById("myBtn");
const popover = document.getElementById("_popover");
const closebutton = document.getElementById("_closebtn");
myBtn.addEventListener("click", function () {
  popover.classList.add("active");
});
closebutton.addEventListener("click", function () {
  popover.classList.remove("active");
});
