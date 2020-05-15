/*Função Pai de Mascaras*/
function mascaraCpf(o) {
  v_obj = o
  setTimeout("execmascaraCpf()", 1)
}

/*Função que Executa os objetos*/
function execmascaraCpf() {
  v_obj.value = maskCpf(v_obj.value)
}

function maskCpf(cpf) {
  cpf = cpf.replace(/\D/g, "")
  cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2")
  cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2")
  cpf = cpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2")
  return cpf
}
