import analyzer from './analyzer.js';
//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

//obtiene el texto que el usuario escribe en uel área de texto
function contador1() {
  const text = textarea.value;
  //actualiza el contenido del elemento en la página web usando el objeto analyzer
  document.querySelector('[data-testid="word-count"]').innerHTML = 'recuento de palabras ' + analyzer.getWordCount(text);
  document.querySelector('[data-testid="character-count"]').innerHTML = 'recuento de caracteres ' + analyzer.getCharacterCount(text);
  document.querySelector('[data-testid="character-no-spaces-count"]').innerHTML = 'recuento de caracteres excluyendo espacios y signos de puntuacion ' + analyzer.getCharacterCountExcludingSpaces(text);
  document.querySelector('[data-testid="number-count"]').innerHTML = 'recuento de numeros ' + analyzer.getNumberCount(text);
  document.querySelector('[data-testid="number-sum"]').innerHTML = 'suma total de numeros ' + analyzer.getNumberSum(text);
  document.querySelector('[data-testid="word-length-average"]').innerHTML = 'longitud media de palabras ' + analyzer.getAverageWordLength(text);
}
const textarea = document.querySelector("textarea[name='user-input']");
const resetButton = document.getElementById("reset-button");

//boton de limpiar y restrablece a 0
resetButton.addEventListener("click", () => {  
  textarea.value = "";
  contador1(); 
  //actualiza el contenido de los elementos con el atributo data-testid 
  document.querySelector('[data-testid="word-count"]').innerHTML = 'recuento de palabras ' + 0;
  document.querySelector('[data-testid="character-count"]').innerHTML = 'recuento de caracteres ' + 0;
  document.querySelector('[data-testid="character-no-spaces-count"]').innerHTML = 'recuento de caracteres excluyendo espacios y signos de puntuacion ' + 0;
  document.querySelector('[data-testid="number-count"]').innerHTML = 'recuento de numeros ' + 0;
  document.querySelector('[data-testid="number-sum"]').innerHTML = 'suma total de numeros ' + 0;
  document.querySelector('[data-testid="word-length-average"]').innerHTML = 'longitud media de palabras ' + 0;

});
textarea.addEventListener("input", contador1); //escucha los eventos como escribir y borrar














