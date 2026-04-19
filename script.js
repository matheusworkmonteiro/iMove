const nomesBotoes = {
    1: "CABECEIRA ▲", 2: "CABECEIRA ▼",
    3: "PÉS ▲", 4: "PÉS ▼",
    5: "MEMÓRIA 1", 6: "MEMÓRIA 2"
};

function configurarApp(vias, nome, icone) {
    document.getElementById('tela-selecao').style.display = 'none';
    document.getElementById('tela-controle').style.display = 'flex';
    document.getElementById('nome-dispositivo').innerText = nome;
    document.getElementById('status-icon').innerText = icone;
    const grade = document.getElementById('grade-botoes');
    grade.innerHTML = "";
    for (let i = 1; i <= vias; i++) {
        const btn = document.createElement('button');
        btn.className = 'btn-comando';
        btn.innerText = nomesBotoes[i] || `MOV ${i}`;
        btn.onmousedown = () => statusOperacao(i, true);
        btn.onmouseup = () => statusOperacao(i, false);
        grade.appendChild(btn);
    }
}

function voltarParaSelecao() {
    document.getElementById('tela-selecao').style.display = 'flex';
    document.getElementById('tela-controle').style.display = 'none';
}

function statusOperacao(id, ativo) {
    const status = document.getElementById('status-conexao');
    const barra = document.getElementById('barra-progresso');
    if (ativo) {
        status.innerText = `● Movimentando Canal ${id}...`;
        status.style.color = "#ffcc00";
        barra.style.width = (id * 15) + "%"; 
    } else {
        status.innerText = "● Sistema Pronto";
        status.style.color = "#00ffcc";
    }
}