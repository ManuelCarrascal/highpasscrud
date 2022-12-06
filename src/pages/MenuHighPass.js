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
            <NavLink className="optionNavbarMenu" id="user" to="useroptions">
              <UserIcon />
            </NavLink>
            <NavLink
              className="optionNavbarMenu"
              id="country"
              to="countryoptions"
            >
              <CountryIcon />
            </NavLink>
            <NavLink className="optionNavbarMenu" id="project" to={"projects"}>
              <FileIcon />
            </NavLink>
            <NavLink
              className="optionNavbarMenu"
              id="category"
              to="categoriesoptions"
            >
              <TagIcon />
            </NavLink>
            <NavLink className="optionNavbarMenu" id="about" to="aboutus">
              <HelpIcon />
            </NavLink>
            <NavLink
              className="optionNavbarMenu"
              id="exit"
              to="/"
              onClick={handleClick}
            >
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
