import React from "react";
import * as S from "./home_routes_style.js";
import Logo from "../../Assets/logo.png";
import Usuario from "../../Assets/usuario_home.png";
import Carrinho from "../../Assets/carrinho_compras.png";

export default function HomeRoutes(){
    return(
        <>
        <S.NavigationBox>
            <S.Logo src={Logo} alt="" />
            <S.ListBox>
                <S.Links to="/produtos"><li>Produtos</li></S.Links>
                <S.Links to="/categorias"><li>Categorias</li></S.Links>
                <S.Links to="/cadastrar_cat"><li>Cadastrar Categoria</li></S.Links>
                <S.Links to="/equipe"><li>Equipe</li></S.Links>
                <S.Links to="/sobre_nos"><li>Sobre nós</li></S.Links>
            </S.ListBox>
            <S.IconsBox>
                <S.UserIcon src={Usuario} alt="" />
                    <S.ShopIcon src={Carrinho} alt="" />
            </S.IconsBox>
            <S.ExitButton>SAIR</S.ExitButton>
        </S.NavigationBox>
        </>
    )
}