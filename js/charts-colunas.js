
const ctxColunas = document.getElementById('chartColunas').getContext('2d');
new Chart(ctxColunas, {
  type: 'bar',
  data: {
    labels: ['MPD', 'WT', 'WORKO', 'RU', 'FMCD', 'FNGP-O', 'DRLG', 'PMCD', 'CMPLT', 'TH', 'ABDP', 'ABDT'],
    datasets: [{
      label: 'Tipos de Trabalho em 2023',
      data: [6, 6, 5, 3, 1, 1, 1, 1, 1, 1, 1, 1],
      backgroundColor: '#00e0ff'
    }]
  },
  options: {
    responsive: true,
    animation: {
      duration: 1800,
      easing: 'easeOutCirc'
    },
    plugins: {
      title: {
        display: true,
        text: 'Atividades Realizadas - 2023'
      }
    }
  }
});
