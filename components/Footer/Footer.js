import {FaWhatsapp, FaTelegram} from "react-icons/fa";
import {PiTelegramLogoLight} from "react-icons/pi";
import {VscMail} from "react-icons/vsc";

const Footer = () => {
    return (
        <footer id="gtco-footer" className="gtco-section" role="contentinfo">
            <div className="gtco-container">
                <div className="row row-pb-md">
                    <div className="col-md-8 gtco-footer-paragraph">
                        <h3>Cuba Excursiones</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus placerat enim et urna sagittis, rhoncus euismod. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime beatae assumenda iure, voluptate rerum incidunt veniam modi, dicta consequuntur facere id explicabo maiores ratione dolor doloremque qui. At, repellendus temporibus?</p>
                    </div>
                    <div className="col-md-4 gtco-footer-paragraph">
                      <h3>Nuestro Contácto</h3>
                      <div style={{color: 'white'}}>
                        <FaWhatsapp size={30}/>{" "}<a>+53 52887847</a>
                      </div>
                      <div style={{color: 'white'}}>
                        <PiTelegramLogoLight size={30}/>{" "}<a>+53 52887847</a>
                      </div>
                      <div style={{color: 'white'}}>
                        <VscMail size={30}/>{" "}<a>correo@gmail.com</a>
                      </div>
                    </div>
                </div>
            </div>

          <div className="gtco-copyright">
            <div className="gtco-container">
              <div className="row">
                <div className="col-md-6 text-left">
                  <p>
                    <small>&copy; 2023 Cuba Excursiones. Todos los derechos reservados. </small>
                  </p>
                </div>
                <div className="col-md-6 text-right">
                  <p>
                    <small>
                      Designed by{" "}
                      <a href="http://freehtml5.co/" target="_blank">
                        FreeHTML5.co
                      </a>{" "}
                      Demo Images:{" "}
                      <a href="http://pixeden.com/" target="_blank">
                        Pixeden
                      </a>{" "}
                      &amp;{" "}
                      <a href="http://unsplash.com" target="_blank">
                        Unsplash
                      </a>
                    </small>{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
    );
}
export default Footer;
