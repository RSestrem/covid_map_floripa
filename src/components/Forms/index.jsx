import React from "react";
import { BoxLegend, FileInput, FormBoxes, FormInputData, FormsHeader, FormsWrapper } from "./styles";
import { FcHighPriority } from "react-icons/fc";

const Forms = () => {
    return (
        <FormsWrapper className="input-group">

            <FormsHeader>Dados da COVID19 em Florianópolis</FormsHeader>

            <FormBoxes>
            
                <FileInput className="container">
                    <fieldset>

                        <BoxLegend>Selecione um arquivo CSV com dados do COVID ou preencha o formulário abaixo</BoxLegend>

                        <div className="input-group">
                            <input
                                type="file"
                                className="form-control"
                                id="inputGroupFile04"
                                aria-describedby="inputGroupFileAddon04"
                                aria-label="Upload"
                                accept='.csv'
                            />
                             <button className="btn btn-outline-primary" type="button" id="inputGroupFileAddon04">Enviar</button>
                        </div>
                    </fieldset>
                </FileInput>

                <FormInputData>
                    <BoxLegend>Os campos marcados por * são obrigatórios</BoxLegend>

                    <form class="row gy-2 gx-3 align-items-center">
                        <div className="col-auto">
                            <label for="validationDefault01" className="form-label">Data de notificação*</label>
                            <input type="date" className="form-control" id="validationDefault01" required />
                        </div>
                        <div className="col-auto">
                            <label for="validationDefault02" className="form-label">Primeiros sintomas*</label>
                            <input type="date" className="form-control" id="validationDefault02" required />
                        </div>
                        <div className="col-auto">
                            <label for="validationDefault03" className="form-label">Data do teste*</label>
                            <input type="date" className="form-control" id="validationDefault03" required />
                        </div>
                        <div className="col-auto pt-2">
                            <label for="validationDefault04" className="form-label">Data do óbito (se houve)</label>
                            <input type="date" className="form-control" id="validationDefault04" />
                        </div>
                        <div className="col-auto pt-2">
                            <label for="validationDefault05" className="form-label">Data de nascimento*</label>
                            <input type="date" className="form-control" id="validationDefault05" required />
                        </div>
                        <div className="col-auto pt-2">
                            <label for="validationDefault06" className="form-label">Faixa Etária*</label>
                            <select className="form-select" id="validationDefault06" required>
                                <option selected disabled value="">Selecione</option>
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
                            <label for="validationDefault07" className="form-label">Sexo*</label>
                            <select className="form-select" id="validationDefault07" required>
                                <option selected disabled value="">Selecione</option>
                                <option value="M">Masculino</option>
                                <option value="F">Feminino</option>
                                <option value="N">Não Informado</option>
                            </select>
                        </div>
                        <div className="col-auto pt-2">
                            <label for="validationDefault08" className="form-label">Raça*</label>
                            <select className="form-select" id="validationDefault08" required>
                                <option selected disabled value="">Selecione</option>
                                <option value="amarela">Amarela</option>
                                <option value="branca">Branca</option>
                                <option value="parda">Parda</option>
                                <option value="preta">Preta</option>
                            </select>
                        </div>
                        <div className="col-auto pt-2">
                            <label for="validationDefault09" className="form-label">Bairro*</label>
                            <input type="text" className="form-control" id="validationDefault09" placeholder="Sem acentos maiúsculo" required />
                        </div>
                        <div className="col-auto pt-2">
                            <label for="validationDefault10" className="form-label">Cidade*</label>
                            <input type="text" className="form-control" id="validationDefault10" placeholder="Sem acentos maiúsculo" required />
                        </div>
                        <div className="col-auto pt-2">
                            <label for="validationDefault11" className="form-label">Unidade de Saúde*</label>
                            <select className="form-select" id="validationDefault11" required>
                                <option selected disabled value="">Selecione</option>
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
                            <label for="validationDefault12" className="form-label">Tipo de Teste*</label>
                            <select className="form-select" id="validationDefault12" required>
                                <option selected disabled value="">Selecione</option>
                                <option value="rt-pcr">RT-PCR</option>
                                <option value="rapido">Teste Rápido</option>
                                <option value="soro">Sorológico</option>
                            </select>
                        </div>
                        <div className="col-auto pt-2">
                            <label for="validationDefault13" className="form-label">Dor de Garganta*</label>
                            <select className="form-select" id="validationDefault13" required>
                                <option selected disabled value="">Selecione</option>
                                <option value="sim">Sim</option>
                                <option value="nao">Não</option>
                            </select>
                        </div>
                        <div className="col-auto pt-2">
                            <label for="validationDefault14" className="form-label">Dispneia*</label>
                            <select className="form-select" id="validationDefault14" required>
                                <option selected disabled value="">Selecione</option>
                                <option value="sim">Sim</option>
                                <option value="nao">Não</option>
                            </select>
                        </div>
                        <div className="col-auto pt-2">
                            <label for="validationDefault15" className="form-label">Febre*</label>
                            <select className="form-select" id="validationDefault15" required>
                                <option selected disabled value="">Selecione</option>
                                <option value="sim">Sim</option>
                                <option value="nao">Não</option>
                            </select>
                        </div>
                        <div className="col-auto pt-2">
                            <label for="validationDefault16" className="form-label">Tosse*</label>
                            <select className="form-select" id="validationDefault16" required>
                                <option selected disabled value="">Selecione</option>
                                <option value="sim">Sim</option>
                                <option value="nao">Não</option>
                            </select>
                        </div>
                        <div className="col-auto pt-2">
                            <label for="validationDefault17" className="form-label">Internado na UTI?*</label>
                            <select className="form-select" id="validationDefault17" required>
                                <option selected disabled value="">Selecione</option>
                                <option value="sim">Sim</option>
                                <option value="nao">Não</option>
                            </select>
                        </div>
                        <div className="d-flex justify-content-evenly align-items-center">
                            <div className="d-flex justify-content-evenly">
                                <FcHighPriority />
                                <i>
                                    <strong>
                                        Passe o mouse sobre os bairros no mapa para ver a quantidade de casos.
                                    </strong>
                                </i>
                            </div>    
                            <div className="d-grid gap-2 d-md-flex pt-2 justify-content-md-end">
                                <button className="btn btn-primary me-md-2" type="submit">Enviar Formulário</button>
                            </div>
                        </div>
                    </form>
                </FormInputData>
            </FormBoxes>
        </FormsWrapper>    
    );
}

export default Forms;