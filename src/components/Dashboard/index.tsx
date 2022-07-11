import { Summary } from "../Summary";
import { Commands } from "../Commands";
import { TabelaTransacao } from "../TabelaTransacao";
import { Container } from "./styles";

export function Dashboard() {
    return (
        <Container>
            <Summary /> 
            <Commands />
            <TabelaTransacao />
        </Container>
    );
}