// Declarar myCharts como un array fuera de la función
let myCharts = [];

// Función para inicializar los gráficos
function initializeCharts() {
    const ctx1 = document.getElementById('myChart1');
    const ctx2 = document.getElementById('myChart2');
    const ctx3 = document.getElementById('myChart3');
    const ctx4 = document.getElementById('myChart4');
//Ingresos por mes
    const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Setiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    const ingresos = [8150, 52652, 9241, 13025, 5215, 30155, 13641, 60548, 9653, 11354, 49847, 27853];
//porcentaje de compras por internet o de manera presencial
    const venta=['Presencial %','Virtual %'];
    const porcentaje=[62,38];
//ingresos por dia
    const dias=['Lunes','Martes','Miercoles','Jueves','Viernes','Sabados','Domingo'];
    const ventasDias=[350,310,220,170,130,150,234];
//ingresos por año
    const años = ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023'];
    const ventAño=[23600,233650,455200,532011,1300025,845120,365142,1745120,60001,45620,158100,535510,215335,1130510]
    // Verificar si los gráficos ya existen y destruirlos antes de crear nuevos
    myCharts.forEach(chart => {
        chart.destroy();
    });

    // Crear nuevos gráficos
    const chart1 = new Chart(ctx1, {
        type: 'bar',
        data: {
            labels: meses,
            datasets: [{
                label: 'Ingresos',
                data: ingresos,
                backgroundColor: [
                  'rgba(144, 238, 144, 0.2)',  // Verde claro
                  'rgba(34, 139, 34, 0.2)'    // Verde oscuro
                ],
                borderColor: [
                  'rgba(144, 238, 144, 1)',   // Borde verde claro
                  'rgba(34, 139, 34, 1)'      // Borde verde oscuro
                ],
                borderWidth: 1.5
            }]
        }
    });

    const chart2 = new Chart(ctx2, {
        type: 'pie',
        data: {
            labels: venta,
            datasets: [{
                label: 'ventas',
                data: porcentaje,
                backgroundColor: [
                  'rgba(144, 238, 144, 0.2)',  // Verde claro
                  'rgba(34, 139, 34, 0.2)'    // Verde oscuro
                ],
                borderColor: [
                  'rgba(144, 238, 144, 1)',   // Borde verde claro
                  'rgba(34, 139, 34, 1)'      // Borde verde oscuro
                ],
                borderWidth: 1.5
            }]
        }
    });
    const chart3 = new Chart(ctx3, {
      type: 'bar',
      data: {
          labels: dias,
          datasets: [{
              label: 'ventas',
              data: ventasDias,
              backgroundColor: [
                'rgba(144, 238, 144, 0.2)',  // Verde claro
                'rgba(34, 139, 34, 0.2)'    // Verde oscuro
              ],
              borderColor: [
                'rgba(144, 238, 144, 1)',   // Borde verde claro
                'rgba(34, 139, 34, 1)'      // Borde verde oscuro
              ],
              borderWidth: 1.5
          }]
      }
  });
  const chart4 = new Chart(ctx4, {
    type: 'line',
    data: {
        labels: años,
        datasets: [{
            label: 'ventas',
            data: ventAño,
            backgroundColor: [
              'rgba(144, 238, 144, 0.2)',  // Verde claro
              'rgba(34, 139, 34, 0.2)'    // Verde oscuro
            ],
            borderColor: [
              'rgba(144, 238, 144, 1)',   // Borde verde claro
              'rgba(34, 139, 34, 1)'      // Borde verde oscuro
            ],
            borderWidth: 1.5
        }]
    }
});
    
    // Almacenar los gráficos en el array
    myCharts = [chart1, chart2,chart3,chart4];
}

// Llamar a la función para inicializar los gráficos
initializeCharts();
