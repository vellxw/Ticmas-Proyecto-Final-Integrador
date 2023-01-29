const menuIcon = document.querySelector(".menu-icon");
const navigation = document.querySelector(".navigation");

menuIcon.addEventListener("click", function () {
  navigation.classList.toggle("active");
});
