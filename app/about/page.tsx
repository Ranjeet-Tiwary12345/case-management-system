import Link from 'next/link';

export default function AboutPage() {
  return (
    <section className="container-shell py-16 md:py-20">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div className="card-surface overflow-hidden bg-white p-5">
          <div className="flex min-h-[420px] items-center justify-center rounded-[1.5rem] border border-dashed border-[#d7d0c2] bg-[#f7f5f1] text-center">
            <div>
              <div className="text-[11px] uppercase tracking-[0.25em] text-slate-500">Professional profile</div>
              <div className="mt-3 font-serif text-3xl text-slate-900">Portrait placeholder</div>
              <p className="mt-3 max-w-xs text-sm leading-7 text-slate-600">[Professional profile to be added]</p>
            </div>
          </div>
        </div>

        <div>
          <span className="section-kicker">About</span>
          <h1 className="section-title">About Advocate Ranjeet Tiwary</h1>
          <div className="mt-6 space-y-5 text-base leading-8 text-slate-700">
            <p>[Professional profile to be added]</p>
            <p>[Professional profile to be added]</p>
            <p>[Professional profile to be added]</p>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact" className="button-primary">
              Request a Consultation
            </Link>
            <Link href="/case-analysis" className="button-secondary">
              Case Document Analysis
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
