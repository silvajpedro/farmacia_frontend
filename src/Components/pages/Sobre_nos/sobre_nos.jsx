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
                <S.FirstSectionBox>
                    <S.TitleBox>
                    <S.TitleHome>Seja Bem-Vinde a Farmácia Solidária!</S.TitleHome>
                    <p>Encontre aqui o que você procura</p>
                    </S.TitleBox>
                    <S.ButtonsHomeBox>
                        <S.RegisterProduct>CADASTRAR PRODUTO</S.RegisterProduct>
                        <S.SeeProduct>VER PRODUTOS</S.SeeProduct>
                    </S.ButtonsHomeBox>
                </S.FirstSectionBox>
            </S.MainAboutUs>
        </>
    )
}