import React from "react";
import * as S from "./cadastro_style.js";
import logo from "../../Assets/logo.png";
import { GlobalStyle } from "../Login/login_style.js";

export default function Cadastro() {
  return (
    <>
      <GlobalStyle />
      <S.RegisterMainBox>
        <S.RegisterBox>
          <S.RegisterLogoContainer>
            <S.RegisterLogo src={logo} alt="" />
          </S.RegisterLogoContainer>
          <S.RegisterForm>
            <label>Nome*</label>
            <S.RegisterInput type="text" />
            <S.RegisterLine></S.RegisterLine>
            <label>Usuário*</label>
            <S.RegisterInput type="text" />
            <S.RegisterLine></S.RegisterLine>
            <label>Foto(url)</label>
            <S.RegisterInput type="text" />
            <S.RegisterLine></S.RegisterLine>
            <label>CPF*</label>
            <S.RegisterInput type="text" />
               <S.RegisterLine></S.RegisterLine>
            <label>Endereço*</label>
            <S.RegisterInput type="text" />
               <S.RegisterLine></S.RegisterLine>
            <label>Senha*</label>
            <S.RegisterInput type="text" />
               <S.RegisterLine></S.RegisterLine>
            <label>Confirmar Senha*</label>
            <S.RegisterInput type="text" />
               <S.RegisterLine></S.RegisterLine>
          </S.RegisterForm>
        </S.RegisterBox>
      </S.RegisterMainBox>
    </>
  );
}
