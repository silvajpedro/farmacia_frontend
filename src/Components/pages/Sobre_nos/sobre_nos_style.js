import styled from "styled-components";
import {RegisterLogoContainer} from "../../Cadastro/cadastro_style.js"
export const MainAboutUs = styled.main`

background: #D2FCF6;
height: 100vh;
`
export const LogoBox = styled(RegisterLogoContainer)`
height: 36vh;
`
export const BigLogo = styled.img`
object-fit:cover;
`
export const FirstSectionBox = styled.section`
display: flex;
align-items: center;
justify-content: space-evenly;
flex-direction: column;
/* border: solid; */
height: 31vh;
`
export const TitleBox = styled(FirstSectionBox)`
height: 17.5vh;
p{
    font-family: "Quicksand", sans-serif;
    font-size: 1.56vw;
}
`
export const TitleHome = styled.h1`
font-family: "Quicksand", sans-serif;
font-size: 2.95vw;
`
export const ButtonsHomeBox = styled.div`
display: flex;
justify-content: space-between;
/* border: solid; */
width:23.7vw;
`
export const RegisterProduct = styled.button`
width: 13.02vw;
height: 5.2vh;
background: #4D3EFC;
border: none;
color: #fff;
font-size: 1.02vw;
border-radius:4px;
letter-spacing: 0.1px;
cursor: pointer;
&:hover{
    opacity: 0.85;
}
`
export const SeeProduct = styled(RegisterProduct)`
width: 9.6vw;
background: transparent;
color: #4D3EFC;
border: solid 1px;
`