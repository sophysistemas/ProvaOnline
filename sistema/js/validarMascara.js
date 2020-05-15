
//Valida formatos das mascaras
function validarMascara(mascara, valor) {

  if (!mascara.test(valor)) {
    return false
  } else {
    return true;
  }

}