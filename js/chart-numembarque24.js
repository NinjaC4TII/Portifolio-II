// chart-numembarque24.js
const ctxEmbarques2024 = document.getElementById('chartEmbarques2024').getContext('2d');

const dataEmbarques = {
  labels: ['2022', '2023', '2024'],
  datasets: [{
    label: 'Embarques por ano',
    data: [5, 12, 12],
    backgroundColor: ['#00e0ff', '#ff0077', '#ffa500'],
    borderWidth: 1,
    borderRadius: 6
  }]
};

const configEmbarques = {
  type: 'bar',
  data: dataEmbarques,
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            const index = context.dataIndex;
            const values = context.dataset.data;
            if (index === 1) {
              const growth = ((values[1] - values[0]) / values[0]) * 100;
              return ` ${values[1]} (+${growth.toFixed(1)}%)`;
            } else if (index === 2) {
              const growth = ((values[2] - values[1]) / values[1]) * 100;
              return ` ${values[2]} (+${growth.toFixed(1)}%)`;
            } else {
              return ` ${values[index]}`;
            }
          }
        }
      },
      title: {
        display: true,
        text: 'Comparativo de Embarques 2022-2024'
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        stepSize: 1
      }
    },
    animation: {
      duration: 1000,
      easing: 'easeOutBounce'
    }
  }
};

new Chart(ctxEmbarques2024, configEmbarques);

