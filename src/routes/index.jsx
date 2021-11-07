import { React } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NotFound from '../pages/404';
import Covid19 from '../pages/Home';
import Register from '../pages/Register';

const Routes = () => {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Covid19} />
                    <Route exact path='/register' component={Register} />
                    <Route path='*' component={NotFound} />
                </Switch>
            </BrowserRouter>
        </>
    );
};

export default Routes;
