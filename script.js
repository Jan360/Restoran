// Модальное окно
const modal = document.getElementById("modal"); // Кнопка открытия
const btn = document.getElementById("btn");
const span = document.getElementById("close"); // Кнопка закрытия
// Изменение стилей (отображения) при клике
btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
// Если кликнуть на модальном окне, оно отключится
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Меню (Curtain Menu)
// При нажатии меняет стиль ширины
function openNav() {
  document.getElementById("nav").style.width = "100%";
}
function closeNav() {
  document.getElementById("nav").style.width = "0%";
}

