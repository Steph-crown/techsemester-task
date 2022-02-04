import styled from "styled-components";
import { mediaQueries } from "../../utils/const";

export const QuestionSectionContainer = styled.div`
    background-color: var(--white);
    min-height: 100vh;
    padding: 1.5em;
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    border-radius: 0.5em;
    box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.1),
        -4px -4px 8px rgba(255, 255, 255, 0.4);
    margin: 4em auto;

    @media (max-width: ${mediaQueries.md}) {
        margin-top: 2em auto;
    }

    .avatar {
        display: flex;
        min-height: 2px;
        align-items: center;
        p {
            color: #777;
            font-weight: 400;
            margin-left: 0.8em;
        }

        img {
            height: 2.4em;
        }
    }

    h1 {
        font-size: 2.5em;
        margin-top: 1em;
        color: #777;
        font-weight: 400;

        @media (max-width: ${mediaQueries.md}) {
            font-size: 2em;
        }
    }

    main {
        margin: 2em 0;

        p {
            color: #888;
            line-height: 200%;
        }
    }

    h3 {
        font-size: 1.5em;
        color: #444;
    }

    div.flex {
        display: flex;
        justify-content: space-between;
        min-height: 2px;
        align-items: center;

        svg {
            color: var(--blue);
            height: 1.5em;
            width: 1.5em;
        }
    }

    @media (max-width: 800px) {
        border-radius: 0;
    }

    input {
        background-color: white;
        box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.1),
            -4px -4px 8px rgba(255, 255, 255, 0.4);
        display: block;
        width: 100%;
        border: none;
        outline: none;
        font-size: 1em;
        padding: 1em;
        border-radius: 0.5em;
        margin-top: 0.8em;
    }

    button {
        margin-top: 3em;
    }
`;
