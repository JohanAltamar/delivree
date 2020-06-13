import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";


function Footer() {
    return (
        <footer id="footer" className="brand-font-family text-center">
            <h5>Developed by: <a href="https://github.com/JohanAltamar/orderTrackingApp" target="blank"><strong>Johan Altamar</strong> <FontAwesomeIcon icon={faGithub}/></a></h5>
        </footer>
    )
}

export default Footer
