import Hero from "../../components/home/Hero";
import BuscaPropriedade from "../../components/home/BuscaPropriedade";
import ImoveisDestaque from "../../components/home/ImoveisDestaque";
import Sobre from "../../components/home/Sobre";
import NossosDiferenciais from "../../components/home/NossosDiferenciais";
import ImoveisCategoria from "../../components/home/ImoveisCategoria";
import Depoimentos from "../../components/home/Depoimentos";
import OutrosImoveis from "../../components/home/OutrosImoveis";
import Cta from "../../components/home/Cta";

export default function Home() {
  return (
    <>
      <title>Imobiliária</title>

      <Hero />
      <BuscaPropriedade />
      <ImoveisDestaque />
      <Sobre />
      <NossosDiferenciais />
      <ImoveisCategoria />
      <Depoimentos />
      <OutrosImoveis />
      <Cta />
    </>
  );
}
