import { React } from "react";
import { useHistory } from "react-router-dom";
import { Button } from '../../components';
import { FcCancel } from "react-icons/fc";
import { ButtonNotFound, ContainerNotFound, H2, NotFoundWrapper } from './styles';

const NotFound = () => {
    const history = useHistory();

    const handleClicks = () => {
        history.push('/');
    };

    return (
        <NotFoundWrapper>
                <ContainerNotFound>
                    <H2>                        
                        <FcCancel />
                        <br/>
                        <br/>
                        Página não encontrada!
                    </H2>
                    <ButtonNotFound>
                        <Button onClick={handleClicks} children='Covid19'>
                            Retornar Para Página Inicial
                        </Button>
                    </ButtonNotFound>
                </ContainerNotFound>
        </NotFoundWrapper>
    );
}

export default NotFound;
