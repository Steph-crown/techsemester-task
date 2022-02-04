import styled from "styled-components";
import { mediaQueries } from "../../utils/const";

export const HeaderContainer = styled.div`
    background-color: white;
    padding: 1em calc(0.05 * 100vw);
    display: flex;
    justify-content: space-between;
    min-height: 2px;
    align-items: center;

    label {
        display: flex;
        background-color: var(--grey);
        border-radius: 0.5em;
        min-height: 2px;
        align-items: center;
        width: 400px;
        max-width: 80%;
        padding: 10px 20px;
    }

    input {
        border: none;
        background-color: transparent;
        border-radius: 0.5em;
        outline: none;
        padding: 5px 0 5px 20px;
        width: 100%;
    }

    nav.md {
        display: flex;
        min-height: 2px;
        align-items: center;
        @media (max-width: ${mediaQueries.md}) {
            display: none;
        }

        img {
            height: 2.5em;
            margin: 0 1em 0 3em;
        }

        a {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin-left: 2em;
            text-decoration: none;
            margin-bottom: -26px;
            position: relative;
            padding: 0 10px;

            svg {
                height: 1.4em;
                width: 1.4em;
                color: var(--body-text);
                transition: 1s;
            }

            span {
                margin-top: 10px;
                color: var(--body-text);
                font-weight: 500;
                transition: 1s;
                margin-bottom: 4px;
            }

            &.active span,
            &.active svg {
                color: var(--blue);
            }

            &.active span {
                margin-bottom: 0;
            }
            &.active::after {
                content: "";
                background-color: var(--blue);
                height: 4px;
                width: 100%;
            }

            &:hover span,
            &:hover svg {
                color: #222;
            }
        }
    }
    div.sm {
        display: none;

        @media (max-width: ${mediaQueries.md}) {
            display: block;

            svg {
                height: 32px;
                width: 32px;
                color: var(--body-text);
            }
        }
    }
`;
