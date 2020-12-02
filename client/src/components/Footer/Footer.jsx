import './Footer.css';
import heartIcon from './assets/heartIcon.svg'
import codeIcon from './assets/codeIcon.svg'

function Footer() {
    return (
        <footer className="footer">
            <a href="https://citi.org.br/" target="_blank" rel="noreferrer">© 2020 CITi - Todos os direitos reservados</a>
            <p className="parte1">Made with <img src={ codeIcon }/></p>
            <p className="parte2">and <img src={ heartIcon }/></p>
            <p className="parte3">by CITi</p>
        </footer>
    );
  }
  
  export default Footer;