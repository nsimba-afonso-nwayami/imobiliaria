import { Routes, Route } from "react-router-dom";

// Layout do site
import SiteLayout from "../layouts/SiteLayout";

// 
import ProtectedRoute from "./ProtectedRoute";

//Site
import Home from "../pages/site/Home";
import Imoveis from "../pages/site/Imoveis";
import DetalhesImovel from "../pages/site/DetalhesImovel";
import Categoria from "../pages/site/Categoria";
import Carrinho from "../pages/site/Carrinho";
import Checkout from "../pages/site/Checkout";
import Sobre from "../pages/site/Sobre";
import Contato from "../pages/site/Contato";
import Privacidade from "../pages/site/Privacidade";
import Termos from "../pages/site/Termos";
import NotFound from "../pages/site/NotFound";
import Unauthorized from "../pages/site/Unauthorized";

//Autenticação
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import ForgotPassword from "../pages/auth/ForgotPassword";
import ResetPassword from "../pages/auth/ResetPassword";

//Comprador
import DashboardComprador from "../pages/comprador/DashboardComprador";
import ImoveisComprador from "../pages/comprador/ImoveisComprador";
import MinhasVisitas from "../pages/comprador/MinhasVisitas";
import HistoricoComprador from "../pages/comprador/HistoricoComprador";
import ConfiguracoesComprador from "../pages/comprador/ConfiguracoesComprador";
import MensagensComprador from "../pages/comprador/MensagensComprador";
import NotificacoesComprador from "../pages/comprador/NotificacoesComprador";
import NotFoundComprador from "../pages/comprador/NotFoundComprador";

//Vendedor
import DashboardVendedor from "../pages/vendedor/DashboardVendedor";
import MeusImoveisVendedor from "../pages/vendedor/MeusImoveisVendedor";
import InteressadosVendedor from "../pages/vendedor/InteressadosVendedor";
import VisitasVendedor from "../pages/vendedor/VisitasVendedor";
import HistoricoVendedor from "../pages/vendedor/HistoricoVendedor";
import RelatoriosVendedor from "../pages/vendedor/RelatoriosVendedor";
import ConfiguracoesVendedor from "../pages/vendedor/ConfiguracoesVendedor";
import MensagensVendedor from "../pages/vendedor/MensagensVendedor";
import NotificacoesVendedor from "../pages/vendedor/NotificacoesVendedor";
import NotFoundVendedor from "../pages/vendedor/NotFoundVendedor";


export default function AppRoutes() {
  return (
    <Routes>
      {/*Rotas do site */}
      <Route element={<SiteLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/imoveis" element={<Imoveis />} />
        <Route path="/imoveis/:slug" element={<DetalhesImovel />} />
        <Route path="/imoveis/categoria" element={<Categoria />} />
        <Route path="/carrinho" element={<Carrinho />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/privacidade" element={<Privacidade />} />
        <Route path="/termos" element={<Termos />} />
        <Route path="*" element={<NotFound />} />
      </Route>

      {/*Rotas de autenticação*/}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/403" element={<Unauthorized />} />

      {/*Dashboard comprador*/}
      <Route element={<ProtectedRoute allowedRoles={["client"]} />}>
        <Route path="/dashboard/comprador/">
          <Route path="" element={<DashboardComprador />} />
          <Route path="imoveis" element={<ImoveisComprador />} />
          <Route path="visitas" element={<MinhasVisitas />} />
          <Route path="historico" element={<HistoricoComprador />} />
          <Route path="configuracoes" element={<ConfiguracoesComprador />} />
          <Route path="mensagens" element={<MensagensComprador />} />
          <Route path="notificacoes" element={<NotificacoesComprador />} />
          <Route path="*" element={<NotFoundComprador />} />
        </Route>
      </Route>
      

      {/*Dashboard vendedor*/}
      <Route element={<ProtectedRoute allowedRoles={["vendor"]} />}>
        <Route path="/dashboard/vendedor/">
          <Route path="" element={<DashboardVendedor />} />
          <Route path="imoveis" element={<MeusImoveisVendedor />} />
          <Route path="clientes" element={<InteressadosVendedor />} />
          <Route path="visitas" element={<VisitasVendedor />} />
          <Route path="historico" element={<HistoricoVendedor />} />
          <Route path="relatorios" element={<RelatoriosVendedor />} />
          <Route path="configuracoes" element={<ConfiguracoesVendedor />} />
          <Route path="mensagens" element={<MensagensVendedor />} />
          <Route path="notificacoes" element={<NotificacoesVendedor />} />
          <Route path="*" element={<NotFoundVendedor />} />
        </Route>
      </Route>
    </Routes>
  );
}
