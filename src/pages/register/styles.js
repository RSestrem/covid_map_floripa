import styled from 'styled-components';

export const FormsWrapper = styled.div`
    display: flex;
    height: 100vh;
    padding: 1.6%;
    background-color: #e6e6e6;
`;

export const FormBoxes = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 85vh;
`;

export const FormsHeader = styled.header`
    width: 100%;
    text-align: center;
    text-transform: uppercase;
    font-family: 'Quicksand', sans-serif;
    font-weight: bold;
    color: #8258fa;
    font-size: 30px;
    margin-bottom: 0.2em;
    padding-bottom: 0.5em;
    border-bottom: 0.08em #642efe solid;
`;

export const FileInput = styled.section`
    display: flex;
    flex-direction: column;
    width: 80%;
    height: 25vh;
    background-color: #f0f8ff;
    padding: 2%;
    margin-top: 1.2em;
    justify-content: center;
    font-family: 'Quicksand', sans-serif;
    border: 1px solid #819ff7;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
        rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    transition: transform 0.3s;
    border-radius: 7px;

    :hover {
        background-color: #cee3f6;
        transform: scale(1.01);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

        button {
            background-color: #8258fa;
            color: #fafafa;

            :hover {
                background-color: #642efe;
                color: #fff;
            }
        }
    }
`;

export const BoxLegend = styled.legend`
    display: inline;
    font-size: 1.03em;
    font-weight: bold;
    color: #585858;
    margin-bottom: 1em;
`;

export const FormInputData = styled(FileInput)`
    height: 70vh;
`;

export const FormContent = styled.form`
    display: flex;
    justify-content: space-evenly;

    button {
        background-color: #8181f7;
        border-radius: 7px;
        padding: 10px;
        color: #f2f2f2;
        font-size: 1.25em;
        font-weight: bold;
        font-family: 'Quicksand', sans-serif;
        cursor: pointer;
        border: none;
        transition: all 0.3s ease;

        :hover {
            background-color: #642efe;
            transform: scale(1.08);
        }
    }
`;
