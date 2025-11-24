const peso = 95;
const altura = 1.78;

const imc = peso / (altura * altura);

console.log("IMC:", imc.toFixed(2));

if (imc < 18.5) {
  console.log("Condição: Abaixo do peso");
} else if (imc >= 18.5 && imc < 25) {
  console.log("Condição: Peso normal");
} else if (imc >= 25 && imc < 30) {
  console.log("Condição: Acima do peso");
} else if (imc >= 30 && imc < 40) {
  console.log("Condição: Obeso");
} else {
  console.log("Condição: Obesidade Grave");
}
