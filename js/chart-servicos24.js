document.addEventListener('DOMContentLoaded', function () {
  const ctx = document.getElementById('chartServicos2024').getContext('2d');

  const labels = ['TSS/MPD', 'TSS/SWT', 'TSS/HCT-CI'];
  const dados = [10, 1, 1];

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        label: 'Serviços Realizados em 2024',
        data: dados,
        backgroundColor: ['#36a2eb', '#ff6384', '#ffcd56'],
        borderRadius: 8
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: false },
        title: {
          display: true,
          text: 'Distribuição dos Trabalhos Realizados em 2024',
          color: '#ffffff',
          font: { size: 18 }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: { color: '#ffffff' },
          grid: { color: 'rgba(255,255,255,0.1)' }
        },
        x: {
          ticks: { color: '#ffffff' },
          grid: { color: 'rgba(255,255,255,0.1)' }
        }
      }
    }
  });
});

