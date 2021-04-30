const menuToggle = document.querySelector(".toggle");
const mainSection = document.querySelector(".main");

menuToggle.addEventListener("click", () => {
  //   if (mainSection.classList.contains("active")) {
  //     mainSection.classList.remove("active");
  //   } else {
  //     mainSection.classList.add("active");
  //   }
  mainSection.classList.toggle("active");
});
