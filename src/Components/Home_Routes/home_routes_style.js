import styled from "styled-components";
import { Link } from "react-router-dom";


export const NavigationBox = styled.nav`
position: sticky;
top: 0;
display: flex;
align-items: center;
justify-content: space-around;
background-color: #D2FCF6;
height: 13.5vh;
`
export const Logo = styled.img`
width: 7.2vw;
`
export const LinkBox = styled.section`
display: flex;
align-items: center;
justify-content: center;
/* border: solid; */
width:75vw;
`
export const ListBox = styled.ul`
display: flex;
justify-content: space-around;
align-items: center;
list-style: none;
/* border: solid; */
width: 56.5vw;
`
export const Links = styled(Link)`
text-decoration: none;
font-size:1.32vw;
font-family: "Quicksand", sans-serif;
font-weight: 900;
color: #000;
&:hover{
    opacity: 0.5;
}
`
export const IconsBox = styled.div`
position: relative;
display: flex;
justify-content: space-around;
align-items: center;
width: 11vw;
/* border: solid; */
`
export const UserIcon = styled.img`
width: 5vw;
/* height: 9vh; */
border: solid 2px #4D3EFC;
border-radius: 50%;
cursor: pointer;
&:hover{
    opacity: 0.5;
}
`

export const ShopIcon = styled.img`
width: 2.9vw;
margin-top:3px;
cursor: pointer;
`
export const ShopItens = styled.p`
position: absolute;
top: 5vh;
right:7vw;
text-align: center;
border: solid 1px #0000EE;
background-color:#F1F3F4;
color:#000;
width:1.6vw;
height:3.4vh;
font-weight: 600;
border-radius:55%;
`
export const ExitButton = styled.button`
background: transparent;
width: 5vw;
height: 5.5vh;
cursor: pointer;
border-radius: 6px;
border:solid 1.9px;
&:hover{
    opacity: 0.5;
}
`