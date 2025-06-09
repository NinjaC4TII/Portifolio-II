
const ctxTiposTrabalho2025 = document.getElementById('chartTiposTrabalho2025').getContext('2d');
new Chart(ctxTiposTrabalho2025, {
    type: 'bar',
    data: {
        labels: ['CONFIG', 'DRLG', 'CONN', 'BKRM', 'CIRC', 'INRCD', 'RU', 'STIH', 'STOOH', 'FMCD'],
        datasets: [{
            label: 'Trabalhos Realizados',
            data: [2, 4, 4, 2, 4, 1, 2, 3, 3, 1],
            backgroundColor: '#36a2eb'
        }]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Distribuição dos Tipos de Trabalho (2025)'
            }
        }
    }
});
