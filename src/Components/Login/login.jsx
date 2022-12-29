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
                <input onClick={()=>( (setOn(!On)) (setActive(true)))} type="text" placeholder="Entre com seu usuário" title="digite seu nome"/>
                <S.Line  isOn={On}></S.Line>
                <label>Senha</label>
                <input onClick={()=>( (setOn(true)) (setActive(!active)) )} type="password" placeholder="Entre com sua senha" title="digite seu nome"/>
                <S.Line isOn={active}></S.Line>
                {/* <button>Logar</button> */}
            </S.FormBox>
        </S.LoginBox>
       </S.MainBox>
        </>
    )
}