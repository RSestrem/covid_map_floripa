require('dotenv').config();
import papa from 'papaparse';
import { features } from '../data/bairros.json';
import legendItems from '../entities/LegendItems';

class LoadBairrosTask {
    covid19DataUrl =
        'https://raw.githubusercontent.com/RSestrem/covid_data/main/csv_tratado.csv';

    setState = null;
    mapBairros = features;

    load = (setState) => {
        this.setState = setState;

        papa.parse(this.covid19DataUrl, {
            download: true,
            header: true,
            complete: (result) => this.#processCovidData(result.data),
        });
    };

    /* A chave pra manipular os dados e somar os casos está aqui */
    #processCovidData = (covidBairros) => {
        for (let i = 0; i < this.mapBairros.length; i++) {
            const mapBairro = this.mapBairros[i];
            const covidBairro = covidBairros.find(
                (covidBairro) => covidBairro.name === mapBairro.properties.name
            );

            mapBairro.properties.confirmed = 0;
            mapBairro.properties.confirmedText = '0';

            if (covidBairro != null) {
                const confirmed = Number(covidBairro.confirmed);
                mapBairro.properties.confirmed = confirmed;
                mapBairro.properties.confirmedText =
                    this.#formatNumberWithCommas(confirmed);
            }

            this.#setBairroColor(mapBairro);
        }

        this.setState(this.mapBairros);
    };

    #setBairroColor = (mapBairro) => {
        const legendItem = legendItems.find((legendItem) =>
            legendItem.isFor(mapBairro.properties.confirmed)
        );

        /* a lógica de adicionar cor de acordo com o número de casos está aqui */
        if (legendItem != null) {
            mapBairro.properties.color = legendItem.color;
        }
    };

    /* Regex para formatar os números enormes em grupo de 3 e separar por pontos */
    #formatNumberWithCommas = (number) => {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    };
}

export default LoadBairrosTask;
