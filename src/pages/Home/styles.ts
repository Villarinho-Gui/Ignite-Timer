import { styled } from "styled-components";

export const HomeComponent = styled.main`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 3.5rem;
    }

    button {
        display: flex;
        width: 40.5rem;
        height: 4rem;
        padding: 1rem 2.5rem;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;

        border-radius: 0.5rem;
        opacity: 0.7;
        background: ${props => props.theme["green-500"]};
        border: none;

        color: ${props => props.theme["white-100"]}
    }
`

export const FormContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    color: ${props => props.theme["gray-100"]};
    font-size: 1.125rem;
    font-weight: bold;
    flex-wrap: wrap;
`


export const CountDownContainer = styled.div``