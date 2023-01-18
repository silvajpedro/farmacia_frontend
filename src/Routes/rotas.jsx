import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../Components/Login/login.jsx";
import Cadastro from "../Components/Cadastro/cadastro.jsx";
import Error from "../Components/Error/error.jsx"
import Produtos from "../Components/pages/produto/produto.jsx";
import Categorias from "../Components/pages/categorias/categorias.jsx";
import CadastrarCat from "../Components/pages/cadastrar_cat/cadastrar_cat.jsx";
import Equipe from "../Components/pages/Equipe/equipe.jsx";
import SobreNos from "../Components/pages/Sobre_nos/sobre_nos.jsx";
export default function Rotas(){
 return(
    <>
    
    <BrowserRouter>
      <Routes>
         <Route path="/" element={<Login/>} />
         <Route path="/cadastro" element={<Cadastro/>}/>
         <Route path="*" element={<Error/>} />
         <Route path="/produtos" element={<Produtos/>} />
         <Route path="/categorias" element={<Categorias/>} />
         <Route path="/cadastrar_cat" element={<CadastrarCat/>} />
         <Route path="/equipe" element={<Equipe/>} />
         <Route path="/sobre_nos" element={<SobreNos/>} />
      </Routes>
    </BrowserRouter>
    </>
 )   
}