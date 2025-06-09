
const ctxEmbarques = document.getElementById('chartEmbarques').getContext('2d');
new Chart(ctxEmbarques, {
  type: 'bar',
  data: {
    labels: [2022, 2023],
    datasets: [{
      label: 'Número de Embarques',
      data: [5, 12],
      backgroundColor: ['#00c0ff', '#ff006e'],
    }]
  },
  options: {
    responsive: true,
    animation: {
      duration: 2000,
      easing: 'easeOutBounce'
    },
    plugins: {
      title: {
        display: true,
        text: 'Comparação de Embarques 2022 vs 2023'
      }
    }
  }
});
