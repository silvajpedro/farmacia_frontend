import styled from "styled-components";
import { LoginBox, MainBox, LogoContainer, Logo, FormBox, UserInput, Line } from "../Login/login_style.js";
import email from "../../Assets/email.png";
import camera from "../../Assets/camera_foto.png"
export const RegisterMainBox = styled(MainBox)`
height: 134vh;
background-size: cover;
`
export const RegisterBox = styled(LoginBox)`
background-color: #1D0A33;
height: 115vh;
width:33vw ;
`
export const RegisterLogoContainer = styled(LogoContainer)`
border: solid;
height: 30vh;
align-items: flex-end;
`
export const RegisterLogo = styled(Logo)`
 width: 10.55vw;
`
export const RegisterForm = styled(FormBox)`
position: relative;
top:0.5vh;
border:solid;
height:65vh;
width:78%;
input:nth-child(5){
background-image: url(${email});
}
input:nth-child(8){
    background-image: url(${camera});
}

`
export const RegisterInput = styled(UserInput)`
/* border: solid; */
height:6vh;
`
export const RegisterLine = styled(Line)`

`