import styled from "styled-components";
import background from "../../Assets/rainbow-vortex.png";
import cadeado from "../../Assets/cadeado_senha.png"

export const MainBox = styled.main`
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
export const FormBox = styled.form`
  display: flex;
  flex-direction: column;
  justify-content:space-evenly;
  width: 66%;
  color: #ccbcad;
  /* border: solid; */
  height: 22vh;
  label{
    font-size:1.2vw;
  };
  input {
    position: relative;
    top: 1vh;
    background-color: transparent;
    border: none;
    outline: none;
    height: 4vh;
    padding-left: 2vw;
    color: #ffff;
    &::placeholder{
      font-size:1.2vw;
    }
    
  }
  input:nth-child(2){
    font-size: 1.2vw;
  }
  input:nth-child(5){
    background-position:0 0;
    background-image: url(${cadeado});
    background-repeat: no-repeat;
    background-size: 8%;
    font-size: 1.4vw;
  }
`;
export const Line = styled.div`
  background-color: #ffff;
  height: 1.8px;
  transition: ease-in-out 0.9s;
  box-shadow: ${(props) => props.isOn ? "none" : "inset #1976D2 30vw 0px 0px 0px"};
`;
export const LogoContainer = styled(MainBox)`
  background-image: none;
  height: 30vh;
`;
export const Logo = styled.img`
  width: 10.54vw;
`;
