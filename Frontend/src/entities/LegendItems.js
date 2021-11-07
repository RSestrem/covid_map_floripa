import LegendItem from './LegendItem';

const legendItems = [
    new LegendItem(
        '10.000 +',
        '#A5423B',
        (cases) => cases >= 10_000,
        '#ffffff'
    ),
    new LegendItem(
        '7.500 - 9.999',
        '#C25850',
        (cases) => cases >= 7_500 && cases < 10_000,
        '#ffffff'
    ),
    new LegendItem(
        '5.000 - 7.499',
        '#D07C75',
        (cases) => cases >= 5_000 && cases < 7_500
    ),
    new LegendItem(
        '2.500 - 4.999',
        '#DE9F9B',
        (cases) => cases >= 2_500 && cases < 5_000
    ),
    new LegendItem(
        '0 - 2.499',
        '#EBC4C1',
        (cases) => cases > 0 && cases < 2_500
    ),
    new LegendItem('No Data', '#F2F2F2', (cases) => true),
];

export default legendItems;
