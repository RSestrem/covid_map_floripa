import React, { useState, useEffect } from 'react';
import { CovidMap, Legend, Loading } from '../../components';
import LoadBairrosTask from '../../tasks/LoadBairrosTask';
import legendItems from '../../entities/LegendItems';

const Covid19 = () => {
    const [bairros, setBairros] = useState([]);

    const legendItemsInReverse = [...legendItems].reverse();

    const load = () => {
        const loadBairrosTask = new LoadBairrosTask();
        loadBairrosTask.load(setBairros);
    };

    useEffect(load, []);

    return (
        <>
            {bairros.length === 0 ? (
                <Loading />
            ) : (
                <>
                    <CovidMap bairros={bairros} />
                    <Legend legendItems={legendItemsInReverse} />
                </>
            )}
        </>
    );
}
 
export default Covid19;