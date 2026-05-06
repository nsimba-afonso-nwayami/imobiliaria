import { Routes, Route } from "react-router-dom";

// Layout do site
import SiteLayout from "../layouts/SiteLayout";

// 
//import PrivateRoute from "../routes/PrivateRoute";

//Site
import Home from "../pages/site/Home";
import Imoveis from "../pages/site/Imoveis";
import DetalhesImovel from "../pages/site/DetalhesImovel";
import Categoria from "../pages/site/Categoria";
import Carrinho from "../pages/site/Carrinho";
import Sobre from "../pages/site/Sobre";
import Contato from "../pages/site/Contato";
import NotFound from "../pages/site/NotFound";


export default function AppRoutes() {
  return (
    <Routes>
      {/*Rotas do site */}
      <Route element={<SiteLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/imoveis" element={<Imoveis />} />
        <Route path="/imoveis/detalhes" element={<DetalhesImovel />} />
        <Route path="/imoveis/categoria" element={<Categoria />} />
        <Route path="/carrinho" element={<Carrinho />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="*" element={<NotFound />} />
      </Route>

      {/*Rotas de autenticação */}
    </Routes>
  );
}
