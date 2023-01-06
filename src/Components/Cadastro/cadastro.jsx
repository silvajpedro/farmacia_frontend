import React, { useState } from "react";
import * as S from "./cadastro_style.js";
import logo from "../../Assets/logo.png";
import { GlobalStyle } from "../Login/login_style.js";
import Password from "../../Assets/ver_senha2.png"
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
  return (
    <>
      <GlobalStyle />
      <S.RegisterMainBox>
        <S.RegisterBox
          onMouseLeave={() => {
              setFirstLine(true)
              setSecondLine(true)
              setThirdLine(true)
              setFourthLine(true)
              setFifthLine(true)
              setSixthLine(true)
              setSeventhLine(true)
          }}
        >
          <S.RegisterLogoContainer>
            <S.RegisterLogo src={logo} alt="" />
          </S.RegisterLogoContainer>
          <S.RegisterForm>
            <label>Nome*</label>
            <S.RegisterInput
              onClick={() =>{
              setFirstLine(!FirstLine)
              setSecondLine(true)
              setThirdLine(true)
              setFourthLine(true)
              setFifthLine(true)
              setSixthLine(true)
              setSeventhLine(true)
                }}
              type="text"
            />
            <S.RegisterLine isOn={FirstLine}></S.RegisterLine>
            <label>Usuário*</label>
            <S.RegisterInput
              onClick={() =>{
                setFirstLine(true)
                setSecondLine(!SecondLine)
                setThirdLine(true)
                setFourthLine(true)
                setFifthLine(true)
                setSixthLine(true)
                setSeventhLine(true)
                  }}
              type="text"
            />
            <S.RegisterLine isOn={SecondLine}></S.RegisterLine>
            <label>Foto(url)</label>
            <S.RegisterInput
              onClick={() =>{
                setFirstLine(true)
                setSecondLine(true)
                setThirdLine(!ThirdLine)
                setFourthLine(true)
                setFifthLine(true)
                setSixthLine(true)
                setSeventhLine(true)
                  }}
              type="text"
            />
            <S.RegisterLine isOn={ThirdLine}></S.RegisterLine>
            <label>CPF*</label>
            <S.RegisterInput
              onClick={() =>{
                  setFirstLine(true)
                  setSecondLine(true)
                  setThirdLine(true)
                  setFourthLine(!FourthLine)
                  setFifthLine(true)
                  setSixthLine(true)
                  setSeventhLine(true)
                    }}
              type="text"
            />
            <S.RegisterLine isOn={FourthLine}></S.RegisterLine>
            <label>Endereço*</label>
            <S.RegisterInput
              onClick={() =>{
                setFirstLine(true)
                setSecondLine(true)
                setThirdLine(true)
                setFourthLine(true)
                setFifthLine(!FifthLine)
                setSixthLine(true)
                setSeventhLine(true)
                  }}
              type="text"
            />
            <S.RegisterLine isOn={FifthLine}></S.RegisterLine>
            <label>Senha*</label>
            <S.RegisterInput
              onClick={() =>{
                setFirstLine(true)
                setSecondLine(true)
                setThirdLine(true)
                setFourthLine(true)
                setFifthLine(true)
                setSixthLine(!SixthLine)
                setSeventhLine(true)
              }}
              type={hidePassword}
            />
            <S.RegisterLine isOn={SixthLine}></S.RegisterLine>
            <S.SeePasswordRegister src={Password} alt="" onClick={()=>(hidePassword !== "text" ? setHidePassword("text"):setHidePassword("password"))}/>
            <label>Confirmar Senha*</label>
            <S.RegisterInput
              onClick={() =>{
                setFirstLine(true)
                setSecondLine(true)
                setThirdLine(true)
                setFourthLine(true)
                setFifthLine(true)
                setSixthLine(true)
                setSeventhLine(!SeventhLine)
              }}
              type={SecondHidePassword}
            />
            <S.RegisterLine isOn={SeventhLine}></S.RegisterLine>
            <S.SecondSeePasswordRegister src={Password} alt="" onClick={()=>(SecondHidePassword !== "text" ? setSecondHidePassword("text"):setSecondHidePassword("password"))}/>
          </S.RegisterForm>
          <S.ButtonsBox>
            <button>CADASTRAR</button>
            <button><S.LinkBack to="/">CANCELAR</S.LinkBack></button>
          </S.ButtonsBox>
        </S.RegisterBox>
      </S.RegisterMainBox>
    </>
  );
}
