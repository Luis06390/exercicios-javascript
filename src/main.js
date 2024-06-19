// const nome = 'Luis miguel';
// console.log(nome);

// let idade = 12;
// console.log(O ${nome} tem ${idade} anos);
// idade += 100000000000000;
// console.log(O ${nome} tem ${idade} anos);
// const idade = 100;
// if (idade >= 18) {
//     console.log('pode dirigir');
// } else {
//     console.log('não pode dirigir');
// }

// const idade = 12;
// if (idade <= 12) {
//     console.log('pode ter a doença');
// } else {
//     console.log('não é possível ter a doença');
// }

// const numero = 10;
// const numero1 = 12;
// if (numero > numero1) {
//     console.log(numero);
// } else {
//     console.log(numero1);
// }

// const numero = 10;
// const numero1 = 10;
// const numero2 = 10;
// if (numero2 > numero1 && numero2 > numero) {
//     console.log(numero2);
// } else if (numero > numero2 && numero > numero1) {
//     console.log(numero);
// } else {
//     console.log(numero1);
// }

// const angulo = 45;
// const angulo1 = 45;
// const angulo2 = 45;
// if (angulo + angulo1 + angulo2 === 180) {
//     console.log('a soma dos ângulos formam um triangulo');
// } else {
//     console.log('a soma dos ângulos nao formam um triangulo');
// }

// const peca = 'rei';
// if (peca === 'peão') {
//     console.log('anda verticalmente');
// } else if (peca === 'dama') {
//     console.log('melhor q o rei pq ela é mais braba ainda pq ela manda nele');
// } else if (peca === 'torre') {
//     console.log('em linha reta');
// } else if (peca === 'rei') {
//     console.log('qualquer lugar pq ele é brabo');
// } else if (peca === 'cavalo') {
//     console.log('anda em L');
// } else if (peca === 'bispo') {
//     console.log('ele anda nas diagonais pq o papa mandou');
// }

// const numero = 11;
// if (numero % 2 === 1) {
//     console.log(o ${numero} é impar);
// } else {
//     console.log(o ${numero} é par);
// }

// const numero = 10;
// const numero1 = 1;
// if (numero % 2 === 0 || numero1 % 2 === 0) {
//     console.log('existe um par entre nós');
// } else {
//     console.log('não há nenhum par entre nós');
// }

// const numero = 1;
// const numero1 = 2;
// const numero2 = 2;
// if (numero % 2 === 0 || numero1 % 2 === 0 || numero2 % 2 === 0) {
//     console.log('existe um par entre nós');
// } else {
//     console.log('não há nenhum par entre nós');
// }

// const frutas = ['morango', 'maçã', 'jabuticaba', 'uva', 'pitaia', 'lischia'];
// console.log(frutas[0][0]);

// for (let index = 0; index < frutas.length; index += 1) {
//     console.log(frutas[index][frutas[index].length - 1]);
// }

// const num = 42;
// for (let index = 0; index < num; index += 1) {
//     if (index === 5) {
//         break;
//     }
//     console.log(index);
// }
// 'CHEGAMOS NAS 100 LINHAS DE CÓDIGOS SOMOS BRABOS DMS!!!!!!!!!'

// const num = 126;
// let primo = true;
// for (let index = 2; index < num; index += 1) {
//     if (num % index === 0) {
//         primo = false;
//         break;
//     }
// }

// if (primo) {
//     console.log(o número ${num} é primo);
// } else {
//     console.log(o número ${num} não é primo);
// }
// const nome = ['luis', 'pedro', 'miguel'];
// for (let index = 0; nome.length > index; index += 1) {
//     console.log(nome[index]);-
// }

// let salario = 4300;
// if (salario <= 1556.94) {
//   salario -= (8 * salario) / 100;
// } else if (salario >= 1556.95 && salario <= 2594.92) {
//   salario -= (9 * salario) / 100;
// } else if (salario >= 2594.93 && salario <= 5189.82) {
//   salario -= (11 * salario) / 100;
// } else if (salario > 5189.82) {
//   salario -= 570.88;
// }

// if (salario <= 1903.98) {
//   salario -= 0;
// } else if (salario >= 1903.99 && salario <= 2826.65) {
//   salario -= (7.5 * salario) / 100 - 142.8;
// } else if (salario >= 2826.66 && salario <= 3751.05) {
//   salario -= (15 * salario) / 100 - 354.8;
// } else if (salario >= 3751.06 && salario <= 4664.68) {
//   salario -= (22.5 * salario) / 100 - 636.13;
// } else if (salario > 4664.68) {
//   salario -= (27.5 * salario) / 100 - 869.36;
// }
// console.log(salario)

// const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// for (let index = 0; index < numbers.length; index += 2) {
//   console.log(numbers[index]);
// } 
// for percorre o indice 0 dps verifica se o indice percorrido é menor que o comprimento d lista e mostra no 
// terminal (console.log), caso 
// for menor ele percorre oproximo indice da lista  
// let soma = 0;
// for (let index = 0; index < numbers.length; index += 1) {
//     soma += numbers[index];
// }
// console.log(soma);

// let soma = 0;
// for (let index = 0; index < numbers.length; index += 1) {
//     soma += numbers[index];
// }
// const media = soma / numbers.length;
// console.log(media);
// if (media > 20) {
//     console.log('O valor da média aritmética é maior que 20');
// } else {
//     console.log('o valor da média aritmética é menor ou igual que 20');
// }
// let maior = 0;
// for (let index = 0; index < numbers.length; index += 1) {
//     if (numbers[index] > maior) {
//         maior = numbers[index];       
//     } 
// }
// console.log(maior);
// let impar = 0;
// for (let index = 0; index < numbers.length; index += 1) {
//     impar += numbers[index] % 2;
// }
// console.log(impar);

// let num = 1;
// const fatorial = 5;
// for (let index = 0; index < fatorial; index += 1) {
//     num *= fatorial - index;
// }
// console.log(num);

// const word = 'paralelepípedo';
// const chars = word.split('');
// chars.reverse();
// const juntar = chars.join('');
// console.log(juntar);

// const num = 10;
// let quadrado = '';

// for (let index = 0; index < num; index += 1) {
// quadrado += '*';
// }
// for (let index = 0; index < num; index += 1) {
// console.log(quadrado);
// }

// const num = 7;
// let quadrado = '';
// for (let index = 0; index < num; index += 1) {
// quadrado += '*';
// console.log(quadrado);
// }

// const num = 10000;
// 
// for (let index = 1; index <= num; index += 1) {
    // let quadrado = '';
    // 
    // for (let indice = 0; indice < num - index; indice += 1) { 
        // quadrado += ' ';
    // }
    // 
    // for (let indice = 0; indice < index; indice += 1) {
        // quadrado += '*';
    // }
    // console.log(quadrado);
// }