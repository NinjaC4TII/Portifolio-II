document.addEventListener('DOMContentLoaded', function () {
  const ctx = document.getElementById('chartTiposTrabalho2024').getContext('2d');

  const labels = [
    'DRLG', 'STOOH', 'CONN', 'BKRM', 'PMCD', 'CIRC', 'CONFIG', 'STIH',
    'FNGP-O', 'FNGP-CC', 'REAM', 'CMPLT', 'MNT', 'POS-JOB', 'CEM',
    'WORKO', 'DYNLC', 'PRE-JOB'
  ];

  const data = [6, 5, 4, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        label: 'Tipos de Trabalho - 2024',
        data: data,
        backgroundColor: '#00bfff',
        borderRadius: 6
      }]
    },
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: 'Distribuição dos Tipos de Trabalho (2024)',
          color: '#ffffff',
          font: { size: 18 }
        },
        legend: {
          display: false
        }
      },
      scales: {
        x: {
          ticks: { color: '#ffffff' },
          grid: { color: 'rgba(255,255,255,0.1)' }
        },
        y: {
          beginAtZero: true,
          ticks: { color: '#ffffff' },
          grid: { color: 'rgba(255,255,255,0.1)' }
        }
      }
    }
  });
});

