import styled from 'styled-components';

export const NotFoundWrapper = styled.div`
    background-color: #e6e6e6;
    height: 100vh;
    width: 100vw;
`;

export const ContainerNotFound = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    background-color: #f0f8ff;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 30%;
    height: 50%;
    border: 0.2em solid #9f81f7;
    border-radius: 1.2em;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
        rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
`;

export const H2 = styled.h2`
    text-align: center;
    padding-bottom: 1em;
    border-bottom: 0.1em solid #b49bbf;
    color: #5858fa;
    font-family: 'Quicksand', sans-serif;
    font-size: 2.1em;
    font-weight: bold;
`;

export const ButtonNotFound = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;

    button {
        font-size: 1.3em;
        padding: 0.7em;
        transition: transform 0.3s;

        :hover {
            transform: scale(1.02);
        }
    }
`;
