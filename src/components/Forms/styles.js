import styled from 'styled-components';

export const FormsWrapper = styled.div`
    align-items: center;
    align-content: center;
    height: 100vh;
    padding: 20px;
    background-color: #e6e6e6;
    border-right: 1px solid #d8d8d8;
`;

export const FormsHeader = styled.header`
    --b: 0.08em; /* thickness of the border */
    --c: #819ff7; /* color of the border */
    --w: 1.07em; /* width of border */

    border: var(--b) solid transparent;
    background: linear-gradient(var(--c), var(--c)) top left,
        linear-gradient(var(--c), var(--c)) top left,
        linear-gradient(var(--c), var(--c)) bottom left,
        linear-gradient(var(--c), var(--c)) bottom left,
        linear-gradient(var(--c), var(--c)) top right,
        linear-gradient(var(--c), var(--c)) top right,
        linear-gradient(var(--c), var(--c)) bottom right,
        linear-gradient(var(--c), var(--c)) bottom right;
    background-size: var(--b) var(--w), var(--w) var(--b);
    background-origin: border-box;
    background-repeat: no-repeat;

    /*Configuração do conteúdo*/
    width: 100%;
    box-sizing: border-box;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    line-height: 2.5em;
    font-size: 2.3em;
    font-weight: bolder;
    color: #5858fa;
`;

export const FileInput = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: #f0f8ff;
    padding: 15px;
    margin-top: 2em;
    border: 1px solid #819ff7;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
        rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    transition: transform 0.3s;
    border-radius: 7px !important;

    :hover {
        background-color: #cee3f6;
        transform: scale(1.01);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
`;

export const FileInputLegend = styled.p`
    margin: 5px 0 0 3px;
    font-size: 0.9em;
`;

export const FormInputData = styled(FileInput)``;
