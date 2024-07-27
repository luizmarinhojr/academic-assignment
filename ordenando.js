// Trocar a posição de um item do vetor de acordo com o índices passados
const swap = (vetor = [], leftIndex, rightIndex) => {
    let aux = vetor[leftIndex];
    vetor[leftIndex] = vetor[rightIndex];
    vetor[rightIndex] = aux;
    return vetor;
}

// Embaralhar o vetor quantas vezes for requerido
const shuffle = (vetor = [], qntdTrades) => {
    let vetorComprimento = vetor.length - 1;
    for (var i = 0; i < qntdTrades; i++) {
        let randomNumber = Math.random() * vetorComprimento;
        let randomNumber2;
        do {
            randomNumber2 = Math.random() * vetorComprimento;
        } while (randomNumber == randomNumber2);
        
        vetor = swap(vetor, randomNumber.toFixed(0), randomNumber2.toFixed(0));
    }
    return vetor;
}

// Ordenar o vetor de forma crescente utilizando o algorítmo de bubble sort
const bubble_sort = (vetor = []) => {
    let vetorComprimento = vetor.length;
    for (let i = 0; i < vetorComprimento; i++) {
        for (let j = i + 1; j < vetorComprimento; j++) {
            if (vetor[i] > vetor[j]) {
                let aux = vetor[i];
                vetor[i] = vetor[j];
                vetor[j] = aux;
            }
        }
    }
    return vetor;
}

// Ordenar o vetor de forma crescente utilizando o algorítmo de selection sort
const selection_sort = (vetor = []) => {
    let vetorComprimento = vetor.length;
    for (let i = 0; i < vetorComprimento; i++) {
        let menor = i;
        for (let j = i + 1; j < vetorComprimento; j++) {
          if (vetor[menor] > vetor[j]) {
            menor = j;
          }
        }
        if (i !== menor) {
          // swap the elements
          [vetor[i],vetor[menor]] = [vetor[menor], vetor[i]];
        }
      }
    
      return vetor;
}

// Ordenar o vetor de forma crescente utilizando o algorítmo de quick sort
const quick_sort = (vetor = [], inicialPosition, finalPosition) => {
    var index;
    if (vetor.length > 1) {
        index = particionamento(vetor, inicialPosition, finalPosition, vetor[Math.floor((finalPosition + inicialPosition) / 2)]); //index returned from partition
        if (inicialPosition < index - 1) { //more elements on the inicialPosition of the pivot
            quick_sort(vetor, inicialPosition, index - 1);
        }
        if (index < finalPosition) { //more elements on the right side of the pivot
            quick_sort(vetor, index, finalPosition);
        }
    }
    return vetor;
}

// Auxiliar para o algorítmo de ordenação quick sort
const particionamento = (vetor = [], inicialPosition, finalPosition, pivotValue) => {
        i = inicialPosition,
        j = finalPosition;
    while (i <= j) {
        while (vetor[i] < pivotValue) {
            i++;
        }
        while (vetor[j] > pivotValue) {
            j--;
        }
        if (i <= j) {
            swap(vetor, i, j); //sawpping two elements
            i++;
            j--;
        }
    }
    return i;
}




console.log("SWAPPED vetorAY ITEMS = " + swap(["teste1", "teste2", "teste3", "teste4", "teste5"], 4, 2));

console.log("SHUFFLE ITEMS = " +shuffle([1,2,3,4,5,6,7,8], 1));

vetorParaOrdenar = [7,3,4,1,2,9,6,5];

console.log("BUBBLE SORT = " + bubble_sort(vetorParaOrdenar));

console.log("SELECTION SORT = " + selection_sort(vetorParaOrdenar));

console.log("QUICK SORT = " + quick_sort(vetorParaOrdenar, 0, vetorParaOrdenar.length -1));





// a) Função swap, com o objetivo de trocar os valores de duas posições de um vetor,
// tendo como parâmetros de entrada o vetor e as posições

//     b) Função shuffle, com o objetivo de embaralhar os elementos de um vetor, tendo
// como parâmetros de entrada o vetor e a quantidade de trocas

//     c) Função bubble_sort, para ordenar um vetor de inteiros com o algoritmo Bubble
// Sort, tendo como parâmetro de entrada o vetor de inteiros

//     d) Função selection_sort, para ordenar um vetor de inteiros utilizando o algoritmo
// Selection Sort, tendo como parâmetro de entrada o vetor de valores inteiros

//     e) Função quick_sort, para ordenar um vetor de inteiros com o algoritmo Quick Sort,
// recursivo, tendo como parâmetros o vetor, posição inicial e posição final

//     f) Função particionamento, de apoio a quick_sort, tendo como parâmetros o vetor,
// posição inicial, posição final e valor do pivot