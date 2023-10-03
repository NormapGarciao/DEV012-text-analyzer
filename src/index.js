import analyzer from './analyzer.js';
//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

function contador1() {
  const text = textarea.value
  document.querySelector('[data-testid="word-count"]').innerHTML = 'recuento de palabras ' + analyzer.getWordCount(text);
  document.querySelector('[data-testid="character-count"]').innerHTML = 'recuento de caracteres ' + analyzer.getCharacterCount(text);
  document.querySelector('[data-testid="character-no-spaces-count"]').innerHTML = 'recuento de caracteres excluyendo espacios y signos de puntuacion ' + analyzer.getCharacterCountExcludingSpaces(text);
  document.querySelector('[data-testid="number-count"]').innerHTML = 'recuento de numeros ' + analyzer.getNumberCount(text);
  document.querySelector('[data-testid="number-sum"]').innerHTML = 'suma total de numeros ' + analyzer.getNumberSum(text);
  //document.querySelector('data-testid="word-length-average"').innerHTML = 'longitud media de palabras ' + analyzer.getAverageWordLength(text);
}
const textarea = document.querySelector("textarea[name='user-input']");
const resetButton = document.getElementById("reset-button");
resetButton.addEventListener("click", () => {
  textarea.value = "";
})
textarea.addEventListener("input", contador1);














