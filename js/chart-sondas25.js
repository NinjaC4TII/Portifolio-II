
const ctxSondas2025 = document.getElementById('chartSondas2025').getContext('2d');
new Chart(ctxSondas2025, {
    type: 'pie',
    data: {
        labels: [
            'NS-54/DS-4 Valaris',
            'NS-57/Transocean',
            'NS-59/Noble',
            'NS62/Seadrill West Auriga',
            'NS-47/WEST TELLUS'
        ],
        datasets: [{
            data: [2, 2, 2, 1, 1],
            backgroundColor: ['#4dc9f6', '#f67019', '#f53794', '#537bc4', '#acc236']
        }]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Distribuição de Embarques por Sonda (2025)'
            }
        }
    }
});
