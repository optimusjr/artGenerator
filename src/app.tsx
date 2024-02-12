import Background from "./components/arts/Background";
import VirtualSignature from "./components/arts/VirtualSignature";

const App = () => (
  <div>
    <p>
      Gerador de Imagens para a OPTIMUS Jr. Veja mais informações no{" "}
      <a href="https://github.com/optimusjr/artGenerator">GitHub do Projeto</a>
    </p>

    <h1>Instruções de Uso</h1>
    <blockquote className="is-warning">
      <p>
        Leia as instruções antes de prosseguir. Não fazer isso pode acarretar em geração de imagens
        defeituosas (cortadas ou com a fonte errada).
      </p>
    </blockquote>
    <ol>
      <li>
        Utilize um computador em vez de um celular. O uso de celulares pode acarretar em imagens
        cortadas ou de baixa qualidade.
      </li>
      <li>
        Para criar uma imagem, preencha os dados necessários e clique no botão de{" "}
        <code>Download</code>, que gera um arquivo PNG da arte. O botão <code>Download SVG</code>{" "}
        cria um arquivo SVG, que permite edições posteriores utilizando um software como o Inkscape.
      </li>
      <li>
        <strong>IMPORTANTE:</strong> Sempre confira a imagem após baixar (Se as fontes estão
        corretas e se ela não está cortada). Não saia por aí utilizando imagens fora do padrão.
      </li>
      <li>
        Caso sua imagem saia com a fonte errada (alguma outra fonte que não a seja a League
        Spartan), tente instalar a fonte correta no seu computador. Para isso basta acessar a tela
        de download do <a href="https://fonts.google.com/specimen/League+Spartan">League Spartan</a>{" "}
        do Google Fonts. Além da versão variável, não se esqueça de baixar as versões static.
        Instalar a fonte também é necessário ao trabalhar com a imagem em SVG.
      </li>
    </ol>

    <h1>Imagens</h1>

    <VirtualSignature />
    <Background />
  </div>
);

export default App;
