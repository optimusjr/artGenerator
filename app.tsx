import { useRef, useState } from "preact/hooks";

import VirtualSignature from "./components/arts/VirtualSignature";
import DownloadButton from "./components/DownloadButton";

const App = () => {
  const [name, setName] = useState("Sam Sumitpo");
  const [role, setRole] = useState("Seu Cargo");
  const virtualSignatureRef = useRef(null);

  const getVirtualSignatureElement = () => {
    return virtualSignatureRef.current;
  };

  return (
    <div>
      <h1>Art Generator</h1>
      <p>
        Gerador de Imagens para a OPTIMUS Jr. Veja mais informações no
        <a href="https://github.com/optimusjr/artGenerator">GitHub do Projeto</a>
      </p>

      <h2 className="tabset">Imagens</h2>

      <article>
        <h3>Assinatura Virtual</h3>

        <form>
          <label style={{ display: "flex", gap: 8 }}>
            <p>Seu Nome</p>
            <input onChange={(e) => setName((e.target as HTMLInputElement).value)} value={name} />
          </label>

          <label style={{ display: "flex", gap: 8 }}>
            <p>Seu Cargo</p>
            <input onChange={(e) => setRole((e.target as HTMLInputElement).value)} value={role} />
          </label>

          <DownloadButton getElement={getVirtualSignatureElement} />
        </form>

        <div ref={virtualSignatureRef} style={{ lineHeight: 0 }}>
          <VirtualSignature name={name} role={role} />
        </div>
      </article>
    </div>
  );
};

export default App;
