import HighPassLogo from "../assets/img/HighPassLogo";
import ButtonsIndex from "../components/ButtonsIndex";

const NavbarIndex = () => {
  return (
    <header>
    <nav className="navbarIndex">
      <div className="containerContentNavbarIndex">
        <HighPassLogo  className="sizeNormalLogoHighPass"/>
        <div className="containerButtonsNavbarIndex">
          <ButtonsIndex />
        </div>
      </div>
    </nav>
    </header>
  );
};

export default NavbarIndex;
