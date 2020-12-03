import './Footer.css';
import codeIcon from "../assets/codeIcon.svg";
import heartIcon from "../assets/heartIcon.svg";

function Footer() {
    return (
        <footer className="footer">
            <a href="https://citi.org.br/" target="_blank" rel="noreferrer" className="direitos">© 2020 CITi - Todos os direitos reservados</a>
            <div className="textoFooter">
                <p>Made with</p>
                <img src={codeIcon}/>
                <p>and</p>
                <img src={heartIcon}/> 
                <p>by CITi</p>
            </div>
        </footer>
    );
  }
  
export default Footer;