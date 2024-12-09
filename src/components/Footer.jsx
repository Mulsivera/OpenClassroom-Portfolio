import { FaLinkedin } from "react-icons/fa";

import "../style/Footer.css"

function Footer () {
    return (
        <div className="FooterDiv">
            <p className="FooterName">Adrien Da Silva Ferreira</p>
            <div className="FooterContacts">
                <a href="mailto:adrien.dasilva.ferreira@gmail.com" className="FooterMail">adrien.dasilva.ferreira@gmail.com</a>
                <a href="https://www.linkedin.com/in/adrien-da-silva-ferreira-910768252/" title="Mon compte linkedin"><FaLinkedin className="FooterIcon" /></a>
            </div>
        </div>
    )
}

export default Footer