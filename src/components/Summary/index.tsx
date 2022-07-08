import { CircularProgressbar } from 'react-circular-progressbar';
import { FiChevronsRight } from 'react-icons/fi'
import profileImg from '../../assets/profile.jpg';

import { Container } from "./styles";
import 'react-circular-progressbar/dist/styles.css';

export function Summary() {

    const percentage = 12;
    const percentage2 = 37;
    const percentage3 = 80;
    const colorChats = {
        path: {
            stroke: '#33cc95',
        },
        trail: {
            stroke: '#d6d6d6',
        },
        text: {
            fill: '#33cc95',
            fontSize: '16px',
        },
        background: {
            fill: '#3e98c7',
        },
    }

    return (
        <Container>
            <div className="tituloSummary">
                <h3>Desempenho</h3>
            </div>
            <div className="divContainerSummary">
                <div className='quadros'>
                    <header>
                        <div className='divCharts dBlock'>
                            <img src={profileImg} alt="profile" />
                        </div>
                        <h4>
                            Olá, Gilbert! Seja bem vindo ao Dashboard
                        </h4>
                    </header>
                    <span className='spanContainer'>
                        <div className='divCharts dNone'>
                            <img src={profileImg} alt="profile" />
                        </div>
                        <div className='divBox pt-1'>
                            <div className='profileInfo'>
                                <b>E-mail:</b>
                                <span className='spanInfo'>sampaiogilbert@gmail.com</span>
                            </div>
                            <div className='profileInfo'>
                                <b>Telefone:</b>
                                <span className='spanInfo'>(48)99911-3040</span>
                            </div>
                            <div className='profileInfo'>
                                <b>Último acesso:</b>
                                <span className='spanInfo'>08/07/2022 14:35h</span>
                            </div>
                        </div>
                    </span>
                </div>
                <div className='quadros'>
                    <header>
                        <p>
                            <FiChevronsRight />
                            Agendamento (ABRIL)
                        </p>
                    </header>
                    <span>
                        <div className='divBox'>
                            <div className='lead'>
                                Leads:
                                <b>3560</b>
                            </div>
                            <div className='agendou'>
                                Agendou:
                                <b>730</b>
                            </div>
                        </div>
                        <div className='divCharts'>
                            <div>Seu desempenho</div>
                            <div className='center' style={{ width: 100, display: 'inline-block' }}>
                                <CircularProgressbar
                                    value={percentage}
                                    text={`${percentage}%`}
                                    styles={colorChats}
                                />
                            </div>
                        </div>
                    </span>
                </div>
                <div className='quadros'>
                    <header>
                        <p>
                            <FiChevronsRight />
                            Compareceu (ABRIL)
                        </p>
                    </header>
                    <span>
                        <div className='divBox'>
                            <div className='lead'>
                                Leads:
                                <b>730</b>
                            </div>
                            <div className='agendou'>
                                Agendou:
                                <b>719</b>
                            </div>
                        </div>
                        <div className='divCharts'>
                            <div>Seu desempenho</div>
                            <div style={{ width: 100, display: 'inline-block' }}>
                                <CircularProgressbar
                                    value={percentage2}
                                    text={`${percentage2}%`}
                                    styles={colorChats}
                                />
                            </div>
                        </div>
                    </span>
                </div>
                <div className='quadros'>
                    <header>
                        <p>
                            <FiChevronsRight />
                            Ganhos (ABRIL)
                        </p>
                    </header>
                    <span>
                        <div className='divBox'>
                            <div className='lead'>
                                Leads:
                                <b>719</b>
                            </div>
                            <div className='agendou'>
                                Agendou:
                                <b>389</b>
                            </div>
                        </div>
                        <div className='divCharts'>
                            <div>Seu desempenho</div>
                            <div style={{ width: 100, display: 'inline-block' }}>
                                <CircularProgressbar
                                    value={percentage3}
                                    text={`${percentage3}%`}
                                    styles={colorChats}
                                />
                            </div>
                        </div>
                    </span>
                </div>
            </div>
        </Container>
    )
}