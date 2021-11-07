import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { PostData } from '../../services/Data';
import { Button } from '../../components';
import { FormsWrapper, FormsHeader, FormBoxes, FileInput, BoxLegend, FormInputData, FormContent } from './styles';

const Register = () => {
    const [values, setValues] = useState({
        dataNotificacao: '',
        dataPrimSintomas: '',
        dataTeste: '',
        dataObito: '',
        dataNascimento: '',
        faixaEtaria: '',
        sexo: '',
        cor: '',
        bairro: '',
        cidade: '',
        unidadeSaude: '',
        tipoTeste: '',
        dorGarganta: false,
        dispneia: false,
        febre: false,
        tosse: false,
        uti: false
    });

    const history = useHistory();

    const handleValuesChange = e => {
        setValues({...values, [e.target.name]: e.target.value});
    }

    const handleRegisterClick = async () => {
        const [hasErrors, response] = await PostData(values);

        if (hasErrors) return console.log('Erro');

        console.log(response);
    };

    const handleSeeDataClick = () => {
        history.push('/') /* vai renderizar na página home */
    };

    return (
        <FormsWrapper className="input-group">

            <FormsHeader>Registro de Casos da COVID19 em Florianópolis</FormsHeader>

            <FormBoxes>
            
                <FileInput className="container">
                    <fieldset>

                        <BoxLegend>Selecione um arquivo CSV com dados do COVID ou preencha o formulário abaixo</BoxLegend>

                        <div className="input-group">
                            <input
                                type="file"
                                className="form-control"
                                id="csvInputFile"
                                aria-describedby="inputGroupFileAddon04"
                                aria-label="Upload"
                                accept=".csv"
                            />
                            <Button id="csvInputFIleButton">Clique Aqui Para Enviar o Arquivo</Button>
                        </div>
                    </fieldset>
                </FileInput>

                <FormInputData>
                    <BoxLegend>Os campos marcados por * são obrigatórios</BoxLegend>

                    <FormContent className="row gy-2 gx-3 align-items-center">
                        <div className="col-auto">
                            <label htmlFor="dataNotificacao" className="form-label">Data de notificação*</label>
                            <input type="date" className="form-control" name="dataNotificacao" id="dataNotificacao" onChange={handleValuesChange} required />
                        </div>
                        <div className="col-auto">
                            <label htmlFor="dataPrimSintomas" className="form-label">Primeiros sintomas*</label>
                            <input type="date" className="form-control" name="dataPrimSintomas" id="dataPrimSintomas" onChange={handleValuesChange} required />
                        </div>
                        <div className="col-auto">
                            <label htmlFor="dataTeste" className="form-label">Data do teste*</label>
                            <input type="date" className="form-control" name="dataTeste" id="dataTeste" onChange={handleValuesChange} required />
                        </div>
                        <div className="col-auto pt-2">
                            <label htmlFor="dataObito" className="form-label">Data do óbito (se houve)</label>
                            <input type="date" className="form-control" name="dataObito" id="dataObito" defaultValue="" onChange={handleValuesChange} />
                        </div>
                        <div className="col-auto pt-2">
                            <label htmlFor="dataNascimento" className="form-label">Data de nascimento*</label>
                            <input type="date" className="form-control" name="dataNascimento" id="dataNascimento" onChange={handleValuesChange} required />
                        </div>
                        <div className="col-auto pt-2">
                            <label htmlFor="faixaEtaria" className="form-label">Faixa Etária*</label>
                            <select className="form-select" name="faixaEtaria" id="faixaEtaria" defaultValue="" onChange={handleValuesChange} required>{/* observar se vai funcionar */}
                                <option disabled value="">Selecione</option>
                                <option value="0-9">0 a 9</option>
                                <option value="10-19">10 a 19</option>
                                <option value="20-29">20 a 29</option>
                                <option value="30-39">30 a 39</option>
                                <option value="40-49">40 a 49</option>
                                <option value="50-59">50 a 59</option>
                                <option value="60-69">60 a 69</option>
                                <option value="70-79">70 a 79</option>
                                <option value="80-89">80 a 89</option>
                                <option value="90-99">90 a 99</option>
                                <option value="100+">100 +</option>
                            </select>
                        </div>
                        <div className="col-auto pt-2">
                            <label htmlFor="sexo" className="form-label">Sexo*</label>
                            <select className="form-select" name="sexo" id="sexo" defaultValue="" onChange={handleValuesChange} required> {/* observar se vai funcionar */}
                                <option disabled value="">Selecione</option>
                                <option value="M">Masculino</option>
                                <option value="F">Feminino</option>
                                <option value="N">Não Informado</option>
                            </select>
                        </div>
                        <div className="col-auto pt-2">
                            <label htmlFor="cor" className="form-label">Raça*</label>
                            <select className="form-select" name="cor" id="cor" defaultValue="" onChange={handleValuesChange} required> {/* observar se vai funcionar */}
                                <option disabled value="">Selecione</option>
                                <option value="amarela">Amarela</option>
                                <option value="branca">Branca</option>
                                <option value="parda">Parda</option>
                                <option value="preta">Preta</option>
                            </select>
                        </div>
                        <div className="col-auto pt-2">
                            <label htmlFor="bairro" className="form-label">Bairro*</label>
                            <input type="text" className="form-control" name="bairro" id="bairro" placeholder="Sem acentos maiúsculo" onChange={handleValuesChange} required />
                        </div>
                        <div className="col-auto pt-2">
                            <label htmlFor="cidade" className="form-label">Cidade*</label>
                            <input type="text" className="form-control" name="cidade" id="cidade" placeholder="FLORIANOPOLIS" onChange={handleValuesChange} required />
                        </div>
                        <div className="col-auto pt-2">
                            <label htmlFor="unidadeSaude" className="form-label">Unidade de Saúde*</label>
                            <select className="form-select" name="unidadeSaude" id="unidadeSaude" defaultValue="" onChange={handleValuesChange} required> {/* observar se vai funcionar */}
                                <option disabled value="">Selecione</option>
                                <option value="abraao">Abraão</option>
                                <option value="agronomica">Agronômica</option>
                                <option value="alto-ribeirao">Alto Ribeirão</option>
                                <option value="armacao">Armação</option>
                                <option value="balneario">Balneário</option>
                                <option value="barra-lagoa">Barra da Lagoa</option>
                                <option value="cach-bom-jesus">Cachoeira do Bom Jesus</option>
                                <option value="caieira">Caieira</option>
                                <option value="campeche">Campeche</option>
                                <option value="canasvieiras">Canasvieiras</option>
                                <option value="canto-lagoa">Canto da Lagoa</option>
                                <option value="capoeiras">Capoeiras</option>
                                <option value="carianos">Carianos</option>
                                <option value="centro">Centro</option>
                                <option value="coloninha">Coloninha</option>
                                <option value="coqueiros">Coqueiros</option>
                                <option value="corrego-grande">Córrego Grande</option>
                                <option value="costa-lagoa">Costa da Lagoa</option>
                                <option value="costeira">Costeira</option>
                                <option value="estreito">Estreito</option>
                                <option value="faz-rio-tavares">Fazenda Rio Tavares</option>
                                <option value="ingleses">Ingleses</option>
                                <option value="itacorubi">Itacorubi</option>
                                <option value="jd-atlantico">Jardim Atlântico</option>
                                <option value="joao-paulo">João Paulo</option>
                                <option value="jurere">Jurerê</option>
                                <option value="lagoa">Lagoa da Conceição</option>
                                <option value="monte-cristo">Monte Cristo</option>
                                <option value="monte-serrat">Monte Serrat</option>
                                <option value="morro-pedras">Morro das Pedras</option>
                                <option value="continente">Novo Continente</option>
                                <option value="pantanal">Pantantal</option>
                                <option value="pantano-sul">Pântano do Sul</option>
                                <option value="ponta-canas">Ponta das Canas</option>
                                <option value="prainha">Prainha</option>
                                <option value="ratones">Ratones</option>
                                <option value="ribeirao">Ribeirão da Ilha</option>
                                <option value="tavares">Rio Tavares</option>
                                <option value="vermelho">Rio Vermelho</option>
                                <option value="limoes">Saco dos Limões</option>
                                <option value="grande">Saco Grande</option>
                                <option value="santinho">Santinho</option>
                                <option value="st-tonho">St Ant de Lisboa</option>
                                <option value="sape">Sapé</option>
                                <option value="tapera">Tapera</option>
                                <option value="trindade">Trindade</option>
                                <option value="vg-grande">Vargem Grande</option>
                                <option value="vg-pequena">Vargem Pequena</option>
                                <option value="aparecida">Vila Aparecida</option>
                            </select>
                        </div>
                        <div className="col-auto pt-2">
                            <label htmlFor="tipoTeste" className="form-label">Tipo de Teste*</label>
                            <select className="form-select" name="tipoTeste" id="tipoTeste" defaultValue="" onChange={handleValuesChange} required> {/* observar se vai funcionar */}
                                <option disabled value="">Selecione</option>
                                <option value="rt-pcr">RT-PCR</option>
                                <option value="rapido">Teste Rápido</option>
                                <option value="soro">Sorológico</option>
                            </select>
                        </div>
                        <div className="col-auto pt-2">
                            <label htmlFor="dorGarganta" className="form-label">Dor de Garganta*</label>
                            <select className="form-select" name="dorGarganta" id="dorGarganta" defaultValue="" onChange={handleValuesChange} required> {/* observar se vai funcionar */}
                                <option disabled value="">Selecione</option>
                                <option value="sim">Sim</option>
                                <option value="nao">Não</option>
                            </select>
                        </div>
                        <div className="col-auto pt-2">
                            <label htmlFor="dispneia" className="form-label">Dispneia*</label>
                            <select className="form-select" name="dispneia" id="dispneia" defaultValue="" onChange={handleValuesChange} required> {/* observar se vai funcionar */}
                                <option disabled value="">Selecione</option>
                                <option value="sim">Sim</option>
                                <option value="nao">Não</option>
                            </select>
                        </div>
                        <div className="col-auto pt-2">
                            <label htmlFor="febre" className="form-label">Febre*</label>
                            <select className="form-select" name="febre" id="febre" defaultValue="" onChange={handleValuesChange} required> {/* observar se vai funcionar */}
                                <option disabled value="">Selecione</option>
                                <option value="sim">Sim</option>
                                <option value="nao">Não</option>
                            </select>
                        </div>
                        <div className="col-auto pt-2">
                            <label htmlFor="tosse" className="form-label">Tosse*</label>
                            <select className="form-select" name="tosse" id="tosse" defaultValue="" onChange={handleValuesChange} required> {/* observar se vai funcionar */}
                                <option disabled value="">Selecione</option>
                                <option value="sim">Sim</option>
                                <option value="nao">Não</option>
                            </select>
                        </div>
                        <div className="col-auto pt-2">
                            <label htmlFor="uti" className="form-label">Internado na UTI?*</label>
                            <select className="form-select" name="uti" id="uti" defaultValue="" onChange={handleValuesChange} required> {/* observar se vai funcionar */}
                                <option disabled value="">Selecione</option>
                                <option value="sim">Sim</option>
                                <option value="nao">Não</option>
                            </select>
                        </div>
                        <div className="d-flex justify-content-evenly align-items-center pt-5">
                            <button className="btn btn-primary me-md-2" children="Covid19" onClick={handleSeeDataClick}>Retornar Para Página Inicial</button> {/* aqui vai retornar para Home usando children Covid19 */}

                            <button className="btn btn-primary" type="submit" children="Register" onClick={handleRegisterClick} >Registrar Dados do Formulário</button>
                        </div>
                    </FormContent>
                </FormInputData>
            </FormBoxes>
        </FormsWrapper>
    );
}

export default Register;
