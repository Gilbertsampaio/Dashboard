import { FaBan, FaCalendarCheck, FaCheckCircle, FaClipboardList, FaExclamationTriangle, FaHandPointDown, FaHandsHelping } from "react-icons/fa";
import { ContainerModuloBotao } from "./styles";

export function ModuloBotao2() {

    return (
        <ContainerModuloBotao>
            <div className="tituloModalidade">
                <h3>Resultado do Mês</h3>
            </div>
            <div className="divContainerBotoes">
                <div className="bot01">
                    <header>
                        <FaClipboardList className="iconPosition" />
                        <p>Todos os leads</p>
                        <div>847</div>
                    </header>
                </div>
                <div className="bot02">
                    <header>
                        <FaExclamationTriangle className="iconPosition" />
                        <p>Sem atendimento</p>
                        <div>1328</div>
                    </header>
                </div>
                <div className="bot03">
                    <header>
                        <FaHandsHelping className="iconPosition" />
                        <p>Em negociação</p>
                        <div>54</div>
                    </header>
                </div>
                <div className="bot04">
                    <header>
                        <FaBan className="iconPosition" />
                        <p>Não se aplica</p>
                        <div>225</div>
                    </header>
                </div>
                <div className="bot05">
                    <header>
                        <FaHandPointDown className="iconPosition" />
                        <p>Perdidos</p>
                        <div>488</div>
                    </header>
                </div>
                <div className="bot06">
                    <header>
                        <FaCalendarCheck className="iconPosition" />
                        <p>Agendados</p>
                        <div>2249</div>
                    </header>
                </div>
                <div className="bot07">
                    <header>
                        <FaCheckCircle className="iconPosition" />
                        <p>Aproveitamento</p>
                        <div>16,85%</div>
                    </header>
                </div>
            </div>
        </ContainerModuloBotao>
    )
}