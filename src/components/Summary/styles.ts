import styled from "styled-components";

export const Container = styled.div`

    .tituloSummary {
        &:first-child {
            position: absolute;
            top: 2rem;
        }

        color: #fff;
    }
    
    div.divContainerSummary {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 2rem;
        margin-top: -3rem;
    }

    @media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
        div.divContainerSummary {
            grid-template-columns: repeat(1, 1fr);
        }
    }

    @media only screen and (min-device-width: 414px) and (max-device-height: 736px) and (orientation : landscape) {
        div.divContainerSummary {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    div.quadros {
        background: var(--shape);
        padding: 1.5rem 2rem;
        border-radius: 0.25rem;
        color: var(--text-title);
        box-shadow: 3px 3px 15px #888;

        header {
            display: flex;
            align-items: center;
            justify-content: space-between;

            p {
                font-size: .7rem !important;
            }

            svg {
                font-size: 2.5rem;
                margin-bottom: -1rem;
                margin-left: -.5rem;
                color: var(--green);
            }
        }

        span {
            display: grid;
            grid-template-columns: 2fr 1fr;
            gap: 2rem;

            .divBox {
                padding-top: 1rem;
            }

            div:not(.divBox, .divCharts) {
                font-size: .7rem;
                margin-bottom: 1rem;

                &.lead {
                    border-bottom: 4px solid #ffcc00;
                    position: relative;
                    
                    b {
                        position: absolute;
                        right: 0;
                    }
                }

                &.agendou {
                    border-bottom: 4px solid var(--blue);
                    position: relative;

                    b {
                        position: absolute;
                        right: 0;
                    }
                }
            }

            .divCharts {
                margin-top: -1rem;

                div {
                    padding-top: .5rem;
                    margin-bottom: 0rem;
                }
            }
        }

        strong {
            display: block;
            margin-top: 1rem;
            font-size: 2rem;
            font-weight: 500;
            line-height: 3rem;

        }

        &.destaque-fundo {
            background: var(--green);
            color: #fff;
        }
    }
`;