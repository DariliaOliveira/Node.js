function calculadoraMedia(){
const prompt = require("prompt-sync")();
let nota1 = Number.parseFloat(prompt(console.log("Insira a 1ª nota: ")));
let nota2 = Number.parseFloat(prompt(console.log("Insira a 2ª nota: ")));
let nota3 = Number.parseFloat(prompt(console.log("Insira a 3ª nota: ")));

let media = (nota1+nota2+nota3)/3;

console.log(`Sua média é: ${media.toFixed(2)}`);

}
calculadoraMedia();
