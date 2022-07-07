import { BsCalendar2DayFill, BsCalendar2MonthFill, BsCalendar2RangeFill } from "react-icons/bs";
import { SiGooglecalendar } from "react-icons/si";
import { MdChangeCircle } from "react-icons/md";
import { FaBan, FaCalendarCheck, FaCheckCircle, FaClipboardList, FaExclamationTriangle, FaHandPointDown, FaHandsHelping } from "react-icons/fa";
import { ContainerModuloBotao } from "./styles";
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';

export function ModuloBotao() {

    return (
        <ContainerModuloBotao>
            <div className="tituloModalidade">
                <h3>Resultado Gerais</h3>
            </div>
            <div className="divContainerBotoes noBorder fixed">
                <div className="bot01">
                    <header>
                        <SiGooglecalendar className="iconPosition" />
                        <p>Leads de Hoje</p>
                        <div>847</div>
                    </header>
                </div>
                <div className="bot01">
                    <header>
                        <BsCalendar2DayFill className="iconPosition" />
                        <p>Leads da Semana</p>
                        <div>1328</div>
                    </header>
                </div>
                <div className="bot01">
                    <header>
                        <BsCalendar2RangeFill className="iconPosition" />
                        <p>Leads do Mês</p>
                        <div>54</div>
                    </header>
                </div>
                <div className="bot01">
                    <header>
                        <BsCalendar2MonthFill className="iconPosition" />
                        <p>Leads do Mês Anterior</p>
                        <div>225</div>
                    </header>
                </div>
                <div className="bot01">
                    <header>
                        <MdChangeCircle className="iconPosition" />
                        <p>Relação ao Mês Anterior</p>
                        <div>
                            +12,86%
                            <img src={incomeImg} alt="Entradas" />
                        </div>
                    </header>
                </div>
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
                        <div>19,47%</div>
                    </header>
                </div>
            </div>
        </ContainerModuloBotao>
    )
}