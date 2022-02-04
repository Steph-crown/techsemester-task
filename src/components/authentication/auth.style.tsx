import styled from "styled-components";
import { mediaQueries } from "../../pages/utils/const";

export const AuthContainer = styled.section`
    display: flex;
    .left {
        min-height: 100vh;
        width: 520px;
        background: var(--blue);
        padding: 2.4em calc(0.04 * 100vw);
    }

    figure {
        display: flex;
        min-height: 2px;
        align-items: center;
    }

    figcaption {
        color: var(--white);
        font-weight: 500;
        font-size: 1.2em;
        margin-left: 0.5em;
    }

    .illustration {
        width: 100%;
    }

    .illustration__figure {
        margin-top: 2em;
    }

    h1 {
        font-size: 2.8em;
        margin-top: 1em;
        font-weight: 400;
        color: var(--white);
        line-height: 150%;
        font-size: 2.2em;
        margin-top: 2em;

        @media (max-width: ${mediaQueries.md}) {
            font-size: 2em;
        }
    }
    main {
        padding: 10em calc(0.07 * 100vw);
        width: calc(100% - 520px);
        h2 {
            font-size: 1.6em;
            color: var(--body-text);
            font-weight: 400;
        }
    }

    form {
        margin: 3em 0;

        p {
            color: #949494;
            font-weight: 500;
            font-size: 1em;
            line-height: 140%;
            max-width: 600px;
            margin-top: 1em;
        }

        hr {
            margin: 2em 0;
            border-top: 1px solid #f0f4f5;
            border-bottom: none;
        }

        section {
            b {
                color: #587087;
                display: block;
                margin-top: 1.5em;

                a {
                    text-decoration: none;
                    color: var(--blue);
                }
            }
            div {
                display: flex;
                justify-content: space-between;
                align-items: center;
                flex-wrap: wrap;

                &.checkbox-list {
                    display: block;
                    width: 100%;

                    label {
                        margin: 1em 0;
                    }
                }
                button {
                    padding: 1em 3em;
                    margin-top: 3em;
                }
            }
            header {
                height: 0;
                width: 0;
                overflow: hidden;
                flex: 0;
                background-color: red;
            }
        }
    }

    h3 {
        color: var(--body-text);
        font-size: 1.3em;
    }
    @media (max-width: ${mediaQueries.md}) {
        .left {
            width: 400px;
        }
        main {
            width: calc(100% - 400px);
            button {
                width: 100%;
            }
        }
    }
    @media (max-width: 900px) {
        .left {
            width: 300px;
        }
        main {
            width: calc(100% - 300px);
        }
    }
    @media (max-width: ${mediaQueries.sm}) {
        .left {
            display: none;
        }
        main {
            width: 100%;
            button {
                width: 100%;
            }
            padding: 2em calc(0.07 * 100vw);
        }
    }
`;
