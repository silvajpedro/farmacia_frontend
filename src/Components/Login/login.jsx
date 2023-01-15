import React, {useState} from "react";
import * as S from "./login_style.js"
import logo from "../../Assets/logo.png";
import Password from "../../Assets/ver_senha2.png";
import loading3 from "../../Assets/loading3.gif";
import { useNavigate } from "react-router-dom";

export default function Login(){
    
    let navigate = useNavigate();
    const [On, setOn] = useState("");
    const [Active, setActive] = useState("");
    const [Charge, setCharge] = useState(true);
    const [hidePassword, setHidePassword] = useState("password");
    const [userLogin, setUserLogin] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [IsTrue, setIsTrue] = useState(false)
    //fazer aqui isTrue do loading
    
const WarningLogin = () =>{
    if(userLogin !== localStorage.getItem("email")){
        alert("Dados de usuário inconsistentes");
        setOn("danger")
    } else if(userPassword !== localStorage.getItem("senha")){
        alert("Dados de senha incorretos");
        setActive("danger")
    }
}

    return(
        <>
        <S.GlobalStyle/>
       <S.MainBox>
       { IsTrue && <S.LoadingImage  src={loading3} draggable="false" alt=""/>}
        <S.LoginBox  onMouseLeave={()=>{ (setOn("")) (setActive(""))}}>
            <S.LogoContainer>
            <S.Logo src={logo} alt="" />
            </S.LogoContainer>
            <S.FormBox onSubmit={(e)=> e.preventDefault()}>
                <S.LabelLogin isTrue={On !== "danger"}> E-mail de Usuário</S.LabelLogin>
                <S.UserInput onClick={()=>( (setOn("primary")) (setActive(true)))} onChange={(e)=>{setUserLogin(e.target.value)}} value={userLogin} type="text" placeholder="Entre com seu usuário" title="digite seu nome"/>
                <S.Line  boxShadow={On}></S.Line>
                <S.LabelLogin isTrue={Active !== "danger"}>Senha</S.LabelLogin>
                <S.PasswordInput value={userPassword} onChange={(e)=>{setUserPassword(e.target.value)}} onClick={()=>( (setOn("")) (setActive("primary")) )} type={hidePassword} placeholder="Entre com sua senha" title="digite seu nome"/>
                <S.SecondLine boxShadow={Active}></S.SecondLine>
            {userPassword.length > 3 && <S.SeePassword src={Password} alt="" onClick={()=>(hidePassword !== "text" ? setHidePassword("text"):setHidePassword("password"))}/>}
                <S.ButtonBox>
                <button onClick={()=>{ userLogin === localStorage.getItem("email") && userPassword === localStorage.getItem("senha") ?  (setIsTrue(true)) (setTimeout(()=>{navigate("/home")}, 6300))  : WarningLogin() }}>LOGAR</button>
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