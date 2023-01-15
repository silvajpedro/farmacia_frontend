import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../Components/Login/login.jsx";
import Cadastro from "../Components/Cadastro/cadastro.jsx";
import Home from "../Components/Home/home.jsx"
import Error from "../Components/Error/error.jsx"
export default function Rotas(){
 return(
    <>
    <BrowserRouter>
      <Routes>
         <Route path="/" element={<Login/>} />
         <Route path="/cadastro" element={<Cadastro/>}/>
         <Route path="/home" element={<Home/>} />
         <Route path="*" element={<Error/>} />
      </Routes>
    </BrowserRouter>
    </>
 )   
}