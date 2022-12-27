import styled from "styled-components";
import background from "../../Assets/rainbow-vortex.png"

export const MainBox = styled.main`
display: flex;
align-items: center;
justify-content: center;
background-image: url(${background});
height: 100vh;
background-size: 100%;
`
export const LoginBox = styled.section`
 border-radius:15px;
    height: 85vh;
    width:31vw;
    background-color: #330461;
`
export const LogoContainer = styled(MainBox)`
background-image: none;
height: 32vh;
`
export const Logo = styled.img`
width: 10.54vw;
`