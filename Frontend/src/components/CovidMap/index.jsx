import React from 'react';
import { MapContainer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './styles.css';

const CovidMap = ({ bairros }) => {

    /* propriedades do mapa enquanto não é populado pelos dados */
    const mapStyle = {
        fillColor: '#e6e6e6',
        weight: 1,
        color: '#848484',
        fillOpacity: 1,
    };

    /* aqui vai ser onde as tonalidades de cor serão aplicadas de acordo com a quantidade de casos */
    const onEachBairro = (bairro, layer) => {
        layer.options.fillColor = bairro.properties.color;

        const name = bairro.properties.name;
        //confirmedText é a propriedade que vai extrair os dados do covid do csv que contém os casos.
        const confirmedText = bairro.properties.confirmedText;
        //A linha abaixo vai abrir um popup com o nome do bairro e o número de casos
        layer.bindPopup(`${name} ${confirmedText}`);

        //mouseover - passando o mouse sobre os bairros vai exibir o número de casos
        layer.on('mouseover', () => {
            layer.openPopup();
        });
        //mouseout - retirando o cursor de cima do bairro faz sumir o popup
        layer.on('mouseout', () => {
            layer.closePopup();
        });
    };

    return (
        <MapContainer style={{ height: '90vh' }} zoomSnap={0.10} zoom={10.90} center={[-27.61, -48.50]}>
            <GeoJSON
                style={mapStyle}
                data={bairros}
                onEachFeature={onEachBairro}
            />
        </MapContainer>
    );
};
 
export default CovidMap;