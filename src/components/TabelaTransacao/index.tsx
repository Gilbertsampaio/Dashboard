import { useTransactions } from "../../hooks/useTransactions";
import { Container } from "./styles";

export function TabelaTransacao() {

    const { transacoes } = useTransactions();
    
    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    {transacoes.map(transacao => (
                        <tr key={transacao.id} className="product">
                            <td>{transacao.title}</td>
                            <td className={transacao.type}>
                                {new Intl.NumberFormat('pt-BR', {
                                    style: 'currency',
                                    currency: 'BRL'
                                }).format(transacao.amount)}
                            </td>
                            <td>{transacao.category}</td>
                            <td>
                                {new Intl.DateTimeFormat('pt-BR').format(
                                    new Date(transacao.createdAt)
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Container>
    );
}