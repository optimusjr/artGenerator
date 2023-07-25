import { useRef, useState } from "preact/hooks";

import VirtualSignature from "./components/arts/VirtualSignature";
import DownloadButton from "./components/DownloadButton";

const App = () => {
  const [name, setName] = useState("Seu Nome");
  const virtualSignatureRef = useRef(null);

  const getVirtualSignatureElement = () => {
    return virtualSignatureRef.current;
  };

  return (
    <div>
      <h1>Art Generator</h1>

      <label>
        <p>Seu Nome</p>
        <input onChange={(e) => setName((e.target as HTMLInputElement).value)} value={name} />
      </label>

      <DownloadButton getElement={getVirtualSignatureElement} />

      <div ref={virtualSignatureRef} style={{ lineHeight: 0 }}>
        <VirtualSignature fontSize={64} name={name} />
      </div>
    </div>
  );
};

export default App;
