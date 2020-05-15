function replaceCharacter(string, caracter, novoCaracter) {

  while (string.indexOf(caracter) != -1) {
    string = string.replace(caracter, novoCaracter);
  }

  return string;
}
