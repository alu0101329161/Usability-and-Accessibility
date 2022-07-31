document.addEventListener('DOMContentLoaded', function () {
  // Charts
  Highcharts.chart('container', {
    chart: {
      type: 'line'

    },
    accessibility: {
      point: {
        descriptionFormatter: function (p) {
          return p.series.name + ', ' + p.category + ', ' + p.y + 'Dólares';
        }
      }
    },
    title: {
      text: 'Valor promedio criptodivisas 2021'
    },
    subtitle: {
      text: 'Fuente: Bitcoin.com'
    },
    xAxis: {
      categories: [
        'Enero',
        'Febrero',
        'Marzo',
        'Abril',
        'Mayo',
        'Junio',
        'Julio',
        'Agosto',
        'Septiembre',
        'Octubre',
        'Noviembre',
        'Diciembre'
      ],
      crosshair: true
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Valor moneda (Miles de dolares)'
      }
    },
    tooltip: {
      headerFormat: '<span style="font-size: 10px">{point.key}: Valor promedio</span><br/>',
      valueSuffix: ' USD'
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0
      }
    },
    series: [{
      name: 'Bitcoin',
      data: [35700, 38300, 27100, 34000, 49500, 43000, 39000, 15000, 52500, 34200, 2000, 10400]
    }, {
      name: 'Ethereum',
      data: [4000, 2500, 2800, 3500, 4200, 4300, 4350, 4700, 4800, 2100, 700, 1500]
    }, {
      name: 'PolkaDot',
      data: [50, 7000, 9000, 5000, 1000, 500, 200, 20, 5000, 10000, 15000, 700]
    }, {
      name: 'Dogecoin',
      data: [40100, 53000, 59000, 62000, 25000, 500, 35000, 48000, 70000, 23000, 5, 20000]
    }]
  });


  var colors = Highcharts.getOptions().colors,
    categories = [
      'Bitcoin',
      'Ethereum',
      'Tether ',
      'Dogecoin',
      'Moon',
      'Cardano',
      'Otros'
    ],
    data = [
      {
        y: 62.74,
        color: colors[2],
        drilldown: {
          name: 'Bitcoin',
          categories: [
            'Bitcoin a Ethereum',
            'Bitcoin a Tether',
            'Bitcoin a Dogecoin',
            'Bitcoin a Moon',
            'Bitcoin a Cardano',
            'Bitcoin a Otros',
          ],
          data: [
            45,
            10,
            1,
            1,
            0.74,
            5,

          ]
        }
      },
      {
        y: 10.57,
        color: colors[1],
        drilldown: {
          name: 'Ethereum',
          categories: [
            'Ethereum a Bitcoin',
            'Ethereum a Tether',
            'Ethereum a Dogecoin',
            'Ethereum a Moon',
            'Ethereum a Cardano',
            'Ethereum a Otros',
          ],
          data: [
            5,
            3,
            0.5,
            0.5,
            0.5,
            1.07,

          ]
        }
      },
      {
        y: 7.23,
        color: colors[0],
        drilldown: {
          name: 'Tether',
          categories: [
            'Tether a Bitcoin',
            'Tether a Ethereum',
            'Tether a Dogecoin',
            'Tether a Moon',
            'Tether a Cardano',
            'Tether a Otros',
          ],
          data: [
            3,
            2,
            0.5,
            0.5,
            0.5,
            0.73,

          ]
        }
      },
      {
        y: 5.58,
        color: colors[3],
        drilldown: {
          name: 'Dogecoin',
          categories: [
            'Dogecoin a Bitcoin',
            'Dogecoin a Ethereum',
            'Dogecoin a Tether',
            'Dogecoin a Moon',
            'Dogecoin a Cardano',
            'Dogecoin a Otros',
          ],
          data: [
            2,
            1,
            0.5,
            0.5,
            0.5,
            1.08,

          ]
        }
      },
      {
        y: 4.02,
        color: colors[5],
        drilldown: {
          name: 'Moon',
          categories: [
            'Moon a Bitcoin',
            'Moon a Ethereum',
            'Moon a Tether',
            'Moon a Dogecoin',
            'Moon a Cardano',
            'Moon a Otros',
          ],
          data: [
            1,
            1,
            0.5,
            0.5,
            0.5,
            0.52,

          ]
        }
      },
      {
        y: 1.92,
        color: colors[4],
        drilldown: {
          name: 'Cardano',
          categories: [
            'Cardano a Bitcoin',
            'Cardano a Ethereum',
            'Cardano a Tether',
            'Cardano a Dogecoin',
            'Cardano a Moon',
            'Cardano a Otros',
          ],
          data: [
            0.5,
            0.5,
            0.2,
            0.2,
            0.2,
            0.32,

          ]
        }
      },
      {
        y: 7.62,
        color: colors[6],
        drilldown: {
          name: 'Otros',
          categories: [
            'Otros a Bitcoin',
            'Otros a Ethereum',
            'Otros a Tether',
            'Otros a Dogecoin',
            'Otros a Moon',
            'Otros a Cardano',
          ],
          data: [
            3,
            2,
            0.5,
            0.5,
            0.5,
            1.12,

          ]
        }
      }
    ],
    browserData = [],
    versionsData = [],
    i,
    j,
    dataLen = data.length,
    drillDataLen,
    brightness;


  // Build the data arrays
  for (i = 0; i < dataLen; i += 1) {

    // add browser data
    browserData.push({
      name: categories[i],
      y: data[i].y,
      color: data[i].color
    });

    // add version data
    drillDataLen = data[i].drilldown.data.length;
    for (j = 0; j < drillDataLen; j += 1) {
      brightness = 0.2 - (j / drillDataLen) / 5;
      versionsData.push({
        name: data[i].drilldown.categories[j],
        y: data[i].drilldown.data[j],
        color: Highcharts.color(data[i].color).brighten(brightness).get()
      });
    }
  }

  // Create the chart
  Highcharts.chart('containerLeft', {
    chart: {
      type: 'pie'
    },
    title: {
      text: 'Proporción de transacciones en página, último mes'
    },
    subtitle: {
      text: 'Fuente: <a href="google.com" target="_blank">RubyCrypto.com</a>'
    },
    plotOptions: {
      pie: {
        shadow: false,
        center: ['50%', '50%']
      }
    },
    tooltip: {
      valueSuffix: '%'
    },
    series: [{
      name: 'Total comerciado',
      data: browserData,
      size: '100%',
      innerSize: '60%',
      dataLabels: {
        formatter: function () {
          return this.y > 5 ? this.point.name : null;
        },
        color: '#ffffff',
        distance: -30
      }
    }],
    responsive: {
      rules: [{
        condition: {
          maxWidth: 400
        },
        chartOptions: {
          series: [{
          }, {
            id: 'versions',
            dataLabels: {
              enabled: false
            }
          }]
        }
      }]
    }
  });

  Highcharts.chart('containerRight', {
    chart: {
      type: 'pie'
    },
    title: {
      text: 'Proporción de transacciones en página, último mes'
    },
    subtitle: {
      text: 'Fuente: <a href="google.com" target="_blank">RubyCrypto.com</a>'
    },
    plotOptions: {
      pie: {
        shadow: false,
        center: ['50%', '50%']
      }
    },
    tooltip: {
      valueSuffix: '%'
    },
    series: [{
      name: 'Exchanges realizados',
      data: versionsData,
      size: '100%',
      innerSize: '60%',
      dataLabels: {
        formatter: function () {
          return this.y > 5 ? this.point.name : null;
        },
        color: '#ffffff',
        distance: -30
      }
    }],
    responsive: {
      rules: [{
        condition: {
          maxWidth: 400
        },
        chartOptions: {
          series: [{
          }, {
            id: 'versions',
            dataLabels: {
              enabled: false
            }
          }]
        }
      }]
    }
  });



  Highcharts.chart('container4', {
    chart: {
      type: 'column'
    },
    title: {
      text: 'Número de transacciones mensuales a nivel global'
    },
    subtitle: {
      text: 'Fuente: Scrimblo.eu.es'
    },
    xAxis: {
      categories: [
        'Enero',
        'Febrero',
        'Marzo',
        'Abril',
        'Mayo',
        'Junio',
        'Julio',
        'Agosto',
        'Septiembre',
        'Octubre',
        'Noviembre',
        'Diciembre'
      ],
      crosshair: true
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Millones (USD)'
      }
    },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style=" color:{series.color};padding:0"><b>{point.y:.1f} USD</b></td></tr>',
      footerFormat: '</table>',
      shared: true,
      useHTML: true
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0
      }
    },
    series: [{
      name: 'BTC',
      data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]

    }, {
      name: 'ETH',
      data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3]

    }, {
      name: 'DOGE',
      data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2]

    }, {
      name: 'BTS',
      data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1]

    }]
  });
});