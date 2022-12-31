import styled from "styled-components";
import background from "../../Assets/rainbow-vortex.png";
import cadeado from "../../Assets/cadeado_senha.png";
import usuario from "../../Assets/usuario.png";

export const MainBox = styled.main`
  @import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&display=swap");
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${background});
  height: 100vh;
  background-size: 100%;
`;
export const LoginBox = styled.section`
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
  height: 30vh;
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
  /* border: solid; */
  height: 40vh;
  label {
    position: relative;
    top: 0.5vh;
    right: -0.1vw;
    font-size: 1.2vw;
  }
`;
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
  height: 1.8px;
  transition: ease-in-out 0.6s;
  box-shadow: ${(props) =>
    props.isOn ? "none" : "inset #1976D2 30vw 0px 0px 0px"};
`;
export const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid;
  height: 18vh;
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
  }
`;
