const analyzer = {
  getWordCount: (text) => {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.   
    return text.split(/\s+/).length; //divide el texto y cuenta la cantidad de palabras
  },
  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
    if (text.trim()=== '') {
      return 0;
    }
    return text.length;
  },
  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    const characterExcludingSpaces = text.replace(/[^\w\s]/g, '').replace(/\s+/g, '');
    const numbers = characterExcludingSpaces.length;
    return numbers;
  },
  getAverageWordLength: (text) => {
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`
    const words = text.split(' '); //Divide el texto en palabras
    let totalLength = 0;
    for (let i = 0; i < words.length; i++) {
      totalLength += words[i].length;  //suma la longitud de cada palabra
    }
    const averageLength = totalLength / words.length;
    return parseFloat(averageLength.toFixed(2));  //convierte la cadena en un número de punto flotante 
  },
  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    const numbers = text.match(/\b\d+(\.\d+)?\b/g);
    if (!numbers) {
      return 0;
    }
    return numbers.length;    //devuelve la cantidad de números encontrados en el texto
  },
  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.  
    const numbers = text.match(/\b\d+(\.\d+)?\b/g);
    if (!numbers) {
      return 0;
    }
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      sum += parseFloat(numbers[i]);
    }
    return parseFloat(sum.toFixed(2));   //redondea la suma a 2 decimales y devuelve como número de punto flotante
  },
};

export default analyzer;
