import { useRef, useState } from "react";

import CappedForm from "../../CappedForm";
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
      <h2>Plano de Fundo para o Google Meet</h2>
      <p>Use essa imagem como plano de fundo nas reuniões da OPTIMUS por chamada video.</p>

      <CappedForm>
        <label style={{ display: "flex", gap: 8, alignItems: "center" }}>
          Seu Nome:
          <input
            onChange={(e) => setName((e.target as HTMLInputElement).value)}
            style={{ order: "solid 1px black", margin: 4, padding: 4 }}
            value={name}
          />
        </label>
        <DownloadButton getElement={getSVGRef} imageName="background" />
      </CappedForm>

      <SVG name={name} svgRef={svgRef} />
    </article>
  );
};

export default Background;
