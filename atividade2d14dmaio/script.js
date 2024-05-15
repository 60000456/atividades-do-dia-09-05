function calcularTroco() {
    var valorPago = parseFloat(document.getElementById('valorPago').value);
    var precoProduto = parseFloat(document.getElementById('precoProduto').value);
    var troco = valorPago - precoProduto;
    
    if (troco < 0) {
        document.getElementById('troco').innerText = "Valor insuficiente. Faltam R$ " + (-troco).toFixed(2);
    } else if (troco === 0) {
        document.getElementById('troco').innerText = "Não há troco a ser dado.";
    } else {
        document.getElementById('troco').innerText = "Troco a ser dado: R$ " + troco.toFixed(2);
    }
}