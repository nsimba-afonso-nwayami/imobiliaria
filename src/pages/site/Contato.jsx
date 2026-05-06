import BannerContato from "../../components/contato/BannerContato";
import ContatoForm from "../../components/contato/ContatoForm";
import ContatoSection from "../../components/contato/ContatoSection";

export default function Contato() {
  return (
    <>
      <title>Contato | Imobiliária</title>

      <BannerContato />
      <ContatoForm/>
      <ContatoSection />
    </>
  );
}
