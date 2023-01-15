import React from "react";
import * as S from "./error_style.js"
import Error_Image from "../../Assets/error-404.png"

export default function Error(){
    return(
        <>
        <S.ErrorBox>
        <S.ErrorImage src={Error_Image} draggable="false" alt="" />
        </S.ErrorBox>
        </>
    )
}