document.addEventListener('DOMContentLoaded', function () {
  const ctx = document.getElementById('chartSondas2024').getContext('2d');

  new Chart(ctx, {
    type: 'pie',
    data: {
      labels: [
        'NS-33/NORBE-IX',
        'NS-47/WEST TELLUS',
        'NS-41/ODN1',
        'NS-32/NORBE VIII',
        'NS-39/DEEPWATER MYCONOS',
        'NS-54/DS-4 Valaris'
      ],
      datasets: [{
        data: [6, 2, 1, 1, 1, 1],
        backgroundColor: [
          '#4e73df', '#1cc88a', '#36b9cc', '#f6c23e', '#e74a3b', '#858796'
        ]
      }]
    },
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: 'Distribuição de Embarques por Sonda (2024)',
          color: '#ffffff',
          font: { size: 18 }
        },
        legend: {
          position: 'right',
          labels: { color: '#ffffff' }
        }
      }
    }
  });
});

