import styled from "styled-components";
import background from "../../Assets/rainbow-vortex.png";
import cadeado from "../../Assets/cadeado_senha.png";
import usuario from "../../Assets/usuario.png";
import { createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
}
`;
export const MainBox = styled.main`

  @import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&display=swap");
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${background});
  background-repeat: repeat-y;
  height: 100vh;
  background-size: 100%;
`;
export const LoadingImage = styled.img`
position: absolute;
width: 9vw;
z-index: 10;
`
export const LoginBox = styled.section`
  position:relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 15px;
  height: 85vh;
  width: 31vw;
  background-color: #330461;
`;
export const LogoContainer = styled(MainBox)`
  background-image: none;
  height: 29vh;
`;
export const Logo = styled.img`
  width: 10.54vw;
`;
export const FormBox = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 66%;
  color: #ccbcad;
  height: 39vh;
  label {
    position: relative;
    top: 0.5vh;
    right: -0.1vw;
    font-size: 1.2vw;
  }
`;
export const LabelLogin = styled.label`
    color: ${(props) =>
    props.isTrue ? "#CCBCAD" : "#FF0000"};
`
export const UserInput = styled.input`
  position: relative;
  top: 0.8vh;
  background-color: transparent;
  border: none;
  outline: none;
  height: 4vh;
  padding-left: 2vw;
  color: #ffff;
  background-position: 0 3px;
  background-image: url(${usuario});
  background-repeat: no-repeat;
  background-size: 8%;
  font-size: 1.2vw;
  &::placeholder {
    font-size: 1.2vw;
  }
`;
export const PasswordInput = styled(UserInput)`
  background-position: 0 0;
  background-image: url(${cadeado});
  font-size: 1.4vw;
`;
export const Line = styled.div`
  background-color: #ffff;
  height: 0.27vh;
  transition: ease-in-out 0.8s;
  box-shadow: ${({boxShadow}) => handleColorType(boxShadow)};
`;
const handleColorType = boxShadow => {
  switch (boxShadow) {
    case "primary":
      return "inset #1976D2 30vw 0px 0px 0px";
    case "danger":
      return "inset #FF0000 30vw 0px 0px 0px";
    default:
      return "none" ;
  }
};
export const SecondLine = styled(Line)`
  height: 0.3vh;
`;
export const SeePassword = styled.img`
  position: absolute;
  width: 2.3vw;
  right: 5.8vw;
  cursor: pointer;
  margin-bottom:1.4vh;

`;
export const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 16vh;
  button {
    width: 9vw;
    height: 5.6vh;
    font-family: "Quicksand", sans-serif;
    font-weight: 700;
    font-size: 1.2vw;
    letter-spacing: 0.5px;
    color: #330461;
    background-color: #30d1bc;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
`;
export const RegisterBox = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  font-family: "Quicksand", sans-serif;
  text-align: center;
  color: #f9ffff;
  width: 14vw;
  height: 14vh;
  p {
    font-size: 1.2vw;
    font-weight: 500;
  }
  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    list-style: none;
    margin: none;
    padding: none;
  }
`;
export const Links = styled(Link)`
  font-weight: 900;
  cursor: pointer;
  text-decoration: none;
  color: #f9ffff;
`;
export const ThirdLine = styled(Line)`
  box-shadow: none;
  width: ${(props) => (props.isOn ? "0vw" : "7vw")};
  height: 0.3vh;
  transition: 0.6s;
`;
export const WhiteLoading = styled.div`
position:absolute;
top: 0vh;
background-color:  #ccbcad;
height:100vh ;
width: 100%;
opacity: 0.5;
/* z-index:1; */
`