import styled from "styled-components";
import background from "../../Assets/rainbow-vortex.png";

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
  display:flex;
    flex-direction: column;
    width:66%;
    input{
        background-color: transparent;
        border: none;
        outline: none;
    }
`
export const Line = styled.div`
background-color: #ffff;
height:1.5px;
transition: ease-in-out 0.9s;
box-shadow: ${(props)=> (props.isOn ? 'none': 'inset #1976D2 30vw 0px 0px 0px')};
`
export const LogoContainer = styled(MainBox)`
  background-image: none;
  height: 33vh;
`;
export const Logo = styled.img`
  width: 10.54vw;
`;
