//Variaveis, tipagem fraca
const variavelImutavel = 'Nao pode ser mudada';
let varialveAlteravel = 'Pode ter os dados alterados';
var legada = 'Forma legada';

console.log(5 === "5") //false
console.log(5 == "5") //true


//Estruturas de dados
//Arrays
const numeros = [1, 2 , 3, 4];
numeros.push(5); //adiciona ao final
numeros.pop(); //remove o ultimo
numeros.unshift(5); //adiciona ao inicio
numeros.shift(); //remove o primeiro


//Objetos (representar objetos sem necessidade de instancia)
const usuario1 = [{
    id: 1,
    nome : "Joao",
    cargo : "Dev full-Stack",
    tecnologias: ["Java", "C", "SQL"]
}];

const usuario2 = {
    id: 2,
    nome : "Pedro",
    cargo : "Dev full-Stack",
    tecnologias: ["Java", "C", "SQL"]
};

console.log(usuario2.cargo);
console.log(usuario2["nome"]);

//Metodos funcionais de Array
const dobrados = numeros.map(x => x*2);   console.log(dobrados); 
const pares = numeros.filter(x => x % 2 === 0); console.log(pares); 
const soma = numeros.reduce((acumulador, atual) => acumulador + atual, 0); console.log(soma);
const dev = usuario1.find(u => u.id === 1); console.log(dev);

//Tipos de for
//Classico
const arr = [10, 20, 30];
for(let i = 0; i < arr.length;i++){
    console.log(arr[i]);
}

//Iterador de Valores
const frutas = ["batata", "maca", "pera"];
for(const fruta of frutas){
    console.log(fruta);
}

//Iterador de chaves
const usuario = {nome: "Joao", cargo: "Dev", teste: "teste"};
for(const chave in usuario){
    console.log(chave, usuario[chave]);
}

//For each
const nomes = ["Pedro", "Jair", "Maria"];
nomes.forEach((num, index )=>{
    console.log(`${index}: ${num}`);
});