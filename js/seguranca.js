window.onload = function () {

  var atualizada = localStorage.getItem('iniciado') || false;

  if (!atualizada) {
    localStorage.setItem('iniciado', true);
  } else {
    location.href = "index.html";
  }
}

/* 
$(function () {
  timeout = setTimeout(function () {
    location.href = "index.html";
  }, 600000);
});
 */

//Sai do sistema após 10 minutos de inatividade
window.onmousemove = function () {
  var timeout = null;

  if (timeout !== null) {
    clearTimeout(timeout);
  }
  timeout = setTimeout(function () {
    window.location.href = "index.html";
  }, 600000);
};
