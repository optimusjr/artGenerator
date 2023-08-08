import VirtualSignature from "./components/arts/VirtualSignature";

const App = () => {
  return (
    <div>
      <h1>Art Generator</h1>
      <p>
        Gerador de Imagens para a OPTIMUS Jr. Veja mais informações no{" "}
        <a href="https://github.com/optimusjr/artGenerator">GitHub do Projeto</a>
      </p>

      <h2 className="tabset">Imagens</h2>

      <h3>Assinatura Virtual</h3>
      <VirtualSignature />
    </div>
  );
};

export default App;
