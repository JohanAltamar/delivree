import React from 'react';

function Footer({ ...props }) {
    return (
        <footer
            id="footer"
            className="brand-font-family text-center"
            {...props}
        >
            <h5>
                Developed by:{' '}
                <a
                    href="https://johanaltamar.com"
                    target="blank"
                >
                    <strong>Johan Altamar</strong>{' '}
                </a>
            </h5>
        </footer>
    );
}

export default Footer;
