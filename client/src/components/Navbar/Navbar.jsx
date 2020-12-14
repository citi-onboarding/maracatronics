import './Navbar.css';
import logoMaraca from "../assets/logoMaracaNavbar.svg";


function Navbar() {

    const toggleMenu = () => {
        const menu = document.querySelector('.menuList')
        menu.classList.toggle('activeMenu')
    }

    window.addEventListener('scroll', () => {
        console.log(window.pageYOffset)
    })

    return (
        <header className="navbar">

            <img src={logoMaraca} alt="logo do maracatronics" className="logoNavBar"></img>

            <div className="botaoHamburguer" onClick={toggleMenu}>
            </div>

            <div className="menuNavbar">
                <ul className="menuList">
                    <li id="inicioText">
                        <a href="#imagemBanner">Início</a>
                    </li>
                    
                    <li id="sobreText">
                        <a href="#quemSomosSection">Sobre o Maracatronics</a>
                    </li>

                    <li id="robosText">
                        <a href="#robosSectionId">Nossos robôs</a>
                        
                    </li>

                    <li id="contatoText">
                        <a href="#contatoSection">Contato</a>
                    </li>
                </ul>
            </div>

        </header>
    );
  
  };

export default Navbar;