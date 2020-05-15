//Adiciona zeros à esquerda de um numero

function zeroLeft(number, width) {
  number = number.toString();
  while (number.length < width)
    number = "0" + number;
  return number;
}