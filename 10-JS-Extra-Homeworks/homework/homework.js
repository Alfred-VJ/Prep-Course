// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  let matrixRecargado = [];
  let matrixKey = Object.keys(objeto);
  let matrixValue = Object.values(objeto);
  for(let i = 0; i < matrixKey.length; i++){
    const provisionalArray = [];
    provisionalArray.push(matrixKey[i]);
    provisionalArray.push(matrixValue[i]);
    matrixRecargado.push(provisionalArray);
  }
  return matrixRecargado;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
      let letras ={};
      for(let i = 0 ; i < string.length; i++){
        let c = 0;
        for(let j = 0; j < string.length; j++){
          if(string[i] === string[j]){
            c++;
          }
        }
        letras[string[i]] = c;
      }
      return letras;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  let back='';
  let mayus = [];
  let minus = [];
  for(let i = 0; i<s.length; i++){
    if(s[i] === s[i].toUpperCase()){
      mayus.push(s[i])
    }else{
      minus.push(s[i])
    }
  }
    mayus.forEach(m => back = back + m);
    minus.forEach(n => back = back + n);

      return back;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  let contenedor1 = [];
  let contenedor2 = [];
  let mirror = '';

          for(let i = 0; i<str.length; i++){
            contenedor1.unshift(str[i]);
          }

          for(let i = 0; i< contenedor1.length;)
          {
            let wordMirror = '';
              for(let j = 0; j<contenedor1.length;)
              {
                  if(contenedor1[j] != ' ')
                  {
                    wordMirror = wordMirror + contenedor1.shift();
                  }else{
                    break;
                  }
              }            
                      if(wordMirror != ''){
                        contenedor2.unshift(wordMirror);
                        wordMirror = '';
                      }
                for(let k = 0; k<contenedor1.length;){
                  if(contenedor1[k] === ' '){
                    wordMirror = wordMirror + contenedor1.shift();
                  }else{
                    break;
                  }
                }

                if(wordMirror != ''){
                  contenedor2.unshift(wordMirror);
                  wordMirror = '';
                }
          }

          contenedor2.forEach(elemento => mirror = mirror + elemento);
          return mirror;
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
    let n1 = numero.toString();
    let capic = '';
    let cont =[];
    for(let i = 0; i<n1.length; i++){
      cont.unshift(n1[i]);
    }
    cont.forEach(el => capic = capic + el);
    if(capic === n1){
      return "Es capicua";
    }else{
      return "No es capicua";
    }
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  let fraseDelete ='';
  for(let i = 0; i<cadena.length; i++){
    if(cadena[i] != 'a' && cadena[i] != 'b' && cadena[i] != 'c'){
      fraseDelete = fraseDelete +cadena[i];
    }
  }
  return fraseDelete;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí

  let arrSu = arr;
  let convNum = [];
  let orden = [];

  arrSu.forEach(eleme => convNum.push(eleme.length));
  convNum.sort((a, b) => a-b);
  for(let i = 0; i<convNum.length; i++){
    for(let j = 0; j<arrSu.length; j++){
      if(convNum[i] === arrSu[j].length){
        orden.push(arrSu[j]);
        arrSu.splice(j, 1);
      }
    }
  }
  return orden;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  

  let union = [];
  for(let i = 0; i<arreglo1.length; i++){
    for(let j = 0; j<arreglo2.length; j++){
      if(arreglo1[i] == arreglo2[j]){
        union.push(arreglo2[j]);
      }
    }
  }

  return union;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

