import React from "react";
import HomeRoutes from "../../Home_Routes/home_routes";
import * as S from "./sobre_nos_style.js";
import Logo from "../../../Assets/logo.svg"
import Doctors from "../../../Assets/Doctors.svg"
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
                <S.SecondSectionBox>
                    <S.ProjectBox>
                        <S.FirstDivProject>
                        <S.ProjectTitle>Conheça o projeto</S.ProjectTitle>
                            <p>
                                A farmácia solidária tem o intuito de ajudar
                                pessoas que necessitam de remédios de alto custo mas
                                não possuem condições de obtê-los pelo sistema de saúde
                                convencional
                            </p>
                            <a href="https://saude.rs.gov.br/farmacia-solidaria-auxilia-a-doacao-de-medicamentos-a-populacao-vulneravel" rel="noreferrer" target="_blank"><S.ProjectButton>SAIBA MAIS</S.ProjectButton></a>
                        </S.FirstDivProject>
                        <S.SecondDivProject>
                            <S.DoctorImage src={Doctors} alt="" />
                        </S.SecondDivProject>
                    </S.ProjectBox>
                </S.SecondSectionBox>
            </S.MainAboutUs>
        </>
    )
}