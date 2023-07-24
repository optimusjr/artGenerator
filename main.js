import { h, Component, render } from "https://esm.sh/preact";
import htm from "https://esm.sh/htm";

// Initialize htm with Preact
const html = htm.bind(h);

function App(props) {
  return html`<h1>Hello ${props.name}!</h1>`;
}

const loadRoot = () => {
  console.log("loading root");

  const root = document.getElementById("preact");
  if (root === null) {
    console.log("No root element, trying again in one second");
    window.setTimeout(loadRoot, 1000);
  } else {
    render(html`<${App} name="World" />`, root);
  }
};

window.onload(loadRoot);
