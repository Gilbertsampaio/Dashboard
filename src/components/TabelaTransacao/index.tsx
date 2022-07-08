import { useTransactions } from "../../hooks/useTransactions";
import { FaSearch } from "react-icons/fa";
import { Container } from "./styles";
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';

export function TabelaTransacao() {

    const { transacoes } = useTransactions();

    let labelPercentualAproveitamento = 'danger';
    let iconAproveitamento = outcomeImg;

    let labelPercentualDesempenho = 'success';
    let iconDesempenho = incomeImg;

    return (
        <Container>
            <div className="titulo">
                <h3>Atendimento por usuário no Mês</h3>
                <div className="divSelect">
                    <select name="selectUser" id="">
                        <option value="">Selecione o usuário</option>
                        <option value="1">Coordenador(a) Thais</option>
                    </select>
                </div>
            </div>
            <div className="containerTable">
                <table>
                    <thead>
                        <tr className="trSupervisor">
                            <th colSpan={11}>Equipe Supervisor(a) Lucas</th>
                        </tr>
                        <tr>
                            <th>Usuário</th>
                            <th>Atendimento</th>
                            <th>Em Negociação</th>
                            <th>Não de aplica</th>
                            <th>Perdidos</th>
                            <th>Agendados</th>
                            <th>Aproveitamento</th>
                            <th>Compar.</th>
                            <th>Ganhos</th>
                            <th>Desemp.</th>
                            <th>View</th>
                        </tr>
                    </thead>
                    <tbody>
                        {transacoes.map(transacao => (

                            <tr key={transacao.id} className="product">
                                <td>{transacao.user}</td>
                                <td>{transacao.atendimento}</td>
                                <td>{transacao.negociacao}</td>
                                <td>{transacao.naoSeAplica}</td>
                                <td>{transacao.perdidos}</td>
                                <td>{transacao.agendados}</td>
                                <td className="left"><img src={iconAproveitamento} alt="Aproveitamento" /><span className={labelPercentualAproveitamento}>{transacao.aproveitamento}%</span></td>
                                <td>{transacao.comparacao}</td>
                                <td>{transacao.ganhos}</td>
                                <td className="left"><img src={iconDesempenho} alt="Desempenho" /><span className={labelPercentualDesempenho}>{transacao.desempenho}%</span></td>
                                <td>
                                    <FaSearch />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot>
                        <tr>
                            <th>Total</th>
                            <th>571</th>
                            <th>574</th>
                            <th>160</th>
                            <th>184</th>
                            <th>781</th>
                            <th>95.33%</th>
                            <th>131</th>
                            <th>109</th>
                            <th>60.33%</th>
                            <th></th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </Container>
    );
}