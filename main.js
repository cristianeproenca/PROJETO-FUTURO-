// === Tabs ===
const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");

botoes.forEach((botao, i) => {
    botao.onclick = () => {
        botoes.forEach(b => b.classList.remove("ativo"));
        textos.forEach(t => t.classList.remove("ativo"));

        botao.classList.add("ativo");
        textos[i].classList.add("ativo");
    }
});

// === Contadores ===
const contadores = document.querySelectorAll(".contador");
const tempos = [
    new Date("2026-12-18T00:00:00"),
    new Date("2026-12-31T00:00:00"),
    new Date("2026-12-19T00:00:00"),
    new Date("2027-02-20T00:00:00")
];

// Cores diferentes para cada contador
const cores = ["#FF6B6B", "#4ECDC4", "#FFD93D", "#6A4C93"];

function calculaTempo(tempoObjetivo) {
    const agora = new Date();
    let restante = Math.floor((tempoObjetivo - agora) / 1000);

    if (restante <= 0) return "PRAZO FINALIZADO";

    const dias = Math.floor(restante / 86400);
    restante %= 86400;
    const horas = Math.floor(restante / 3600);
    restante %= 3600;
    const minutos = Math.floor(restante / 60);
    const segundos = restante % 60;

    return `
        <div class="contador-digito">
            <p class="contador-digito-numero">${dias}</p>
            <p class="contador-digito-texto">dias</p>
        </div>
        <div class="contador-digito">
            <p class="contador-digito-numero">${horas}</p>
            <p class="contador-digito-texto">horas</p>
        </div>
        <div class="contador-digito">
            <p class="contador-digito-numero">${minutos}</p>
            <p class="contador-digito-texto">minutos</p>
        </div>
        <div class="contador-digito">
            <p class="contador-digito-numero">${segundos}</p>
            <p class="contador-digito-texto">seg</p>
        </div>
    `;
}

function atualizaCronometro(){
    contadores.forEach((c, i) => {
        c.innerHTML = calculaTempo(tempos[i]);
        c.style.backgroundColor = cores[i]; // aplica cor diferente
    });
}

// Começa os contadores
atualizaCronometro();
setInterval(atualizaCronometro, 1000);
