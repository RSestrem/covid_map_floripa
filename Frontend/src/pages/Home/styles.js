import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: colum;
`;

export const MapWrapper = styled.div`
    width: 50vw;
`;

export const Container = styled.aside`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50vw;
    height: 100vh;
    background-color: #e6e6e6;
    font-family: 'Quicksand', sans-serif;
    font-size: 0.9em;
    border-right: 2px solid #bdbdbd;

    ul {
        margin-top: 10px;
        border: 0.08em #000 solid;
        list-style-type: none;
    }

    ul li:nth-child(2n) {
        background-color: rgb(70, 67, 67);
    }

    p + p {
        width: auto;
        margin: 0px 0px 0px 20px;
    }

    button {
        font-size: 1.2em;
        margin-top: 1.2em;
        padding: 1em;
    }
`;

export const ItemsTitles = styled.div`
    display: grid;
    grid-template-columns: 130px 130px 150px 75px 75px 75px 75px;
    background-color: #848484;
    padding: 0.5em;
    text-align: center;
    color: #e6e6e6;
    font-size: 1.3em;
    font-weight: bold;
`;

export const ItemsContent = styled.div`
    display: grid;
    grid-template-columns: 130px 130px 150px 75px 75px 75px 75px;
    text-align: center;
    padding: 5px 0px;
`;

export const TableHeader = styled.header`
    text-align: center;
    font-size: 2em;
    font-weight: bold;
    width: 80%;
    color: #8181f7;
    padding: 0.8em;
    border-bottom: 0.15em solid #d8d8d8;
    margin-bottom: 1.5em;
`;
