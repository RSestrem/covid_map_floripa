import React, { useState, useEffect } from 'react';
import { CovidMap, Forms, Legend, Loading } from '../../components';
import LoadBairrosTask from '../../tasks/LoadBairrosTask';
import legendItems from '../../entities/LegendItems';
import { Container, MapWrapper, Wrapper } from './styles';

const Covid19 = () => {
    const [bairros, setBairros] = useState([]);

    const legendItemsInReverse = [...legendItems].reverse();

    const load = () => {
        const loadBairrosTask = new LoadBairrosTask();
        loadBairrosTask.load(setBairros);
    };

    useEffect(load, []);

    return (
        <Wrapper>
            <Container>
                <Forms />{/* o forms vai ser estilizado e apresentado aqui */}
            </Container>
                {bairros.length === 0 ? (
                    <MapWrapper>
                        <Loading />
                    </MapWrapper>
                ) : (
                    <MapWrapper>
                        <CovidMap bairros={bairros} />
                        <Legend legendItems={legendItemsInReverse} />
                    </MapWrapper>
                )}
        </Wrapper>
    );
}
 
export default Covid19;