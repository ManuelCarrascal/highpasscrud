import { useEffect } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import CountryIcon from "../assets/img/countryIcon";
import FileIcon from "../assets/img/fileIcon";
import HelpIcon from "../assets/img/helpIcon";
import LogOffIcon from "../assets/img/logOffIcon";
import TagIcon from "../assets/img/TagIcon";
import UserIcon from "../assets/img/userIcon";

export const MenuHighPass = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    sessionStorage.removeItem("sesion");
    navigate("/login");
  };

  useEffect(() => {
    const isLogged = !!sessionStorage.getItem("sesion");
    if (!isLogged) {
      navigate("/login");
    }
  }, []);
  return (
    <>
      <div className="containerMenu">
        <header className="headerMenuNav">
          <nav className="navbarMenu">
            <NavLink className="optionNavbarMenu" to="useroptions">
              <UserIcon />
            </NavLink>
            <NavLink className="optionNavbarMenu" to="countryoptions">
              <CountryIcon />
            </NavLink>
            <NavLink className="optionNavbarMenu">
              <FileIcon />
            </NavLink>
            <NavLink className="optionNavbarMenu" to="categoriesoptions">
              <TagIcon />
            </NavLink>
            <NavLink className="optionNavbarMenu" to="aboutus">
              <HelpIcon />
            </NavLink>
            <NavLink className="optionNavbarMenu" to="/" onClick={handleClick}>
              <LogOffIcon />
            </NavLink>
          </nav>
        </header>
        <div className="containerContentCrud">
          <Outlet />
        </div>
      </div>
    </>
  );
};
