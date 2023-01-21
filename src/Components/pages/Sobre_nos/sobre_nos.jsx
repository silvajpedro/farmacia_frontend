import React from "react";
import HomeRoutes from "../../Home_Routes/home_routes";
import * as S from "./sobre_nos_style.js";
import Logo from "../../../Assets/logo (1).png"

export default function SobreNos(){
    return(
        <>
            <HomeRoutes/>
            <S.MainAboutUs>
                <S.LogoBox>
                <S.BigLogo src={Logo}   alt=""/>
                </S.LogoBox>
            </S.MainAboutUs>
        </>
    )
}