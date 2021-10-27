import React from 'react';
import { MapContainer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './styles.css';

const CovidMap = ({ bairros }) => {
    const mapStyle = {
        fillColor: '#ffffff',
        weight: 1,
        color: '#848484',
        fillOpacity: 1,
    };

    /* aqui vai ser onde as tonalidades de cor serão aplicadas de acordo com a quantidade de casos */
    const onEachBairro = (bairro, layer) => {
        layer.options.fillColor = bairro.properties.color;
        //aqui depois vai ser preciso verificar o caminho no json para retornar o nome do bairro (acho que é name), ou seja = bairro.properties.name;
        const name = bairro.properties.name;
        //confirmedText é a propriedade que vai extrair os dados do covid do csv que contém os casos.
        const confirmedText = bairro.properties.confirmedText;
        //A linha abaixo vai abrir um popup com o nome do país e o número de casos....posteriormente é só implementar o do bairro
        layer.bindPopup(`${name} ${confirmedText}`);
    };

    return (
        <MapContainer style={{ height: '90vh' }} zoomSnap={0.10} zoom={10.90} center={[-27.61, -48.55]}>
            <GeoJSON
                style={mapStyle}
                data={bairros}
                onEachFeature={onEachBairro}
            />
        </MapContainer>
    );
};
 
export default CovidMap;

// onde consta a palavra bairro, estou implementando país por causa do json, mas depois é só adequar para os bairros