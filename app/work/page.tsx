import PDFViewer from 'app/components/PdfViewer';
import React from 'react';

export default function Page() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">my work</h1>
      <PDFViewer pdfPath="/latest.pdf" />
    </section>
  );
}
