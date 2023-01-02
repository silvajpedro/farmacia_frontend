import React, {useState} from "react";
import * as S from "./login_style.js"
import logo from "../../Assets/logo.png"
export default function Login(){
const [On, setOn] = useState(true)
const [active, setActive] = useState(true)
    return(
        <>
       <S.MainBox>
        <S.LoginBox>
            <S.LogoContainer>
            <S.Logo src={logo} alt="" />
            </S.LogoContainer>
            <S.FormBox onSubmit={(e)=> e.preventDefault()}>
                <label>Usuário</label>
                <S.UserInput onClick={()=>( (setOn(!On)) (setActive(true)))} type="text" placeholder="Entre com seu usuário" title="digite seu nome"/>
                <S.Line  isOn={On}></S.Line>
                <label>Senha</label>
                <S.PasswordInput onClick={()=>( (setOn(true)) (setActive(!active)) )} type="password" placeholder="Entre com sua senha" title="digite seu nome"/>
                <S.SecondLine isOn={active}></S.SecondLine>
                <S.ButtonBox>
                <button>LOGAR</button>
                </S.ButtonBox>
            </S.FormBox>
                <S.RegisterBox>
                    <p>Não tem uma conta?</p>
                    <ul>
                        <li>Cadastre-se</li>
                    </ul>
                </S.RegisterBox>
        </S.LoginBox>
       </S.MainBox>
        </>
    )
}