import styled from "styled-components";

export const Container = styled.div`
    margin-top: 4rem;

    @media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
        overflow-x: auto;
    }

    @media only screen and (min-device-width: 414px) and (max-device-height: 736px) and (orientation : landscape) {
        overflow-x: auto;
    }

    .titulo {
        color: #888;
    }

    .containerTable {
        overflow-x: auto;
        margin-bottom: 5rem;
        padding: 1rem;
        background: var(--shape);
        border-radius: 0.25rem;
    }

    table {
        width: 100%;
        border-spacing: 0 0.1rem;

        thead {

            th {
    
                &:not(.trSupervisor th) {
                    font-size: 0.8rem;
                }
                background: var(--cinza);
                color: var(--shape);
                font-weight: 400;
                padding: 0.5rem 1rem;
                text-align: left;
                line-height: 1.5rem;
                white-space: nowrap;
                text-transform: uppercase;
    
                &:first-child {
                    border-top-left-radius: 0.25rem;
                }
    
                &:last-child {
                    border-top-right-radius: 0.25rem;
                }
            }
        }

        tfoot {
            th {
                font-size: 0.8rem;
                background: var(--cinza);
                color: var(--shape);
                font-weight: 400;
                padding: 0.5rem 1rem;
                text-align: center;
                line-height: 1.5rem;
                white-space: nowrap;
                text-transform: uppercase;

                &:first-child {
                    border-bottom-left-radius: 0.25rem;
                }

                &:last-child {
                    border-bottom-right-radius: 0.25rem;
                }
            }
        }

        td {
            padding: 0.5rem 1rem;
            border: 0;
            color: var(--text-body);
            font-size: 0.8rem;

            /*&:first-child {
                color: var(--text-title);
                border-radius: 0.25rem 0 0 0.25rem;
            }

            &:last-child {
                border-radius: 0 0.25rem 0.25rem 0;
            }*/

            &:not(:first-child) {
                text-align: center;
            }

            img {
                width:20px;
                height: 20px;
                position: relative;
                left: -.5rem;
                bottom: -.2rem;
            }

            &.left {
                text-align: left;
                padding-left: 2rem;
            }

        }

        .trSupervisor {
            th {
                background-color: transparent;
                border-radius: 0.25rem;
                font-size: 0.8rem;
            }

            background: var(--cinza);
        }

        .product {
            padding: 1rem;
            border-radius: .25rem;
            background-color: #fff;
            transition: all .3s ease;
            cursor: pointer;

            &:hover {
                background-color: #e8e1e1;
                transition: all .3s ease;
            }
        }
    }

    .divSelect {
        margin-top: 2rem;
        margin-bottom: 1rem;
    }

    select {
        width: 30%;
        border: 0;
        border-radius: 0.15rem;
        background: #e8e1e1;
        font-size: 1rem;
        color: var(--text-body);
        padding: 0.5rem 1rem;
        text-align: left;
        height: 40px;

    }

    @media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
        select {
            width: 100%;
        }
    }

    @media only screen and (min-device-width: 414px) and (max-device-height: 736px) and (orientation : landscape) {
        select {
            width: 50%;
        }
    }
`;