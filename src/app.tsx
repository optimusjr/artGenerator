import VirtualSignature from "./components/arts/VirtualSignature";

const App = () => {
  return (
    <div>
      <p>
        Gerador de Imagens para a OPTIMUS Jr. Veja mais informações no{" "}
        <a href="https://github.com/optimusjr/artGenerator">GitHub do Projeto</a>
      </p>

      <h1>Recomendações antes de prosseguir</h1>
      <ul>
        <li>
          Instale a <a href="https://fonts.google.com/specimen/League+Spartan">League Spartan</a> no
          seu computador, inclusive as versões static
        </li>
        <li>Prefira utilizar um computador em vez do celular</li>
        <li>
          Sempre confira a imagem após baixar (Se as fontes estão corretas e se ela não está
          cortada)
        </li>
      </ul>

      <h1 className="tabset">Imagens</h1>

      <VirtualSignature />
    </div>
  );
};

export default App;
