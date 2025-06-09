
const ctxServicos2025 = document.getElementById('chartServicos2025').getContext('2d');
new Chart(ctxServicos2025, {
    type: 'bar',
    data: {
        labels: ['TSS/MPD'],
        datasets: [{
            label: 'Serviços 2025',
            data: [8],
            backgroundColor: ['#ff9f40']
        }]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Serviços Realizados em 2025'
            }
        }
    }
});
