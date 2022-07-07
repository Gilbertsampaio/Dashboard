import { ContainerModuloBotao } from "./styles";
import { FaFacebook, FaGlobeAmericas, FaInstagram, FaSitemap, FaWhatsapp } from "react-icons/fa";
import { IoMdRadio } from "react-icons/io"
import { FiMonitor } from "react-icons/fi";
import { TbHeartRateMonitor } from "react-icons/tb";

export function ModuloBotao3() {

    return (
        <ContainerModuloBotao>
            <div className="tituloModalidade">
                <h3>Principais Origem de Mídia</h3>
            </div>
            <div className="divContainerBotoes">
                <div className="wa">
                    <header>
                        <FaWhatsapp className="iconPosition" />
                        <p>WhatsApp</p>
                        <div>847 <span>|</span> 43%</div>
                    </header>
                </div>
                <div className="fb">
                    <header>
                        <FaFacebook className="iconPosition" />
                        <p>Facebook</p>
                        <div>1328 <span>|</span> 70%</div>
                    </header>
                </div>
                <div className="ig">
                    <header>
                        <FaInstagram className="iconPosition" />
                        <p>Instagram</p>
                        <div>225 <span>|</span> 55%</div>
                    </header>
                </div>
                <div className="st">
                    <header>
                        <FaGlobeAmericas className="iconPosition" />
                        <p>Site</p>
                        <div>488 <span>|</span> 43%</div>
                    </header>
                </div>
                <div className="pt">
                    <header>
                        <FaSitemap className="iconPosition" />
                        <p>Portais</p>
                        <div>2249 <span>|</span> 17%</div>
                    </header>
                </div>
                <div className="tv">
                    <header>
                        <TbHeartRateMonitor className="iconPosition" />
                        <p>Televisão</p>
                        <div>54 <span>|</span> 25%</div>
                    </header>
                </div>
                <div className="ra">
                    <header>
                        <IoMdRadio className="iconPosition" />
                        <p>Rádio</p>
                        <div>2249 <span>|</span> 18%</div>
                    </header>
                </div>
            </div>
        </ContainerModuloBotao>
    )
}