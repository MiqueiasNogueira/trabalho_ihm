import "@fontsource/saira-stencil-one";
import FormularioContato from "../components/Formulario_contato/formulario_contato";
import TopPages from "../components/TopPages/top_pages";
function Contato() {
  return (
    <div>
      <TopPages title="Contato" />
      <FormularioContato />
    </div>
  );
}

export default Contato;
