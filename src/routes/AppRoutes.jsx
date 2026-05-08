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
import Checkout from "../pages/site/Checkout";
import Sobre from "../pages/site/Sobre";
import Contato from "../pages/site/Contato";
import Privacidade from "../pages/site/Privacidade";
import Termos from "../pages/site/Termos";
import NotFound from "../pages/site/NotFound";

//Autenticação
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import ForgotPassword from "../pages/auth/ForgotPassword";
import ResetPassword from "../pages/auth/ResetPassword";

//Comprador
import DashboardComprador from "../pages/comprador/DashboardComprador";
import ImoveisComprador from "../pages/comprador/ImoveisComprador";
import ListaInteresse from "../pages/comprador/ListaInteresse";
import CompararImoveis from "../pages/comprador/CompararImoveis";
import MinhasVisitas from "../pages/comprador/MinhasVisitas";
import MinhasPropostas from "../pages/comprador/MinhasPropostas";
import HistoricoComprador from "../pages/comprador/HistoricoComprador";
import ConfiguracoesComprador from "../pages/comprador/ConfiguracoesComprador";
import MensagensComprador from "../pages/comprador/MensagensComprador";
import NotificacoesComprador from "../pages/comprador/NotificacoesComprador";
import NotFoundComprador from "../pages/comprador/NotFoundComprador";

//Investidor
import DashboardInvestidor from "../pages/investidor/DashboardInvestidor";
import PortfolioInvestidor from "../pages/investidor/PortfolioInvestidor";
import InvestimentosDisponiveis from "../pages/investidor/InvestimentosDisponiveis";
import MeusImoveisInvestidor from "../pages/investidor/MeusImoveisInvestidor";
import HistoricoInvestidor from "../pages/investidor/HistoricoInvestidor";
import OportunidadesInvestidor from "../pages/investidor/OportunidadesInvestidor";
import RelatoriosInvestidor from "../pages/investidor/RelatoriosInvestidor";
import ConfiguracoesInvestidor from "../pages/investidor/ConfiguracoesInvestidor";
import MensagensInvestidor from "../pages/investidor/MensagensInvestidor";
import NotificacoesInvestidor from "../pages/investidor/NotificacoesInvestidor";
import NotFoundInvestidor from "../pages/investidor/NotFoundInvestidor";


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

      {/*Dashboard comprador*/}
      <Route path="/dashboard/comprador/">
        <Route path="" element={<DashboardComprador />} />
        <Route path="imoveis" element={<ImoveisComprador />} />
        <Route path="interesse" element={<ListaInteresse />} />
        <Route path="comparador" element={<CompararImoveis />} />
        <Route path="visitas" element={<MinhasVisitas />} />
        <Route path="propostas" element={<MinhasPropostas />} />
        <Route path="historico" element={<HistoricoComprador />} />
        <Route path="configuracoes" element={<ConfiguracoesComprador />} />
        <Route path="mensagens" element={<MensagensComprador />} />
        <Route path="notificacoes" element={<NotificacoesComprador />} />
        <Route path="*" element={<NotFoundComprador />} />
      </Route>

      {/*Dashboard investidor*/}
      <Route path="/dashboard/investidor/">
        <Route path="" element={<DashboardInvestidor />} />
        <Route path="portfolio" element={<PortfolioInvestidor />} />
        <Route path="investimentos" element={<InvestimentosDisponiveis />} />
        <Route path="imoveis" element={<MeusImoveisInvestidor />} />
        <Route path="historico" element={<HistoricoInvestidor />} />
        <Route path="oportunidades" element={<OportunidadesInvestidor />} />
        <Route path="relatorios" element={<RelatoriosInvestidor />} />
        <Route path="configuracoes" element={<ConfiguracoesInvestidor />} />
        <Route path="mensagens" element={<MensagensInvestidor />} />
        <Route path="notificacoes" element={<NotificacoesInvestidor />} />
        <Route path="*" element={<NotFoundInvestidor />} />
      </Route>
    </Routes>
  );
}
