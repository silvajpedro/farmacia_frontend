import React, { useState } from "react";
import * as S from "./cadastro_style.js";
import logo from "../../Assets/logo.png";
import X from "../../Assets/X.png"
import { GlobalStyle } from "../Login/login_style.js";
import Password from "../../Assets/ver_senha2.png";
import { useNavigate } from "react-router-dom";

export default function Cadastro() {
  let navigate = useNavigate();
  const [FirstLine, setFirstLine] = useState(true);
  const [SecondLine, setSecondLine] = useState(true);
  const [ThirdLine, setThirdLine] = useState(true);
  const [FourthLine, setFourthLine] = useState(true);
  const [FifthLine, setFifthLine] = useState(true);
  const [SixthLine, setSixthLine] = useState(true);
  const [SeventhLine, setSeventhLine] = useState(true);
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
      document.body.getElementsByTagName("div")[1].style.boxShadow = " inset #ffff  30vw 0px 0px 0px "; 
      document.body.getElementsByTagName("label")[0].style.color = " #ccbcad";
      document.body.getElementsByTagName("div")[2].style.boxShadow = " inset #ffff  30vw 0px 0px 0px" ;
      document.body.getElementsByTagName("label")[1].style.color = " #ccbcad";
      document.body.getElementsByTagName("div")[3].style.boxShadow = " inset #ffff  30vw 0px 0px 0px" ;
      document.body.getElementsByTagName("label")[2].style.color = " #ccbcad";
      document.body.getElementsByTagName("div")[4].style.boxShadow = " inset #ffff  30vw 0px 0px 0px";
      document.body.getElementsByTagName("label")[3].style.color = " #ccbcad";
      document.body.getElementsByTagName("div")[5].style.boxShadow = " inset #ffff  30vw 0px 0px 0px" ;
      document.body.getElementsByTagName("label")[4].style.color = " #ccbcad";
      document.body.getElementsByTagName("div")[6].style.boxShadow = " inset #ffff  30vw 0px 0px 0px" ;
      document.body.getElementsByTagName("label")[5].style.color = " #ccbcad";
      document.body.getElementsByTagName("div")[7].style.boxShadow = " inset #ffff  30vw 0px 0px 0px"; 
      document.body.getElementsByTagName("label")[6].style.color = " #ccbcad";
    },500)
  }
  const WarningInfo = () =>{
    if(UserName === ""){
      alert("Preencha seu nome de usuário corretamente");
      (document.body.getElementsByTagName("div")[1].style.boxShadow = " inset red 30vw 0px 0px 0px") (document.body.getElementsByTagName("label")[0].style.color = "red");
    } else if(UserEmail === ""){
      alert("Preencha seu email corretamente");
      (document.body.getElementsByTagName("div")[2].style.boxShadow = " inset red 30vw 0px 0px 0px") (document.body.getElementsByTagName("label")[1].style.color = "red");
    } else if(UserPhoto ===""){
      alert("Preencha seu email corretamente");
      (document.body.getElementsByTagName("div")[3].style.boxShadow = " inset red 30vw 0px 0px 0px") (document.body.getElementsByTagName("label")[2].style.color = "red");
    } else if(UserDocument === ""){
      (document.body.getElementsByTagName("div")[4].style.boxShadow = " inset red 30vw 0px 0px 0px") (document.body.getElementsByTagName("label")[3].style.color = "red");
    } else if(UserAddress === ""){
      (document.body.getElementsByTagName("div")[5].style.boxShadow = " inset red 30vw 0px 0px 0px") (document.body.getElementsByTagName("label")[4].style.color = "red");
    } else if(UserPassword === ""){
      (document.body.getElementsByTagName("div")[6].style.boxShadow = " inset red 30vw 0px 0px 0px") (document.body.getElementsByTagName("label")[5].style.color = "red");
    } else if(ConfirmPassword === ""){
      (document.body.getElementsByTagName("div")[7].style.boxShadow = " inset red 30vw 0px 0px 0px") (document.body.getElementsByTagName("label")[6].style.color = "red");
    }
  }
  return (
    <>
      <GlobalStyle />
      { ConfirmRegister &&  <S.X src={X} onClick={()=>{navigate("/")}} alt=""  /> }
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
            <label>Nome*</label>
            <S.RegisterInput
              onClick={() => {
                setFirstLine(!FirstLine);
                setSecondLine(true);
                setThirdLine(true);
                setFourthLine(true);
                setFifthLine(true);
                setSixthLine(true);
                setSeventhLine(true);
              }}
              type="text" required onChange={(e)=>{setUserName(e.target.value)}} value={UserName} />

            <S.RegisterLine isOn={FirstLine}></S.RegisterLine>
            <label>Usuário*</label>
            <S.RegisterInput
              onClick={() => {
                setFirstLine(true);
                setSecondLine(!SecondLine);
                setThirdLine(true);
                setFourthLine(true);
                setFifthLine(true);
                setSixthLine(true);
                setSeventhLine(true);
              }}
              type="email" required onChange={(e)=>{setUserEmail(e.target.value)}} value={UserEmail}
              />

            <S.RegisterLine isOn={SecondLine}></S.RegisterLine>
            <label>Foto(url)*</label>
            <S.RegisterInput
              onClick={() => {
                setFirstLine(true);
                setSecondLine(true);
                setThirdLine(!ThirdLine);
                setFourthLine(true);
                setFifthLine(true);
                setSixthLine(true);
                setSeventhLine(true);
              }}
              type="text" required  onChange={(e)=>{setUserPhoto(e.target.value)}} value={UserPhoto} />

            <S.RegisterLine isOn={ThirdLine}></S.RegisterLine>
            <label>CPF*</label>
            <S.RegisterInput
              onClick={() => {
                setFirstLine(true);
                setSecondLine(true);
                setThirdLine(true);
                setFourthLine(!FourthLine);
                setFifthLine(true);
                setSixthLine(true);
                setSeventhLine(true);
              }}
              type="text" required onChange={(e)=>{setUserDocument(e.target.value)}} value={UserDocument} 
              />
            <S.RegisterLine isOn={FourthLine}></S.RegisterLine>
            <label>Endereço*</label>
            <S.RegisterInput
              onClick={() => {
                setFirstLine(true);
                setSecondLine(true);
                setThirdLine(true);
                setFourthLine(true);
                setFifthLine(!FifthLine);
                setSixthLine(true);
                setSeventhLine(true);
              }}
              type="text" required onChange={(e)=>{setUserAddress(e.target.value)}} value={UserAddress}
              /> 
            <S.RegisterLine isOn={FifthLine}></S.RegisterLine>
            <label>Senha*</label>
            <S.RegisterInput
              onClick={() => {
                setFirstLine(true);
                setSecondLine(true);
                setThirdLine(true);
                setFourthLine(true);
                setFifthLine(true);
                setSixthLine(!SixthLine);
                setSeventhLine(true);
              }}
              type={hidePassword} required onChange={(e)=>{setUserPassword(e.target.value)}} value={UserPassword}
              />
            <S.RegisterLine isOn={SixthLine}></S.RegisterLine>
            {UserPassword.length > 3 && <S.SeePasswordRegister src={Password} alt="" onClick={() => { hidePassword !== "text" ? setHidePassword("text"):setHidePassword("password")}} />}
            <label>Confirmar Senha*</label>
            <S.RegisterInput 
              onClick={() => {
                setFirstLine(true);
                setSecondLine(true);
                setThirdLine(true);
                setFourthLine(true);
                setFifthLine(true);
                setSixthLine(true);
                setSeventhLine(!SeventhLine);
              }} type={SecondHidePassword} required onChange={(e) => { setConfirmPassword(e.target.value)}} value={ConfirmPassword}
              />

            <S.RegisterLine isOn={SeventhLine}></S.RegisterLine>
            {ConfirmPassword.length > 3 && <S.SecondSeePasswordRegister src={Password} alt="" onClick={() =>{ SecondHidePassword !== "text" ? setSecondHidePassword("text"):setSecondHidePassword("password")}}/> }
          <S.ButtonsBox>
            <button onClick={()=>{UserName && UserEmail && UserPhoto && UserDocument && UserAddress && UserPassword && ConfirmPassword !== "" ? UploadInfos() : WarningInfo()}}>CADASTRAR</button>
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
