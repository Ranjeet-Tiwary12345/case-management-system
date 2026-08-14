import { PdfUploader } from '@/components/PdfUploader';

export default function CaseAnalysisPage() {
  return (
    <section className="container-shell py-16 md:py-20">
      <div className="mx-auto max-w-3xl text-center">
        <span className="section-kicker">Case document analysis</span>
        <h1 className="section-title">Case Document Analysis</h1>
        <p className="mt-5 text-base leading-8 text-slate-700">
          Upload a case document and extract important case information for quick review.
        </p>
      </div>

      <div className="mt-10">
        <PdfUploader />
      </div>
    </section>
  );
}
