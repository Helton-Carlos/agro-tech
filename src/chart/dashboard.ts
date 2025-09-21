export const productSeries = [
  {
    name: 'Produção de grãos',
    data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
  },
  {
    name: 'Produção de Milhos',
    data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
  },
  {
    name: 'Produção de Soja',
    data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
  },
];

export const productOptions = {
  chart: {
    type: 'bar',
    height: 350,
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '55%',
      borderRadius: 5,
      borderRadiusApplication: 'end',
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: true,
    width: 2,
    colors: ['transparent'],
  },
  xaxis: {
    categories: ['Feb', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out'],
  },
  yaxis: {
    title: {
      text: 'PRODUÇÃO',
    },
  },
  fill: {
    opacity: 1,
  },
  tooltip: {
    y: {
      formatter: (val: number) => `R$ ${val} Mil`,
    },
  },
};
