import styled from "styled-components";
import {RegisterLogoContainer} from "../../Cadastro/cadastro_style.js"

export const colors ={
    mainColor:"#D2FCF6"
}

export const MainAboutUs = styled.main`
background:${colors.mainColor};
height: 138vh;
`
export const LogoBox = styled(RegisterLogoContainer)`
height: 36vh;
`
export const BigLogo = styled.img`
object-fit:cover;
width: 22vw;
`
export const FirstSectionBox = styled.section`
display: flex;
align-items: center;
justify-content: space-evenly;
flex-direction: column;
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
font-size: 3.25vw;
`
export const ButtonsHomeBox = styled.div`
display: flex;
justify-content: space-between;
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
    opacity: 0.80;
}
`
export const SeeProduct = styled(RegisterProduct)`
width: 9.6vw;
background: transparent;
color: #4D3EFC;
border: solid 1px;
&:hover{
    opacity: 0.50;
}
`
export const SecondSectionBox = styled.section`
display: flex;
justify-content: center;
align-items: center;
height:70vh;
`
export const ProjectBox = styled.div`
display:flex;
align-items: center;
width: 82%;
height: 55vh;
border-radius: 15px;
background:#4D3EFC;
`
export const FirstDivProject = styled.div`
position: relative;
top:-4vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 40vh;
width: 100vw;
p{
    width:36vw;
    margin-left:3vw;
    margin-top: 0.5px;
    text-align: left;
    color: #ffff;
    font-family: "Quicksand", sans-serif;
    font-weight: 600;
    font-size:  1.25vw;
}
`
export const ProjectTitle = styled.h2`
font-size: 3.7vw;
font-family: "Quicksand", sans-serif;
font-weight: 900;
color: #ffff;
text-align: center;
`
export const ProjectButton = styled(RegisterProduct)`
position: absolute;
top:33vh;
left:5vw;
color: #000;
background-color: #30D1BC;
font-family: "Quicksand", sans-serif;
font-weight: 900;
width: 7.4vw;
`
export const SecondDivProject = styled.div`
display: flex;
justify-content: center;
width:85vw;
padding-right: 1vw;
`
export const DoctorImage = styled.img`
width:33vw;
`