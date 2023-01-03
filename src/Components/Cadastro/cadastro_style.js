import styled from "styled-components";
import { LoginBox, MainBox, LogoContainer, Logo, FormBox, UserInput, Line } from "../Login/login_style.js";
import email from "../../Assets/email.png";
import camera from "../../Assets/camera_foto.png";
import cpf from "../../Assets/cpf.png";
import cadeado from "../../Assets/cadeado_senha.png";
import endereco from "../../Assets/endereço.png"

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
input:nth-child(11){
    background-image: url(${cpf});
}
input:nth-child(14){
    background-image: url(${endereco});
}
input:nth-child(17), input:nth-child(20){
    background-image: url(${cadeado});
}
`
export const RegisterInput = styled(UserInput)`
/* border: solid; */
background-size:7.40%;
height:6vh;
`
export const RegisterLine = styled(Line)`

`