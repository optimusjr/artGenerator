import { useRef, useState } from "react";

import DownloadButton from "../../DownloadButton";
import SVG from "./svg";

const Background = () => {
  const [name, setName] = useState("Sam Sumitpo");
  const svgRef = useRef(null);

  const getSVGRef = () => {
    return svgRef.current;
  };

  return (
    <article>
      <h2>PLano de Fundo para o Google Meet</h2>
      <p>Use essa imagem como plano de fundo nas reuniões da OPTIMUS por chamada video.</p>

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
        <DownloadButton getElement={getSVGRef} imageName="assinatura.png" />
      </form>

      <div ref={svgRef} style={{ lineHeight: 0 }}>
        <SVG name={name} />
      </div>
    </article>
  );
};

export default Background;
