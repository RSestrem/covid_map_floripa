import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { LoadData } from '../../services/Data';
import { Button, CovidMap, Legend, Loading } from '../../components';
import LoadBairrosTask from '../../tasks/LoadBairrosTask';
import legendItems from '../../entities/LegendItems';
import { Container, ItemsContent, ItemsTitles, MapWrapper, TableHeader, Wrapper } from './styles';
import { FcHighPriority } from "react-icons/fc";

const Covid19 = () => {

    /* form section */
    const [datas, setDatas] = useState([]);
    const history = useHistory();

    const loadTasks = async () => {
        const [hasErrors, response] = await LoadData();

        if (hasErrors) return console.log('Erro');

        for (let i = 0; i < response.datas.length; i++) {
            response.datas[i].dataNotificacao = new Date(response.datas[i].dataNotificacao).toLocaleDateString();
        }

        setDatas(response.datas);
    };

    const handleSeeRegisterClick = () => {
        history.push('/register');
    };

    useEffect(() => {
        loadTasks()
    }, []);

    /* map section */
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
                <TableHeader>
                    <label>Dados da COVID19 em Florianópolis</label>
                </TableHeader>
                <div>
                    <ItemsTitles>
                        <p>Notificação</p>
                        <p>Faixa Etária</p>
                        <p>Bairro</p>
                        <p>Sexo</p>
                        <p>Febre</p>
                        <p>Tosse</p>
                        <p>Óbito</p>
                    </ItemsTitles>
                </div>
                <ul>
                    {datas.map(data => {
                        return (
                            <li key={data.id} >
                                <ItemsContent>
                                    <p>{data.dataNotificacao}</p>
                                    <p>{data.faixaEtaria}</p>
                                    <p>{data.bairro}</p>
                                    <p>{data.sexo}</p>
                                    <p>{(data.febre === 'sim') ? 'sim' : 'não' }</p>
                                    <p>{(data.tosse === 'sim') ? 'sim' : 'não' }</p>
                                    <p>{(data.dataObito === 'sim') ? 'sim' : 'não' }</p>
                                </ItemsContent>
                            </li>
                        )
                    })}
                </ul>
                <div>
                    <FcHighPriority />
                    <i>
                        <strong>
                            Passe o mouse sobre os bairros no mapa para ver a quantidade de casos.
                        </strong>
                    </i>
                </div> 
                <div>
                    <Button children='Register Data' onClick={handleSeeRegisterClick}>Clique Aqui Para Acessar a Página de Registro de Casos</Button>
                </div>
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