import styled from "styled-components";
import { Link } from "react-router-dom";
export const NavigationBox = styled.nav`
display: flex;
background-color: #D2FCF6;
height: 13vh;
`
export const Logo = styled.img`
width: 7.2vw;
margin-left: 1vw;
`
export const ListBox = styled.ul`
display: flex;
justify-content: space-around;
align-items: center;
list-style: none;
border: solid;
width: 42vw;
`
export const Links = styled(Link)`
text-decoration: none;

`
export const IconsBox = styled.div`
display: flex;
justify-content: space-around;
width: 6.8vw;
border: solid;
`
export const UserIcon = styled.img`
width: 2vw;
height: 4vh;
`

export const ShopIcon = styled(UserIcon)`

`
export const ExitButton = styled.button`

`