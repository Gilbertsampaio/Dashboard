import logoImg from '../../assets/nenhum.png'
import { Container, Content } from './styles'
import { FiPlus } from "react-icons/fi"

interface HeaderProps {
    onAbrirModalTransacao: () => void;
}

/*
<Container>
    <Content>
        <img src={logoImg} alt="Sua logo aqui" />
        <button type="button" onClick={onAbrirModalTransacao}>
            <FiPlus />
            Nova transação 
        </button>
        
    </Content>
</Container>
*/

export function Header({ onAbrirModalTransacao }: HeaderProps) {

    return (
        <Container>
            <Content>
                
                
            </Content>
        </Container>
    )
}