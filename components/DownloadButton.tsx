import html2canvas from "html2canvas";

interface Props {
  getElement: () => HTMLElement | null;
}

const DownloadButton = ({ getElement }: Props) => {
  const handleDownloadImage = async () => {
    const element = getElement();
    console.log(element);
    if (element === null) {
      return;
    }
    const canvas = await html2canvas(element);

    const data = canvas.toDataURL("image/jpg");
    const link = document.createElement("a");

    if (typeof link.download === "string") {
      link.href = data;
      link.download = "image.jpg";

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      window.open(data);
    }
  };

  return <button onClick={handleDownloadImage}>Download</button>;
};

export default DownloadButton;