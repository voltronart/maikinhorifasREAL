function alterarQtd(valor) {
    let input = document.getElementById('qtd');
    let atual = parseInt(input.value);
    if (atual + valor >= 1) {
        input.value = atual + valor;
    }
}

function comprar() {
    let qtd = document.getElementById('qtd').value;
    // Redireciona para a página de cadastro passando a quantidade na URL
    window.location.href = `cadastro.html?qtd=${qtd}`;
}
const express = require('express');
const app = express();
app.use(express.json());

// Rota para criar reserva de cotas
app.post('/reservar', async (req, res) => {
    const { nome, whatsapp, qtd, rifa_id } = req.body;

    // 1. Salva o usuário no banco
    // 2. Verifica se ainda existem cotas disponíveis
    // 3. Chama a API do Banco (Ex: Mercado Pago) para gerar o PIX
    const pixCopiaCola = await gerarPixMercadoPago(qtd * 0.50);

    // 4. Retorna para o Front-end os dados do pagamento
    res.json({
        status: "sucesso",
        qrcode: pixCopiaCola.qr_code,
        ticket_id: "123456"
    });
});

app.listen(3000, () => console.log("Servidor MAIKINHO RIFAS rodando na porta 3000"));