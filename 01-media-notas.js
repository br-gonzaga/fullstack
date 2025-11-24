const nota1 = 7;
const nota2 = 8;
const nota3 = 6;

const media = (nota1 + nota2 + nota3) / 3;

console.log("Média:", media.toFixed(2));

if (media < 5) {
  console.log("Classificação: Reprovado");
} else if (media >= 5 && media <= 7) {
  console.log("Classificação: Recuperação");
} else {
  console.log("Classificação: Aprovado");
}
