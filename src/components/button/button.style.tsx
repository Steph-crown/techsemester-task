import styled from "styled-components";

export const ButtonContainer = styled.button<{
    round?: boolean;
    className?: string;
}>`
    background-color: var(--blue);
    border: none;
    outline: none;
    color: var(--white);
    cursor: pointer;
    transition: 1s;

    &:hover {
        background-color: var(--blue-hover);
    }

    border-radius: ${(props) => (props.round ? "50px" : "0.5em")};
    padding: 1em 1.5em;
    font-weight: 500;
`;
