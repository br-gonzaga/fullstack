const precoEtiqueta = 100;
const formaPagamento = 3;
// 1 - Débito
// 2 - Dinheiro / PIX
// 3 - 2x
// 4 - Acima de 2x

if (formaPagamento === 1) {
  const valorFinal = precoEtiqueta * 0.9;
  console.log("Pagamento no Débito. Valor final:", valorFinal);
} else if (formaPagamento === 2) {
  const valorFinal = precoEtiqueta * 0.85;
  console.log("Pagamento no Dinheiro/Pix. Valor final:", valorFinal);
} else if (formaPagamento === 3) {
  console.log("Pagamento em 2x. Valor final:", precoEtiqueta);
} else if (formaPagamento === 4) {
  const valorFinal = precoEtiqueta * 1.1;
  console.log("Pagamento acima de 2x. Valor final:", valorFinal);
} else {
  console.log("Forma de pagamento inválida.");
}
