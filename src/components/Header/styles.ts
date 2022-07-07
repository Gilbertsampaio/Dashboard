import styled from "styled-components";

export const Container = styled.header`
    background: var(--cinza);

    img {
        width: auto;
        height: 3rem;
    }
`;

export const Content = styled.div`
    max-width: calc(100% - 50px);
    margin: 0 auto;
    padding: 2rem 1rem 7rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media only screen and (min-device-width: 414px) and (max-device-height: 736px) and (orientation : landscape) {

        max-width: 500px;
        padding: 2rem 1rem 4rem;

    }

    button {
        font-size: 1rem;
        color: #fff;
        background: var(--black);
        border: 0;
        padding: 0 2rem;
        border-radius: 0.25rem;
        height: 3rem;
        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.9);
        }

        svg {
            font-size: 1.25rem;
            margin-right: 5px;
            margin-bottom: -3px;
        }
    }
`;
