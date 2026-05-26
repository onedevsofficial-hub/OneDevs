import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import ParaQuem from "./components/ParaQuem/ParaQuem";
import Ferramentas from "./components/Ferramentas/Ferramentas";
import PorQue from "./components/PorQue/PorQue";
import Versoes from "./components/Versoes-Sobre/Versoes";
import Sobre from "./components/Versoes-Sobre/Sobre";
import Footer from "./components/Footer/Footer";
import Copyright from "./components/Copyright/Copyright";
import Integrantes from "./components/pages/Integrantes/integrantes"
import Contato from "./components/pages/Contato/contato"
import Documentação from "./components/pages/Documentação/documentacao"

function Home() {
  return (
    <>
      <Hero />
      <ParaQuem />
      <Ferramentas />
      <PorQue />
      <Versoes />
      <Sobre />
      <Footer />
      <Copyright />
    </>
  );
}

export default function App() {
  return (
    <div className="container-app"> 

      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/integrantes" element={<Integrantes />} />
        <Route path="/contato" element={<Contato/>}/>
        <Route path="/documentacao" element={<Documentação/>}/>
      </Routes>

    </div>
  )
}