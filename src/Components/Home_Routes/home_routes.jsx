import React, {useState} from "react";
import * as S from "./home_routes_style.js";
import Logo from "../../Assets/logo.png";
import Usuario from "../../Assets/usuario_home.png";
import Carrinho from "../../Assets/carrinho_compras.png";
import { Link } from "react-router-dom";

export default function HomeRoutes(){
    const [Itens,setItens] = useState(0);
    return(
        <>
        <S.NavigationBox onLoad={()=>{localStorage.setItem("itens", Itens)}}>
            <S.Logo src={Logo} alt="" />
            <S.LinkBox>
            <S.ListBox>
                <S.Links to="/produtos"><li>Produtos</li></S.Links>
                <S.Links to="/categorias"><li>Categorias</li></S.Links>
                <S.Links to="/cadastrar_cat"><li>Cadastrar Categoria</li></S.Links>
                <S.Links to="/equipe"><li>Equipe</li></S.Links>
                <S.Links to="/home"><li>Sobre nós</li></S.Links>
            <S.IconsBox>
                <S.UserIcon src={Usuario} alt="" />
                    <S.ShopIcon src={Carrinho} alt="" />
                 { Itens > 0  &&  <S.ShopItens>{Itens}</S.ShopItens> }
            </S.IconsBox>
            </S.ListBox>
            </S.LinkBox>
            <Link to="/"><S.ExitButton>SAIR</S.ExitButton></Link>
        </S.NavigationBox>
        </>
    )
}