import { React } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NotFound from '../pages/404/index';
import Covid19 from '../pages/Home'; /* aqui vai ser a página Home */
import Register from '../pages/register';

const Routes = () => {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Covid19} />
                    {/* aqui vai quando clicar em registrar caso (botão do rodapé) */}
                    <Route exact path='/register' component={Register} />
                    {/* nos demais casos digitados na url cai pra cá */}
                    <Route path='*' component={NotFound} />
                </Switch>
            </BrowserRouter>
        </>
    );
};

export default Routes;
