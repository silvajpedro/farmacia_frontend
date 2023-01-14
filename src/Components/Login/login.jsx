import React, {useState} from "react";
import * as S from "./login_style.js"
import logo from "../../Assets/logo.png";
import Password from "../../Assets/ver_senha2.png";
import loading1 from "../../Assets/Loading1.gif";
import loading2 from "../../Assets/loading2.gif";
import loading3 from "../../Assets/loading3.gif";
export default function Login(){
const [On, setOn] = useState("");
const [Active, setActive] = useState("");
const [Charge, setCharge] = useState(true);
const [hidePassword, setHidePassword] = useState("password");
const [userLogin, setUserLogin] = useState("");
const [userPassword, setUserPassword] = useState("");
const [IsTrue, setIsTrue] = useState(false)
//fazer aqui isTrue do loading

const WarningLogin = () =>{
    if(userLogin !== localStorage.getItem("nome")){
    alert("Dados de usuário inconsistentes");
    setOn("danger")
} else if(userPassword !== localStorage.getItem("senha")){
    alert("Dados de senha incorretos");
    setActive("danger")
}
}
const SuccessLogin = () =>{

}
    return(
        <>
        <S.GlobalStyle/>
       <S.MainBox>
       { IsTrue && <S.LoadingImage src={loading3} alt=""/>}
        <S.LoginBox  onMouseLeave={()=>{ (setOn("")) (setActive(""))}}>
            <S.LogoContainer>
            <S.Logo src={logo} alt="" />
            </S.LogoContainer>
            <S.FormBox onSubmit={(e)=> e.preventDefault()}>
                <S.LabelLogin isTrue={On !== "danger"}>Usuário</S.LabelLogin>
                <S.UserInput onClick={()=>( (setOn("primary")) (setActive(true)))} onChange={(e)=>{setUserLogin(e.target.value)}} value={userLogin} type="text" placeholder="Entre com seu usuário" title="digite seu nome"/>
                <S.Line  boxShadow={On}></S.Line>
                <S.LabelLogin isTrue={Active !== "danger"}>Senha</S.LabelLogin>
                <S.PasswordInput value={userPassword} onChange={(e)=>{setUserPassword(e.target.value)}} onClick={()=>( (setOn("")) (setActive("primary")) )} type={hidePassword} placeholder="Entre com sua senha" title="digite seu nome"/>
                <S.SecondLine boxShadow={Active}></S.SecondLine>
            {userPassword.length > 3 && <S.SeePassword src={Password} alt="" onClick={()=>(hidePassword !== "text" ? setHidePassword("text"):setHidePassword("password"))}/>}
                <S.ButtonBox>
                <button onClick={()=>{ userLogin !== localStorage.getItem("nome") || userPassword !== localStorage.getItem("senha") ? WarningLogin()  : SuccessLogin() }}>LOGAR</button>
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
    { IsTrue && <S.WhiteLoading></S.WhiteLoading>}
        </>
    )
}