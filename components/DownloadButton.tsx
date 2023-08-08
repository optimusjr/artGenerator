import html2canvas from "html2canvas";

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

    const canvas = await html2canvas(element);

    const data = canvas.toDataURL();
    const link = document.createElement("a");

    if (typeof link.download === "string") {
      link.href = data;
      link.download = imageName;

      document.body.appendChild(link);
      link.click();
      // document.body.removeChild(link);
    } else {
      window.open(data);
    }
  };

  return (
    <button
      onClick={handleDownloadImage}
      style={{
        border: "1px solid black",
        margin: 4,
        padding: 4,
        borderRadius: 4,
      }}
    >
      Download
    </button>
  );
};

export default DownloadButton;
