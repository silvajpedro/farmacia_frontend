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
            <label>Usuário*</label>
            <S.RegisterInput type="text" />
            <label>Foto(url)</label>
            <S.RegisterInput type="text" />
            <label>CPF*</label>
            <S.RegisterInput type="text" />
            <label>Endereço*</label>
            <S.RegisterInput type="text" />
            <label>Senha*</label>
            <S.RegisterInput type="text" />
            <label>Confirmar Senha*</label>
            <S.RegisterInput type="text" />
          </S.RegisterForm>
        </S.RegisterBox>
      </S.RegisterMainBox>
    </>
  );
}
