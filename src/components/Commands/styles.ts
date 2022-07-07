import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-top: -6rem;

    div {
        background: var(--shape);
        padding: 1.5rem 2rem;
        border-radius: 0.25rem;
        color: var(--text-title);
        box-shadow: 3px 3px 15px #888;

        header {
            display: flex;
            align-items: center;
            justify-content: space-between;
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

export const ContainerModuloBotao = styled.div`

    .tituloModalidade {
        &:first-child {
            margin-top: 3rem;
        }

        color: #888;
    }

    .divContainerBotoes {
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        gap: 1rem;
        position: relative;
        top: 30px;
        padding-bottom: 2rem;
        border-bottom: 2px dotted #ccc;

        &.noBorder {
            border: none;
        }

        &.fixed {
            grid-template-columns: repeat(5, 1fr);
        }

        @media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
            grid-template-columns: repeat(2, 1fr);
            
            &.fixed {
                grid-template-columns: repeat(2, 1fr);
            }
        }

        @media only screen and (min-device-width: 414px) and (max-device-height: 736px) and (orientation : landscape) {
            grid-template-columns: repeat(7, 1fr);
            
            &.fixed {
                grid-template-columns: repeat(5, 1fr);
            }
        }
        
        div {
            padding: 1rem .8rem .7rem .8rem;
            border-radius: 0.25rem;
            color: var(--text-title);
            box-shadow: 3px 3px 15px #888;
            transition: all .3s ease;
            cursor: pointer;
            position: relative;
            overflow: hidden;

            &.bot01 {
                background: var(--shape);
            }

            &.bot02 {
                background: var(--orange);
            }

            &.bot03 {
                background: var(--ciano);
                color: var(--shape);
            }

            &.bot04 {
                background: var(--red);
                color: var(--shape);
            }

            &.bot05 {
                background: var(--purple);
                color: var(--shape);
            }

            &.bot06 {
                background: var(--pink);
                color: var(--shape);
            }

            &.bot07 {
                background: var(--green);
                color: var(--shape);
            }

            &.wa {
                background: var(--wa);
                color: var(--shape);
            }

            &.fb {
                background: var(--fb);
                color: var(--shape);
            }

            &.tv {
                background: var(--tv);
                color: var(--shape);
            }

            &.ig {
                background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%);
                color: var(--shape);
            }

            &.st {
                background: var(--st);
                color: var(--shape);
            }

            &.pt {
                background: var(--pt);
                color: var(--shape);
            }

            &.ra {
                background: var(--ra);
                color: var(--shape);
            }

            &:hover {
                background: var(--green);
                transition: all .3s ease;
                color: var(--shape);
                outline: 3px solid var(--cinza);
            }

            header {
                display: block;
                text-align: center;
                font-size: .6rem;
                text-transform: uppercase;
                font-weight: 500;

                svg {
                    position: absolute;
                    left: .4rem;
                    top: .4rem;
                    font-size: 2.3rem;
                    opacity: .3;
                }

                div {
                    font-weight: 500;
                    font-size: .8rem;
                    padding: 0.4rem;
                    background: var(--black);
                    color: var(--shape);
                    border-radius: .4rem;
                    margin-top: 1.2rem;
                    box-shadow: none;
                    position: relative;

                    img {
                        width:20px;
                        height: 20px;
                        position: absolute;
                        left: 1rem;
                        top: .3rem;
                    }

                    span {
                        opacity: .3;
                    }

                    &:hover {
                        background: var(--cinza);
                        outline: none;
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
    }

    
`;