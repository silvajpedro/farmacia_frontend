import React, { useState } from "react";
import * as S from "./cadastro_style.js";
import logo from "../../Assets/logo.png";
import X from "../../Assets/X.png"
import { GlobalStyle } from "../Login/login_style.js";
import Password from "../../Assets/ver_senha2.png";
export default function Cadastro() {
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
  const [ConfirmRegister, setConfirmRegister] = useState(true);
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
      alert("Cadastro Concluído");
    },500)
  }
  return (
    <>
      <GlobalStyle />
      { ConfirmRegister &&  <S.X src={X} onClick={()=>{setConfirmRegister(!ConfirmRegister)}} alt=""  /> }
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
              type="text" required onChange={(e)=>{setUserEmail(e.target.value)}} value={UserEmail} />

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
              type="email" required onChange={(e)=>{setUserName(e.target.value)}} value={UserName}
              />

            <S.RegisterLine isOn={SecondLine}></S.RegisterLine>
            <label>Foto(url)</label>
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
              type="text" required onChange={(e)=>{setUserPhoto(e.target.value)}} value={UserPhoto} />

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
            <button onClick={()=>{UserName && UserEmail && UserPhoto && UserDocument && UserAddress && UserPassword && ConfirmPassword !== "" ? UploadInfos(): alert("Preencha seus dados")}}>CADASTRAR</button>
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
