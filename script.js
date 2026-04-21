if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js')
            .then(reg => console.log('Service Worker registrado!'))
            .catch(err => console.log('Erro ao registrar Service Worker', err));
    });
}

const layoutBotoes = {
    1: "CABECEIRA ▲", 2: "CABECEIRA ▼",
    3: "PÉS ▲", 4: "PÉS ▼",
    5: "TRAVESSEIRO ▲", 6: "TRAVESSEIRO ▼",
    7: "MASSAGEM", 8: "ESTADO ZERO"
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
        btn.innerText = layoutBotoes[i] || `CANAL ${i}`;

        btn.onmousedown = btn.ontouchstart = (e) => { e.preventDefault(); acaoRelé(i, true); };
        btn.onmouseup = btn.ontouchend = () => acaoRelé(i, false);
        
        grade.appendChild(btn);
    }
}

function voltarParaSelecao() {
    document.getElementById('tela-selecao').style.display = 'flex';
    document.getElementById('tela-controle').style.display = 'none';
}

function acaoRelé(id, ligar) {
    const status = document.getElementById('status-conexao');
    const barra = document.getElementById('barra-progresso');
    const txtPos = document.getElementById('txt-posicao');

    if (ligar) {
        status.innerText = `● ENVIANDO COMANDO...`;
        status.style.color = "#ffcc00";
        let val = Math.floor(Math.random() * 20) + 40; 
        barra.style.width = val + "%";
        txtPos.innerText = val;
    } else {
        status.innerText = "● SISTEMA PRONTO";
        status.style.color = "#00ffcc";
    }
}