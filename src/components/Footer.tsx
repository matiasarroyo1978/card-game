import React from "react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>Desarrollado por Matías Arroyo - 2024</p>
        <div className="social-icons">
          <a
            href="https://www.linkedin.com/in/tu-perfil"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/tu-usuario"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://twitter.com/tu-usuario"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
