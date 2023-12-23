// Inicialize o gráfico de corrente
var correnteChart = new Chart(document.getElementById('correnteChart').getContext('2d'), {
    type: 'line',
    data: {
        datasets: [{
            label: 'Corrente',
            data: [],
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderWidth: 4,
            pointRadius: 6,
            pointBackgroundColor: 'rgba(75, 192, 192, 1)',
            pointBorderColor: 'rgba(75, 192, 192, 1)',
            fill: true,
        }]
    },
    options: {
        scales: {
            x: {
                type: 'linear',
                position: 'bottom',
                grid: {
                    color: 'rgba(0, 0, 0, 0.1)',
                },
                title: {
                    display: false
                },
                ticks: {
                    display: false // Oculta os números do eixo x
                }
            },
            y: {
                type: 'linear',
                position: 'left',
                min: 0,
                max: 2,
                grid: {
                    color: 'rgba(0, 0, 0, 0.1)',
                },
                title: {
                    display: false
                }
            }
        },
        elements: {
            line: {
                tension: 0.4,
            }
        },
        plugins: {
            legend: {
                display: false
            }
        }
    }
});

function updateCorrenteFrequencia() {
    var correnteReal = (Math.random() * 2.0).toFixed(2);

    // Adicione os novos dados ao gráfico
    correnteChart.data.datasets[0].data.push({
        x: Date.now(),
        y: parseFloat(correnteReal)
    });

    // Limite o número de pontos no gráfico para manter um histórico
    const maxDataPoints = 10;
    if (correnteChart.data.datasets[0].data.length > maxDataPoints) {
        correnteChart.data.datasets[0].data.shift();
    }

    // Atualize o gráfico
    correnteChart.update();

    // Atualize o elemento HTML
    document.getElementById('correnteValue').textContent = correnteReal + " A";
}

// Atualize os valores a cada segundo
setInterval(updateCorrenteFrequencia, 1000);
