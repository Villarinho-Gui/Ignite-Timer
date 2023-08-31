import styled from "styled-components";

export const HeaderComponent = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;


    nav {
        display: flex;
        gap: 0.5rem;

        a {
            width: 3rem;
            height: 3rem;

            display: flex;
            justify-content: center;
            align-items: center;

            color: ${(props) => props.theme["gray-100"]};
            border-radius: 4px;

            &:hover {
                background-color: ${props => props.theme["gray-600"]};
                border-radius: 4px;
            }

            &.active {
                color: ${props => props.theme["green-500"]};
            }
        }
    }
`