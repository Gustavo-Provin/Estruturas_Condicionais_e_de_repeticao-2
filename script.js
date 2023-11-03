//1. Crie uma variável para ler a idade de um motorista. Caso o
//motorista tenha idade maior ou igual a 18 anos imprime no console
//“Pode dirigir”, caso contrário imprima “Não pode dirigir”.

/*let idade = Number(prompt("Qual sua idade?"))

if (idade >= 18) {
    console.log("Pode dirigir")
} if (idade < 18) {
    console.log("Não pode dirigir")
}*/


//2. Para o mesmo exercício acima insira mais uma variável a
//condicional, além de saber se o motorista tem 18 anos ou mais,
//temos que saber também se ele é habilitado para dirigir. Caso ele
//tenha idade maior ou igual a 18 anos e possua habilitação, insira no
//html “Pode dirigir” caso contrário imprima “Não pode dirigir”.

/*const idade2 = Number(prompt("Informe a idade do motorista: "))
const habilitacao = prompt("Possui habilitação? [sim/não]: ")

if (idade2 >= 18 && habilitacao === "sim") {
    document.write(`O motorista tem ${idade2} e possuí habilitação, portanto pode dirigir!`)
} else if (idade2 < 18) {
    document.write(`O motorista tem ${idade2}, portanto NÃO pode dirigir!`)
} else if (habilitacao === 'não') {
    document.write('O motorista não possuí habilitação, portanto NÃO pode dirigir!')
} else {
    document.write('Informações inválidas!')
}*/


//3. Utilizando o IF, ELSE, ELSE IF crie uma estrutura para receber um
//número de 1 a 7 e imprimir no console o dia da Semana. Para este
//exercício assumimos que o dia 1 é Domingo, dia 2 é segunda e assim
//por diante. Caso o número recebido não esteja neste intervalo
//imprimir “Dia não reconhecido”.

/*let numSemana = Number(prompt("Digite um valor entre 1 e 7"))

if (numSemana == 1) {
    console.log('Domingo')
} else if(numSemana == 2) {
    console.log('Segunda-feira')
} else if(numSemana == 3) {
    console.log('Terça-feira')
} else if(numSemana == 4) {
    console.log('Quarta-feira')
} else if(numSemana == 5) {
    console.log('Quinta-feira')
} else if(numSemana == 6) {
    console.log('Sexta-feira')
} else if(numSemana == 7) {
    console.log('Sábado-feira')
}*/

//4. Reescreva o exercício 3, utilizando apenas o SWITCH.

/*let numSemana = Number(prompt("Digite um valor entre 1 e 7"))

switch (numSemana) {
    case 1:
        console.log('Domingo')
        break;

    case 2:
        console.log('Segunda-feira')
        break;    


    case 3:
        console.log('Terça-feira')
        break;
        
    case 4:
        console.log('Quarta-feira')
        break;
        
    case 5:
        console.log('Quinta-feira')
        break;
        
    case 6:
        console.log('Sexta-feira')
        break;
        
    case 7:
        console.log('Sábado')
        break;    
    default:
        console.log('Valor inválido!')
        break;
}*/

//5. Utilizando FOR, percorra os números de 1 a 10 e imprima no console
//os números pares.

/*for (let numero = 1; numero <= 10; numero++) {
    if (numero % 2 === 0) {
        console.log(numero)
    }
}*/

//6. Insira no html 30 ( trinta ) números ímpares.

/*let contador = 0;
let numero = 1;

while (contador < 30) {
    if (numero % 2 !== 0) {
        console.log(numero);
        contador++;
    }
    numero++;
}*/

//7. Utilizando do...while, imprima na tela a soma de todos os números
//entre 10 e 100.

/*let numero = 10;
let soma = 0;

do {
    soma += numero;
    numero++;
} while (numero <= 100);

console.log("A soma dos números de 10 a 100 é: " + soma);*/

//8. Crie uma variável para armazenar o salário do usuário e atribua um
//valor a essa variável. Crie a validação necessária:
//- Caso o salário seja MENOR que R$ 1.903,98, insira no html
//"ISENTO DE IR";
//- caso contrário insira "TRIBUTADO NO IR".

/*salario = parseFloat(prompt("Informe seu salário"))

if (salario < 1903.98) {
    document.write("Você está ISENTO DE IR");
} else {
    document.write("Você TRIBUTADO NO IR");
}*/

//9. Informe um valor a uma variável e imprima no console se o número
//é primo.

/*let numero = 9;
let ehPrimo = true;

if (numero <= 1) {
    ehPrimo = false;
} else {
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            ehPrimo = false;
            break;
        }
    }
}

if (ehPrimo) {
    console.log(numero + " é um número primo.");
} else {
    console.log(numero + " não é um número primo.");
}*/

//10. Tendo como entrada a altura e o sexo (codificado da seguinte
//forma: 1 para sexo feminino e 2 para sexo masculino) de uma
//pessoa, construa um programa que calcule e mostre seu peso ideal,
//utilizando as seguintes fórmulas:
//- para homens: (72.7 * Altura) – 58
//- para mulheres: (62.1 * Altura) – 44.7

/*const altura = 1.65;
const sexo = 1;

let pesoIdeal;

if (sexo === 1) {
    pesoIdeal = 62.1 * altura - 44.7;
    console.log("O peso ideal para uma mulher com altura de " + altura + "m é: " + pesoIdeal.toFixed(2) + "kg");
} else if (sexo === 2) { 
    pesoIdeal = 72.7 * altura - 58;
    console.log("O peso ideal para um homem com altura de " + altura + "m é: " + pesoIdeal.toFixed(2) + "kg");
} else {
    console.log("Código de sexo inválido. Use 1 para feminino e 2 para masculino.");
}*/

//11. Utilizando Switch, faça um programa que pergunte em que turno
//você estuda. Peça para digitar “M” para matutino ou “V” para
//vespertino ou “N” para noturno. Mostre um alerta com a mensagem
//“Bom dia!” ou “Boa tarde” ou “Boa Noite” ou “Valor inválido”,
//conforme o caso.

/*let turno = prompt("Qual é o seu turno? Digite 'M' para Matutino, 'V' para Vespertino ou 'N' para noturno")

switch (turno.toUpperCase()) {
    case 'M':
        document.write("Bom dia!")
        break;
    case 'V':
        document.write("Bom tarde!")
        break;
    case 'N':
        document.write("Bom noite!")
        break;
    default:
        document.write("Valor inválido")
        break;
}*/

//12. Para doar sangue é necessário ter entre 18 e 67 anos. Faça um
//programa que armazene a idade de uma pessoa e diga se ela pode
//doar sangue ou não. Use alguns dos operadores lógicos OU (||) e E
//(&&).

/*let idade = parseInt(prompt("Insira sua idade: "))

if (idade >= 18 && idade <= 67) {
    document.write("Pode doar sangue!")
} else {
    document.write("Não pode doar sangue.")
}*/

//13. Faça um algoritmo que armazene um número e imprima os
//números ímpares entre 1 e o número armazenado.

/*let numero = parseInt(prompt("Insira um número inteiro:"));

let impares = '';

document.write(`Números ímpares entre 1 e ${numero}:`);
for (let i = 1; i <= numero; i++) {
    if (i % 2 !== 0) {
        impares += i + ' ';
    }
}

document.write(impares);*/

//14. Leia um número, utilizando WHILE multiplique este número por 3
//enquanto a soma seja menor que 500 e no final mostre qual o
//último valor

/*let numero = parseInt(prompt("Insira um número:"));

let soma = numero; 
let multiplicador = 3; 

while (soma < 500) {
    numero *= multiplicador;
    soma = numero;
}

document.write("O último valor obtido é: " + numero);*/

//15. Crie um algoritmo que armazene três valores, para cada um dos
//lados de um triângulo: A, B e C. Verifique se os lados fornecidos
//formam realmente um triângulo. Se formar, deve mostrar no console
//o tipo de triângulo: isósceles, escaleno ou equilátero.
//a. Para verificar se os lados fornecidos formam um triângulo: A <
//B + C e B < A + C e C < A + B.
//b. Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou
//B=C);
//c. Triângulo escaleno: possui todos os lados diferentes (A<>B e
//B<>C e A<>C);
//d. Triângulo equilátero: possui todos os lados iguais (A=B e
//B=C);

/*let ladoA = parseInt(prompt("Insira o valor do lado A:"));
let ladoB = parseInt(prompt("Insira o valor do lado B:"));
let ladoC = parseInt(prompt("Insira o valor do lado C:"));

if (ladoA < ladoB + ladoC && ladoB < ladoA + ladoC && ladoC < ladoA + ladoB) {
    if (ladoA === ladoB && ladoB === ladoC) {
        document.write("É um triângulo equilátero.");
    } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
        document.write("É um triângulo isósceles.");
    } else {
        document.write("É um triângulo escaleno.");
    }
} else {
    document.write("Os valores fornecidos não formam um triângulo.");
}*/

//16. Escreva um algoritmo que armazene o ano atual e o ano de
//nascimento de uma pessoa. Escrever uma mensagem no console
//que diga se ela poderá ou não votar este ano (não é necessário
//considerar o mês em que a pessoa nasceu).

/*const anoAtual = new Date().getFullYear();

const anoNascimento = 2004; 

const idade = anoAtual - anoNascimento;

if (idade >= 16 && idade <= 67) {
    document.write("Você pode votar este ano.");
} else {
    document.write("Você não pode votar este ano.");
}*/

//17. Escreva um algoritmo que armazene o número total de eleitores de
//um município, o número de votos brancos, nulos e válidos. Calcular
//e escrever o percentual que cada um representa em relação ao
//total de eleitores. O algoritmo deve fazer uma validação para que as
//porcentagens dos votos armazenados (brancos, nulos e válidos)
//respeitem o limite do número total de eleitores, ou seja, garantir que
//a soma dos votos brancos, nulos e válidos não seja maior que o
//número total de eleitores.

/*const totalE =  100
const vB = 20
const vN = 10

const porcentagemTotal = ((100 - 30) / totalE) * 100
const porcVB = (vB / totalE) * 100
const porcVN = (vN / totalE) * 100

document.write(`</br></br>Pocentagem total dos votos ${porcentagemTotal}%, porcentagem de votos em branco ${vB}% porcentagem de votos nulos ${vN}%`)*/

//18. Uma loja de eletrodomésticos estabeleceu as seguintes
//modalidades de pagamento para a venda de suas mercadorias:
//Escreva um algoritmo que armazene o preço de tabela e o número
//de vezes em que o pagamento será feito. Calcule o valor de cada
//parcela e o preço total da compra e imprima no console.

/*let precoDeTabela = 2000; 
let numeroDeParcelas = 10; 

let precoTotal = 0; 
let valorParcela = 0; 

if (numeroDeParcelas === 1) {
    const desconto = precoDeTabela * 0.025;
    precoTotal = precoDeTabela - desconto;
    valorParcela = precoTotal;
} else if (numeroDeParcelas >= 2 && numeroDeParcelas <= 5) {
    precoTotal = precoDeTabela;
    valorParcela = precoTotal / numeroDeParcelas;
} else if (numeroDeParcelas >= 6 && numeroDeParcelas <= 10) {
    const juros = precoDeTabela * 0.06;
    precoTotal = precoDeTabela + juros;
    valorParcela = precoTotal / numeroDeParcelas;
} else if (numeroDeParcelas >= 11 && numeroDeParcelas <= 15) {
    const juros = precoDeTabela * 0.13;
    precoTotal = precoDeTabela + juros;
    valorParcela = precoTotal / numeroDeParcelas;
}

document.write("Valor de cada parcela: ", valorParcela); 
document.write("<br>"); 
document.write("Preço total da compra: ", precoTotal);*/