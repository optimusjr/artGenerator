import { useRef, useState } from "react";

import DownloadButton from "../../DownloadButton";
import SVG from "./svg";

const VirtualSignature = () => {
  const [name, setName] = useState("Sam Sumitpo");
  const [role, setRole] = useState("Seu Cargo");
  const virtualSignatureRef = useRef(null);

  const getSVGRef = () => {
    return virtualSignatureRef.current;
  };

  return (
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

        <DownloadButton getElement={getSVGRef} />
      </form>

      <div ref={virtualSignatureRef} style={{ lineHeight: 0 }}>
        <SVG name={name} role={role} />
      </div>
    </article>
  );
};

export default VirtualSignature;
