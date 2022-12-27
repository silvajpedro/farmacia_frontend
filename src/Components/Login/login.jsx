import React from "react";
import * as S from "./login_style.js"
import logo from "../../Assets/logo.png"
export default function login(){
    return(
        <>
       <S.MainBox>
        <S.LoginBox>
            <S.LogoContainer>
            <S.Logo src={logo} alt="" />
            </S.LogoContainer>
            <form>

            </form>
        </S.LoginBox>
       </S.MainBox>
        </>
    )
}