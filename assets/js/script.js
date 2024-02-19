document.getElementById('btn-calcular').addEventListener('click', function() {
    try {
        // Captura os valores dos campos de entrada
        const value = parseFloat(document.getElementById('value').value);
        const lucro = parseFloat(document.getElementById('lucro').value);

        // Verifica se os valores são válidos (números)
        if (isNaN(value) || isNaN(lucro)) {
            throw new Error('Por favor, insira valores numéricos válidos.');
        } else if (value < 0 || lucro<0) {
            verificarNumero();
            return;
            
        }

        // Realiza o cálculo
        const total = value + (value * lucro / 100);

        // Exibe o resultado
        document.getElementById('total').innerHTML = ("R$" + total.toFixed(2).replace(".", ","));
    } catch (error) {
        // Captura e trata a exceção
        alert('Erro: ' + error.message);
    }
});

document.addEventListener('keypress', function(event) {
    // Verifica se a tecla pressionada é a tecla "Enter" (código 13)
    if (event.key === 'Enter') {
        // Simula um clique no botão "Calcular" quando a tecla "Enter" é pressionada
        document.getElementById('btn-calcular').click();
    }
});

// Seletor para o botão de limpar
let btnLimpar = document.getElementById('btn-limpar');

// Event listener para o clique no botão de limpar
btnLimpar.addEventListener('click', function() {
    // Limpa os valores dos campos de entrada
    document.getElementById('value').value = '';
    document.getElementById('lucro').value = '';

    // Limpa o resultado
    document.getElementById('total').textContent = 'R$ 0,00';

});

function verificarNumero() {
    const value = parseFloat(document.getElementById("value").value);
    const lucro = parseFloat(document.getElementById("lucro").value);
    
    if (value < 0 || lucro < 0 ) {
      alert("Por favor, insira números positivos.");
      document.getElementById("value").value = "";
      document.getElementById("lucro").value = "";
      document.getElementById('total').textContent = 'R$ 0,00';
    }
}




