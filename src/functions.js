
document.addEventListener("DOMContentLoaded", function () {
  const categoryContainers = document.querySelectorAll(".category-container");

  categoryContainers.forEach((container) => {
    const optionsSection = container.querySelector(".options");
    const headerCategory = container.querySelector(".header-category");

    headerCategory.addEventListener("click", function () {
      if (optionsSection.style.display === "none" || optionsSection.style.display === "") {
        optionsSection.style.display = "flex";
      } else {
        optionsSection.style.display = "none";
      }
    });
  });
});
