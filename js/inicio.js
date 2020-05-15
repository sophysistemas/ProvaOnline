
var btnIniciar = document.getElementById('btnIniciar');

btnIniciar.onclick = function () {
 
  localStorage.setItem('inicio', getInicio());
  
  location.href = 'prova.php';
};

function getInicio() {

  let currentDate = new Date();

  let dia = (currentDate.getDate().toString().length == 1 ? '0' + currentDate.getDate() : currentDate.getDate());
  let mes = (currentDate.getMonth().toString().length == 1 ? '0' + (currentDate.getMonth() + 1) : (currentDate.getMonth()+1));

  let hora = (currentDate.getHours().toString().length == 1 ? '0' + currentDate.getHours() : currentDate.getHours());
  let minuto = (currentDate.getMinutes().toString().length == 1 ? '0' + currentDate.getMinutes() : currentDate.getMinutes());
  let segundo = (currentDate.getSeconds().toString().length == 1 ? '0' + currentDate.getSeconds() : currentDate.getSeconds());

  let dataInicio = [currentDate.getFullYear(), mes, dia].join('-');
  let horaInicio = [hora, minuto, segundo].join(':'); 
  
  let inicio = dataInicio + ' ' + horaInicio;

  return inicio;

}