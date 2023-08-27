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
        link.download = imageName;
        link.href = dataUrl;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
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
  );
};

export default DownloadButton;
