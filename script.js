function calcularImpostos() {
    const valorVenda = parseFloat(document.getElementById('valorVenda').value);
    const itens = document.getElementById('itens').value;
    const irpf = parseFloat(document.getElementById('irpf').value) / 100;
    const pis = parseFloat(document.getElementById('pis').value) / 100;
    const cofins = parseFloat(document.getElementById('cofins').value) / 100;
    const inss = parseFloat(document.getElementById('inss').value) / 100;
    const issqn = parseFloat(document.getElementById('issqn').value) / 100;

    const valorIRPF = valorVenda * irpf;
    const valorPIS = valorVenda * pis;
    const valorCOFINS = valorVenda * cofins;
    const valorINSS = valorVenda * inss;
    const valorISSQN = valorVenda * issqn;

    const totalImpostos = valorIRPF + valorPIS + valorCOFINS + valorINSS + valorISSQN;

    const notaFiscal = `
        <p>Itens Vendidos: ${itens}</p>
        <p>Valor da Venda: R$${valorVenda.toFixed(2)}</p>
        <p>Imposto de Renda (IRPF): R$${valorIRPF.toFixed(2)}</p>
        <p>PIS: R$${valorPIS.toFixed(2)}</p>
        <p>COFINS: R$${valorCOFINS.toFixed(2)}</p>
        <p>INSS: R$${valorINSS.toFixed(2)}</p>
        <p>ISSQN: R$${valorISSQN.toFixed(2)}</p>
        <p>Total de Impostos: R$${totalImpostos.toFixed(2)}</p>
        <p>Valor Líquido: R$${(valorVenda - totalImpostos).toFixed(2)}</p>
    `;

    document.getElementById('notaFiscal').innerHTML = notaFiscal;
}
