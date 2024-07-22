
import PdfViewer from "app/components/PdfViewer";

export default function Page() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">my work</h1>
      <PdfViewer file="./latest.pdf" />
    </section>
  );
}
