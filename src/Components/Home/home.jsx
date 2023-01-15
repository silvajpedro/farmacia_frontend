import React from "react";
import * as S from "./home_style.js"
export default function Home(){
    return(
        <>
        <S.UnderConstruction>
            <img src="https://gifimage.net/wp-content/uploads/2018/05/site-em-constru%C3%83%C2%A7%C3%83o-gif-animado-2.gif" draggable="false" alt="" />
            <S.ProfileImage src={localStorage.getItem("foto")} alt="" />
        </S.UnderConstruction>
        </>
    )
}