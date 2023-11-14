// Модальное окно
const modal = document.getElementById("modal"); // Кнопка открытия
const btns = document.getElementsByClassName("btn-reserve"); // Кнопки модального окна
const span = document.getElementsByClassName("close"); // Кнопки закрытия

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

// Перебор кнопок
for(let elem of btns){
  elem.onclick = function() {
    modal.style.display = "block"
  }
}
// Кнопки закрытия
for(let close of span){
  close.onclick = function() {
    modal.style.display = "none"
  }
}
