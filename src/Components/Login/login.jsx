import React, {useState} from "react";
import * as S from "./login_style.js"
import logo from "../../Assets/logo.png"
import Password from "../../Assets/ver_senha2.png"
export default function Login(){
const [On, setOn] = useState(true);
const [Active, setActive] = useState(true);
const [Charge, setCharge] = useState(true);
const [hidePassword, setHidePassword] = useState("password");
    return(
        <>
        <S.GlobalStyle/>
       <S.MainBox>
        <S.LoginBox  onMouseLeave={()=>{ (setOn(true)) (setActive(true))}}>
            <S.LogoContainer>
            <S.Logo src={logo} alt="" />
            </S.LogoContainer>
            <S.FormBox onSubmit={(e)=> e.preventDefault()}>
                <label>Usuário</label>
                <S.UserInput onClick={()=>( (setOn(!On)) (setActive(true)))} type="text" placeholder="Entre com seu usuário" title="digite seu nome"/>
                <S.Line  isOn={On}></S.Line>
                <label>Senha</label>
                <S.PasswordInput onClick={()=>( (setOn(true)) (setActive(!Active)) )} type={hidePassword} placeholder="Entre com sua senha" title="digite seu nome"/>
                <S.SecondLine isOn={Active}></S.SecondLine>
                <S.SeePassword src={Password} alt="" onClick={()=>(hidePassword !== "text" ? setHidePassword("text"):setHidePassword("password"))}/>
                <S.ButtonBox>
                <button>LOGAR</button>
                </S.ButtonBox>
            </S.FormBox>
                <S.RegisterBox>
                    <p>Não tem uma conta?</p>
                    <ul>
                       <li onMouseOver={()=>{setCharge(!Charge)}} onMouseLeave={()=>{setCharge(!Charge)}}><S.Links to="/cadastro">Cadastre-se</S.Links></li>
                        <S.ThirdLine isOn={Charge}></S.ThirdLine>
                    </ul>
                </S.RegisterBox>
        </S.LoginBox>
       </S.MainBox>
        </>
    )
}