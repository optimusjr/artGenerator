import { useRef, useState } from "react";

import DownloadButton from "../../DownloadButton";
import SVG from "./svg";

const VirtualSignature = () => {
  const [name, setName] = useState("Sam Sumitpo");
  const [role, setRole] = useState("Diretor de Marketing");
  const [phone, setPhone] = useState("71 99610-0916");
  const svgRef = useRef(null);

  const getSVGRef = () => {
    return svgRef.current;
  };

  return (
    <article>
      <h2>Assinatura Virtual</h2>
      <p>
        Adicione essa imagem no final dos e-mails que você enviar utilizando o seu e-mail
        corporativo.
      </p>

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

        <label style={{ display: "flex", gap: 8, alignItems: "center" }}>
          Seu número de telefone:
          <input
            onChange={(e) => setPhone((e.target as HTMLInputElement).value)}
            style={{ order: "solid 1px black", margin: 4, padding: 4 }}
            value={phone}
          />
        </label>

        <DownloadButton getElement={getSVGRef} imageName="assinatura" />
      </form>

      <div ref={svgRef} style={{ lineHeight: 0 }}>
        <SVG name={name} phone={phone} role={role} />
      </div>
    </article>
  );
};

export default VirtualSignature;
