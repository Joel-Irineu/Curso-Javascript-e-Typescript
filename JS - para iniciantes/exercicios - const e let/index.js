/**
 * Luiz Otavio Miranda tem 30 anos, pesa 84 kg
 * tem 1.8 de altura e seu IMC é de 25.925925925925924
 */

const nome = 'Joel';
const segundoNome = 'Irineu';
const idade = 21;
const peso = 65;
const alturaEmM = 1.55;
let imc; // peso / (altura * altura)
let anoNasmiento;

imc = peso / (alturaEmM * alturaEmM);

console.log(`${nome} ${segundoNome} tem ${idade} anos, pesa ${peso} kg
tem ${alturaEmM} de altura e seu IMC é de ${imc}`)

anoNasmiento = 2022 - idade;
console.log(nome, 'nasceu em', anoNasmiento)