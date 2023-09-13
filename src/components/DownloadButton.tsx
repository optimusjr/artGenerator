import { toPng } from "html-to-image";

interface Props {
  getElement: () => HTMLElement | null;
  imageName: string;
}

const DownloadButton = ({ getElement, imageName }: Props) => {
  const handleDownloadImage = async () => {
    const element = getElement();

    if (element === null) {
      return;
    }

    toPng(element, { cacheBust: true })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = imageName + ".png";
        link.href = dataUrl;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDownloadSVG = async () => {
    const element = getElement();

    if (element === null) {
      return;
    }

    const svg = element.innerHTML;
    const blob = new Blob([svg]);
    const linkElement = document.createElement("a");
    linkElement.download = imageName + ".svg";
    linkElement.href = window.URL.createObjectURL(blob);
    linkElement.click();
    linkElement.remove();
  };

  return (
    <div style={{ display: "flex" }}>
      <button
        style={{
          border: "1px solid black",
          margin: 4,
          padding: 4,
          borderRadius: 4,
        }}
        onClick={handleDownloadImage}
      >
        Download
      </button>
      <button
        style={{
          border: "1px solid black",
          margin: 4,
          padding: 4,
          borderRadius: 4,
        }}
        onClick={handleDownloadSVG}
      >
        Download SVG
      </button>
    </div>
  );
};

export default DownloadButton;
