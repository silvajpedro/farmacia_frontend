import React, { useState } from "react";
import * as S from "./cadastro_style.js";
import logo from "../../Assets/logo.png";
import X from "../../Assets/X.png"
import { GlobalStyle } from "../Login/login_style.js";
import Password from "../../Assets/ver_senha2.png";
import { Link } from "react-router-dom";

export default function Cadastro() {
  
  // const nodeList = document.querySelectorAll("div");
  // console.log(nodeList)
  // const elements = Array.from(nodeList)
  // console.log(elements)

  // const [isTrue,setIsTrue] = useState("")
  const [FirstLine, setFirstLine] = useState("");
  const [SecondLine, setSecondLine] = useState("");
  const [ThirdLine, setThirdLine] = useState("");
  const [FourthLine, setFourthLine] = useState("");
  const [FifthLine, setFifthLine] = useState("");
  const [SixthLine, setSixthLine] = useState("");
  const [SeventhLine, setSeventhLine] = useState("");
  const [hidePassword, setHidePassword] = useState("password");
  const [SecondHidePassword, setSecondHidePassword] = useState("password");
  const [UserName, setUserName] = useState("");
  const [UserEmail, setUserEmail] = useState("");
  const [UserPhoto, setUserPhoto] = useState("");
  const [UserDocument, setUserDocument] = useState("");
  const [UserAddress, setUserAddress] = useState("");
  const [UserPassword, setUserPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [ConfirmRegister, setConfirmRegister] = useState(false);
  
  const UploadInfos = () =>{
    localStorage.setItem("nome", UserName);
    localStorage.setItem("email", UserEmail);
    localStorage.setItem("foto", UserPhoto);
    localStorage.setItem("cpf", UserDocument);
    localStorage.setItem("endereco", UserAddress);
    localStorage.setItem("senha", UserPassword);
    localStorage.setItem("confirmsenha", ConfirmPassword);
    setTimeout(()=>{
      setUserName("");
      setUserEmail("");
      setUserPhoto("");
      setUserDocument("");
      setUserAddress("");
      setUserPassword("");
      setConfirmPassword("");
      setConfirmRegister(!ConfirmRegister)
    },500)
  }
  const WarningInfo = () =>{
    if(UserName === ""){
      setFirstLine("danger")
    } else if(UserEmail === ""){
      setSecondLine("danger")
    } else if(UserPhoto ===""){
      setThirdLine("danger")
    } else if(UserDocument === ""){
      setFourthLine("danger")
    } else if(UserAddress === ""){
      setFifthLine("danger")
    } else if(UserPassword === ""){
      setSixthLine("danger")
    } else if(UserPassword.length < 3){
      alert("A senha não pode ter menos de 3 caracteres")
      setSixthLine("danger")
    } else if(ConfirmPassword === ""){
      setSeventhLine("danger")
    } else if( UserPassword !== ConfirmPassword){
      alert("As senhas não conferem")
      setSixthLine("danger")
      setSeventhLine("danger")
    }
  }

  return (
    <>
      <GlobalStyle />
      { ConfirmRegister &&  <Link to="/"><S.X src={X} alt=""  /></Link> }
<S.RegisterMainBox>
    
      {ConfirmRegister && <S.NoticeBox> <p>Seu cadastro foi concluído!</p> <p>Obrigado😁</p> </S.NoticeBox> }
        
        <S.RegisterBox
          onMouseLeave={() => {
            setFirstLine(true);
            setSecondLine(true);
            setThirdLine(true);
            setFourthLine(true);
            setFifthLine(true);
            setSixthLine(true);
            setSeventhLine(true); 
          }}
          >
          <S.RegisterLogoContainer>
            <S.RegisterLogo src={logo} alt="" />
          </S.RegisterLogoContainer>
          <S.RegisterForm onSubmit={(e)=>{ e.preventDefault()}}>
            <S.Label isTrue={FirstLine !== "danger"}>Nome*</S.Label>
          <S.RegisterInput
              onClick={() => {
                setFirstLine("primary");
                setSecondLine("");
                setThirdLine("");
                setFourthLine("");
                setFifthLine("");
                setSixthLine("");
                setSeventhLine("");
              }}
              type="text" required onChange={(e)=>{setUserName(e.target.value)}} value={UserName} />

            <S.RegisterLine  boxShadow={FirstLine}></S.RegisterLine>
            <S.Label isTrue={SecondLine !== "danger"}>E-mail de Usuário*</S.Label>
            <S.RegisterInput
              onClick={() => {
                setFirstLine("");
                setSecondLine("primary");
                setThirdLine("");
                setFourthLine("");
                setFifthLine("");
                setSixthLine("");
                setSeventhLine("");
              }}
              type="email" required onChange={(e)=>{setUserEmail(e.target.value)}} value={UserEmail}
              />

            <S.RegisterLine  boxShadow={SecondLine}></S.RegisterLine>
            <S.Label  isTrue={ThirdLine !== "danger"}>Foto(url)*</S.Label>
            <S.RegisterInput
              onClick={() => {
                setFirstLine("");
                setSecondLine("");
                setThirdLine("primary");
                setFourthLine("");
                setFifthLine("");
                setSixthLine("");
                setSeventhLine("");
              }}
              type="text" required  onChange={(e)=>{setUserPhoto(e.target.value)}} value={UserPhoto} />

            <S.RegisterLine boxShadow={ThirdLine}></S.RegisterLine>
            <S.Label isTrue={FourthLine !== "danger"}>CPF*</S.Label>
            <S.RegisterInput
              onClick={() => {
                setFirstLine("");
                setSecondLine("");
                setThirdLine("");
                setFourthLine("primary");
                setFifthLine("");
                setSixthLine("");
                setSeventhLine("");
              }}
              type="text" required onChange={(e)=>{setUserDocument(e.target.value)}} value={UserDocument} 
              />
            <S.RegisterLine boxShadow={FourthLine}></S.RegisterLine>
            <S.Label isTrue={FifthLine !== "danger"}>Endereço*</S.Label>
            <S.RegisterInput
              onClick={() => {
                setFirstLine("");
                setSecondLine("");
                setThirdLine("");
                setFourthLine("");
                setFifthLine("primary");
                setSixthLine("");
                setSeventhLine("");
              }}
              type="text" required onChange={(e)=>{setUserAddress(e.target.value)}} value={UserAddress}
              /> 
            <S.RegisterLine boxShadow={FifthLine}></S.RegisterLine>
            <S.Label isTrue={SixthLine !== "danger"}>Senha*</S.Label>
            <S.RegisterInput
              onClick={() => {
                setFirstLine("");
                setSecondLine("");
                setThirdLine("");
                setFourthLine("");
                setFifthLine("");
                setSixthLine("primary");
                setSeventhLine("");
              }}
              type={hidePassword} required onChange={(e)=>{setUserPassword(e.target.value)}} value={UserPassword}
              />
            <S.RegisterLine boxShadow={SixthLine}></S.RegisterLine>
            {UserPassword.length > 3 && <S.SeePasswordRegister src={Password} alt="" onClick={() => { hidePassword !== "text" ? setHidePassword("text"):setHidePassword("password")}} />}
            <S.Label isTrue={SeventhLine !== "danger"}>Confirmar Senha*</S.Label>
            <S.RegisterInput 
              onClick={() => {
                setFirstLine("");
                setSecondLine("");
                setThirdLine("");
                setFourthLine("");
                setFifthLine("");
                setSixthLine("");
                setSeventhLine("primary");
              }} type={SecondHidePassword} required onChange={(e) => { setConfirmPassword(e.target.value)}} value={ConfirmPassword}
              />

            <S.RegisterLine boxShadow={SeventhLine}></S.RegisterLine>
            {ConfirmPassword.length > 3 && <S.SecondSeePasswordRegister src={Password} alt="" onClick={() =>{ SecondHidePassword !== "text" ? setSecondHidePassword("text"):setSecondHidePassword("password")}}/> }
          <S.ButtonsBox>
            <button onClick={()=>{UserName && UserEmail && UserPhoto && UserDocument && UserAddress && UserPassword && ConfirmPassword !== "" && UserPassword === ConfirmPassword && UserPassword.length >= 4 ? UploadInfos() : WarningInfo()}}>CADASTRAR</button>
            <button>
              <S.LinkBack to="/">CANCELAR</S.LinkBack>
            </button>
          </S.ButtonsBox>
          </S.RegisterForm>
        </S.RegisterBox>
      </S.RegisterMainBox>
            {ConfirmRegister &&  <S.BackgroundBlack></S.BackgroundBlack> }
    </>
  );
}
