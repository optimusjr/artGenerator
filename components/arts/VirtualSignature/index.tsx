import { useRef, useState } from "react";

import DownloadButton from "../../DownloadButton";
import SVG from "./svg";

const VirtualSignature = () => {
  const [name, setName] = useState("Sam Sumitpo");
  const [role, setRole] = useState("Seu Cargo");
  const svgRef = useRef(null);

  const getSVGRef = () => {
    return svgRef.current;
  };

  return (
    <article>
      <h3>Assinatura Virtual</h3>

      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <label style={{ display: "flex", gap: 8, alignItems: "center" }}>
          Seu Nome:
          <input
            onChange={(e) => setName((e.target as HTMLInputElement).value)}
            style={{ order: "solid 1px black", margin: 4, padding: 4 }}
            value={name}
          />
        </label>

        <label style={{ display: "flex", gap: 8, alignItems: "center" }}>
          Seu Cargo:
          <input
            onChange={(e) => setRole((e.target as HTMLInputElement).value)}
            style={{ order: "solid 1px black", margin: 4, padding: 4 }}
            value={role}
          />
        </label>

        <DownloadButton getElement={getSVGRef} imageName="assinatura.png" />
      </form>

      <div ref={svgRef} style={{ lineHeight: 0 }}>
        <SVG name={name} role={role} />
      </div>
    </article>
  );
};

export default VirtualSignature;
