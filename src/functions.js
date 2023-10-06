const arrow = document.getElementById("arrow");
const dropdownContent = document.getElementById("dropdown-content");

arrow.addEventListener("click", () => {
  // Alternar la clase 'rotate' en la imagen
  arrow.classList.toggle("rotate");

  // Mostrar u ocultar el contenido del dropdown
  if (dropdownContent.style.display === "block") {
    dropdownContent.style.display = "none";
  } else {
    dropdownContent.style.display = "block";
  }
});