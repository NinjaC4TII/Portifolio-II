const ctxSondas = document.getElementById('chartSondas').getContext('2d');

new Chart(ctxSondas, {
  type: 'pie',
  data: {
    labels: [
      'NS-54/DS-4 Valaris',
      'NS-33/NORBE-IX',
      'NS-41/ODN1',
      'SS-75/OCEAN COURAGE',
      'NS-47/WEST TELLUS',
      'NS-39/DEEPWATER MYCONOS',
      'NS-29/CAROLINA',
      'NS-52/SIEM HELIX 2',
      'SS-79/LONE STAR',
      'SS-73/GOLD STAR'
    ],
    datasets: [{
      label: 'Embarques por Sonda - 2023',
      data: [4, 4, 2, 2, 2, 1, 1, 1, 1, 1],
      backgroundColor: [
        '#00e0ff', '#ff00e0', '#ffae00', '#00ff80', '#d000ff',
        '#ff5e5e', '#c0ff00', '#00ffd0', '#ff00a0', '#8a2be2'
      ],
      borderColor: '#111',
      borderWidth: 1
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          color: '#ffffff'
        }
      },
      title: {
        display: true,
        text: 'Distribuição de Embarques por Sonda em 2023',
        color: '#00e0ff',
        font: {
          size: 16
        }
      }
    },
    animation: {
      animateScale: true,
      animateRotate: true
    }
  }
});

