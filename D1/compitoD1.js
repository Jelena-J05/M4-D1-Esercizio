// 1. Crea una funzione che controlli due numeri interi. Ritorna `true` se uno dei due è 50 o se la somma dei due è 50.

function CheckNumbers(number1, number2) {
  if (number1 === 50 || number2 === 50 || number1 + number2 === 50) {
    return true;
  } else {
    return false;
  }
}

console.log(CheckNumbers(25, 25)); // Stampa "true" 
console.log(CheckNumbers(50, 20)); // Stampa "true" 
console.log(CheckNumbers(30, 30)); // Stampa "false"   

// 2. Crea una funzione che rimuova il carattere ad una specifica posizione da una stringa. Passa la stringa e la posizione come parametri e ritorna la stringa modificata.

function rimuoviCarattere(stringa, posizione) {
  if (posizione < 0 || posizione >= stringa.length) {
    // verificare se la posizione è valida
    return stringa;
  }
  // rimuovere il carattere in posizione specifica
  const stringaModificata = stringa.slice(0, posizione)
  return stringaModificata;
}


const stringa = "Welcome to Italy!";
const posizioneDaRimuovere = 6;
const nuovaStringa = rimuoviCarattere(stringa, posizioneDaRimuovere);
console.log(nuovaStringa); // Stampa "Welcom to Italy!"

//soluzione alternativa

function removeAt(s, i) {
  const chars = s.split("")
  chars.splice(i, 1)
  return chars.join("")
}

console.log(removeAt("test", 0))



// 3. Crea una funzione che controlli se due numeri siano compresi tra 40 e 60 o tra 70 e 100. Ritorna `true` se rispecchiano queste condizioni, altrimenti ritorna `false`.

function Numbers(n1, n2) {
  if ((n1 >= 40 && n1 <= 60) && (n2 >= 40 && n2 <= 60) || (n1 >= 70 && n1 <= 100) && (n2 >= 70 && n2 <= 100)) {
    return true;
  } else {
    return false
  }
}

console.log(Numbers(72, 101)) // Stampa "false"
console.log(Numbers(40, 60)) // Stampa "true"


// 4. Crea una funzione che accetti un nome di città come parametro e ritorni il nome stesso se inizia con “Los” o “New”, altrimenti ritorni `false`.

function CheckCityName(city) {
  if (city.toLowerCase().startsWith("los") || city.toLowerCase().startsWith("new")) {
    return city
  } else {
    return false;
  }
}

console.log(CheckCityName('Los Angeles')); // Stampa 'Los Angeles'
console.log(CheckCityName('New York')); // Stampa 'New York'
console.log(CheckCityName('London')); // Stampa "false"


// 5. Crea una funzione che calcoli e ritorni la somma di tutti gli elementi di un array.
// L’array deve essere passato come parametro.

function ArraySum(array) {
  let sum = 0;
  for (let number of array) {
    sum += number;
  }
  return sum;
}

const arrayNumbers = [5, 6, 7, 8];
const result = ArraySum(arrayNumbers);
console.log(result); // Stampa la somma degli elementi nell'array: 26


// 6. Crea una funzione che controlli che un array NON contenga i numeri 1 o 3. Se NON li contiene, ritorna `true`, altrimenti ritorna `false`.

function NumbersArray(array) {
  for (let number of array) {
    if (number !== 1 && number !== 3) {
      return true;
    } else {
      return false;
    }
  }
}

const arrayList1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const arrayList2 = [2, 4, 5, 6, 7]
const result1 = NumbersArray(arrayList1)
const result2 = NumbersArray(arrayList2)
console.log(result1, result2) // false, true

// 7. Crea una funzione per trovare il tipo di un angolo i cui gradi sono passati come parametro.
// Angolo acuto: meno di 90° ⇒ ritorna “acuto”
// Angolo ottuso: tra i 90° e i 180° gradi ⇒ ritorna “ottuso”
// Angolo retto: 90° ⇒ ritorna “retto”
// Angolo piatto: 180° ⇒ ritorna “piatto”

function tipoAngolo(gradi) {
  if (gradi < 90) {
    return "acuto";
  } else if (gradi > 90 && gradi < 180) {
    return "ottuso";
  } else if (gradi === 90) {
    return "retto";
  } else if (gradi === 180) {
    return "piatto";
  } else {
    return "non trovato";
  }
}

const angolo1 = 45;
const angolo2 = 95;
const angolo3 = 90;
const angolo4 = 180;

console.log(tipoAngolo(angolo1)); // Stampa "acuto"
console.log(tipoAngolo(angolo2)); // Stampa "ottuso"
console.log(tipoAngolo(angolo3)); // Stampa "retto"
console.log(tipoAngolo(angolo4)); // Stampa "piatto"


// 8. Crea una funzione che crei un acronimo a partire da una frase. Es. “Fabbrica Italiana Automobili Torino” deve ritornare “FIAT”.

function creaAcronimo(frase) {
  const parole = frase.split(" "); // dividere la frase in parole usando lo spazio come separatore
  let acronimo = ""; // la variabile acronimo come una stringa vuota
  for (let parola of parole) {
    acronimo += parola[0].toUpperCase(); // prendere il primo carattere di ciascuna parola e lo convertiamo in maiuscolo
  }
  return acronimo;
}

const frase = "Fabbrica Italiana Automobili Torino";
const acronimo = creaAcronimo(frase);
console.log(acronimo); // Stampa "FIAT"

// Esercizi extra

// NOTA: tutti gli esercizi devono essere svolti usando le funzioni

// 1. Partendo da una stringa (passata come parametro), ritorna il carattere più usato nella stringa stessa.  

const piuFrequente = (str) => {
  let max = 0;
  let currLett = "";

  for (let i = 0; i < str.length; i++) {
    let carattere = str.charAt(i);
    let amount = str.split(carattere).length - 1;

    if (amount > max) {
      currLett = carattere;
      max = amount;
    }
  }
  return currLett;
};

const str = "Fabbrica";
const currLet = piuFrequente(str);
console.log(currLet); // Stampa "a"


// 2. Controlla che due stringhe passate come parametri siano gli anagrammi l’una dell’altra. Ignora punteggiatura e spazi e ricordate di rendere la stringa tutta in minuscolo. Se le due parole sono anagrammi, ritorna true , altrimenti ritorna `false`.

const anagrammi = (str1, str2) => {
  return str1.split("").sort().join() == str2.split("").sort().join()
}


// 3. Partendo da una lista di possibili anagrammi e da una parola (entrambi passati come parametri),
//ritorna un nuovo array contenente tutti gli anagrammi corretti della parola data.
// Per esempio, partendo da “cartine” e [”carenti”, “incerta”, “espatrio”], il valore ritornato deve essere [”carenti”, “incerta”].

const trovaAnagrammi = (arr, parola) => {
  const possibili = []
  for (const anagramma of arr) {
    if (anagrammi(parola, anagramma)) {
      possibili.push(anagramma)
    }
  }
  return possibili
}


// 4. Partendo da una stringa passata come parametro, ritorna `true` se la stringa è palindroma o `false` se non lo è.

const palindroma = (parola) => {
  return parola.split("").reverse().join("") === parola
}


// 5. Partendo da un numero intero (dai parametri) ritorna un numero che contenga le stesse cifre, ma in ordine contrario. Es. 189 ⇒ 981

function contrario(num) {
  // Convertire il numero in una stringa
  const numString = String(num);

  // Dividere la stringa in un array di caratteri
  const charArray = numString.split("");

  // Invertire l'ordine degli elementi nell'array
  const reversedArray = charArray.reverse();

  // Riunire gli elementi nell'array in una stringa
  const reversedString = reversedArray.join("");

  // Convertire la stringa risultante in un numero
  const risultato = Number(reversedString);

  return risultato;
}

const num = 123;
const numeroInvertito = contrario(num);
console.log(numeroInvertito); // Stampa 321


// 6. Scrivi una funzione che accetti un numero positivo X come parametro. La funzione dovrebbe stampare a console una “scala” creata con il carattere “#” e avente X scalini.

// Es.
// X = 2
// `'# '
// '##'`
// X = 3
// `'# '
// '## '`
// `'###'`

const scala = (x) => {
  if (x < 0) return false
  for (let i = 1; i <= x; i++) {
    console.log("#".repeat(i))
  }
}


// 7. Crea una funzione che, data una stringa come parametro, ritorni la stessa stringa, ma al contrario. Es. “Ciao” ****⇒ “oaiC”

const contrarioParola = (par) => {
  return par.split("").reverse().join("")
}


// 8. Crea una funzione che accetti un array e un numero Y come parametro. Dividi l’array in sotto-array aventi lunghezza Y.
// Es. array: [1, 2, 3, 4], y: 2 ⇒ [[ 1, 2], [3, 4]]
// array: [1, 2, 3, 4, 5], y: 4 ⇒ [[ 1, 2, 3, 4], [5]]

const sottoArray = (array, y) => {
  let nuovo = []
  let numDiSottoArray = 0
  for (let i = 0; i < array.length; i++) {
    if (i % y === 0) numDiSottoArray++
  }
  console.log(numDiSottoArray)
  let start = 0

  for (let z = 0; z < numDiSottoArray; z++) {
    let temp = array.slice(start, start + y)
    start += y

    nuovo.push(temp)
  }
  return nuovo
}

console.log(sottoArray([1, 2, 3, 4, 5], 3))


// 9. Scrivi una funzione che accetti un numero positivo X come parametro. La funzione dovrebbe stampare a console una “piramide” create con il carattere “#” e avente X strati.

const piramide = (x) => {
  for (let i = 1; i <= x; i++) {
    const totali = x + x - 1
    const pieni = i + i - 1
    const spaziPerLato = totali - pieni
    console.log(
      `${" ".repeat(spaziPerLato / 2) +
      "#".repeat(pieni) +
      " ".repeat(spaziPerLato / 2)
      }`
    )
  }
}


// 10. Scrivi una funzione che accetti un intero N e ritorni una matrice a spirale NxN:

// Es.

// N = 2

// `[[1, 2],[4, 3]]`

// N = 3

// `[[1, 2, 3],[8, 9, 4],[7, 6, 5]]`

// N = 4

// `[[1, 2, 3, 4],[12, 13, 14, 5],[11, 16, 15, 6],[10, 9, 8, 7]]`

const matrice = (n) => {
  const finale = []
  for (let i = 0; i < n; i++) {
    let temp = []
    for (let k = 0; k < n; k++) {
      temp.push(i)
    }
    finale.push(temp)
  }
  return finale
}

console.log(matrice(4))