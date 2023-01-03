import styled from "styled-components";
import { LoginBox, MainBox, LogoContainer, Logo, FormBox, UserInput } from "../Login/login_style.js";

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
border:solid;
height:65vh;
width:78%;
padding-top: 1vh;
`
export const RegisterInput = styled(UserInput)`

`