import styled from "styled-components";

export const MainProfile = styled.main`
display: flex;
justify-content: center;
align-items: center;
height: 86.5vh;
background-color: #D2FCF6;
/* border: solid; */
`
export const UserProfile = styled.section`
display: flex;
/* border: solid #4D3EFC; */
border-radius: 20px;
width: 70%;
height: 76vh;
background-color:#DEFDF8;
box-shadow: 0px 0px 10px #707070;
`
export const UserInfoBox = styled.div`
display: flex;
justify-content: center;
align-items: center;
border: solid red;
width: 50%;
img{
    width: 15vw;
    border-radius: 100%;
}
`
export const UserProducts = styled.div`
border: solid;
width: 50%;
`