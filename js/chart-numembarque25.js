
const ctxNumEmbarques2025 = document.getElementById('chartEmbarques2025').getContext('2d');
new Chart(ctxNumEmbarques2025, {
    type: 'bar',
    data: {
        labels: ['2022', '2023', '2024', '2025'],
        datasets: [{
            label: 'Número de Embarques',
            data: [5, 12, 12, 8],
            backgroundColor: ['#36a2eb', '#ff6384', '#ffcd56', '#4bc0c0']
        }]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Comparação de Embarques (2022–2025)'
            }
        }
    }
});
