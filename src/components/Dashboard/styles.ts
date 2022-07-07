import styled from "styled-components";

export const Container = styled.main`
    max-width: calc(100% - 50px);
    margin: 0 auto;
    padding: 0rem 1rem 1rem 1rem;

    @media only screen and (min-device-width: 414px) and (max-device-height: 736px) and (orientation : landscape) {

        margin: 1rem;
        padding: .5rem;

    }
`;