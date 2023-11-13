
// Модальное окно
const modal = document.getElementById("modal"); // Кнопка открытия
const btns = document.getElementsByClassName("btn-reserve"); // Кнопки модального окна
const span = document.getElementsByClassName("close"); // Кнопки закрытия
// Изменение стилей (отображения) при клике
// btn.onclick = function() {
//   modal.style.display = "block";
// }
// span.onclick = function() {
//   modal.style.display = "none";
// }
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
    if (modal.style.display === "block") {
      modal.style.display = "none";
    } else {
      modal.style.display = "block";
    }
  };
}
// Кнопки закрытия
for(let close of span){
  close.onclick = function() {
    if (modal.style.display === "block") {
      modal.style.display = "none";
    } else {
      modal.style.display = "block";
    }
  };
}
