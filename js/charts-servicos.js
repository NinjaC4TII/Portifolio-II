
const ctxServicos = document.getElementById('chartServicos').getContext('2d');
new Chart(ctxServicos, {
  type: 'bar',
  data: {
    labels: ['TSS/MPD', 'TSS/SWT'],
    datasets: [{
      label: 'Serviços em 2023',
      data: [6, 6],
      backgroundColor: ['#3f72af', '#ff9a00']
    }]
  },
  options: {
    responsive: true,
    animation: {
      duration: 1500,
      easing: 'easeOutQuart'
    },
    plugins: {
      title: {
        display: true,
        text: 'Tipos de Serviço (TSS/MPD e TSS/SWT) - 2023'
      }
    }
  }
});
