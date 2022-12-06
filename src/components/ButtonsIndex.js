import { Link } from "react-router-dom";
import Styled from "styled-components";

const theme = {
  login: {
    default: "var(--color-main)",
    hover: "#dd7b02",
    text_color: "black",
    padding: "5px 15px",
    border_color: "#f0f0f0",
  },
  register: {
    default: "transparent",
    hover: "#d0d0d0",
    padding: "5px 15px",
  },
};

const Button = Styled.button`
background-color: ${(props) => theme[props.theme].default};
color: ${(props) => theme[props.theme].text_color};
border-radius:0.5rem;
border-color:${(props) => theme[props.theme].border_color};
margin:0px 5px;
padding: ${(props) => theme[props.theme].padding};
text-decoration: none;
color: black;
cursor:pointer;
&:hover{
  border-color:${(props) => theme[props.theme].hover};

}
`;
Button.defaultProps = {
  theme: "login",
};
const ButtonsIndex = () => {
  return (
    <>
      <div className="containerPrincipalButtonsIndex">
        <Button theme={"register"}><Link to='/register' id="btnRegister">Registrarse</Link></Button>
        <Button theme={"login"}><Link to='/login' id="btnLogin">Iniciar Sesión</Link></Button>
      </div>
    </>
  );
};
export default ButtonsIndex;
