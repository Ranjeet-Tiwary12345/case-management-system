import Link from 'next/link';
import { ArrowRight, FileText, Scale, ShieldCheck } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-[#e7e1d4] bg-[#f7f5f1]">
      <div className="container-shell grid gap-10 py-16 md:py-20 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div>
          <span className="section-kicker">Professional legal practice</span>
          <h1 className="max-w-xl text-4xl font-medium leading-tight text-slate-900 md:text-6xl">
            Experienced Legal Guidance. Focused Representation.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-700">
            Professional legal assistance with a commitment to careful case analysis, clear communication and client-focused representation.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link href="/contact" className="button-primary">
              Request a Consultation
            </Link>
            <Link href="/case-analysis" className="button-secondary">
              Case Document Analysis
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-slate-700">
            <span className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-[#b8924d]" /> Confidential guidance</span>
            <span className="inline-flex items-center gap-2"><FileText className="h-4 w-4 text-[#b8924d]" /> Document review</span>
            <span className="inline-flex items-center gap-2"><Scale className="h-4 w-4 text-[#b8924d]" /> Careful analysis</span>
          </div>
        </div>

        <div className="relative">
          <div className="card-surface overflow-hidden border-[#d7d0c2] bg-[#f2efe9] p-5 shadow-soft">
            <div className="rounded-[1.5rem] border border-[#d7d0c2] bg-[#0f172a] p-6 text-white shadow-xl">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.28em] text-[#d7c494]">Professional counsel</div>
                  <div className="mt-2 font-serif text-2xl">Legal Practice</div>
                </div>
                <div className="rounded-full border border-[#d7c494] bg-[#111827] p-2">
                  <Scale className="h-5 w-5 text-[#d7c494]" />
                </div>
              </div>

              <div className="mt-6 space-y-5">
                <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-4">
                  <div>
                    <div className="text-xs uppercase tracking-[0.2em] text-slate-300">Case review</div>
                    <div className="mt-2 text-lg font-medium">Document analysis</div>
                  </div>
                  <ArrowRight className="h-5 w-5 text-[#d7c494]" />
                </div>
                <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-4">
                  <div>
                    <div className="text-xs uppercase tracking-[0.2em] text-slate-300">Legal support</div>
                    <div className="mt-2 text-lg font-medium">Case preparation</div>
                  </div>
                  <ArrowRight className="h-5 w-5 text-[#d7c494]" />
                </div>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-xs uppercase tracking-[0.2em] text-slate-300">Consultation</div>
                    <div className="mt-2 text-lg font-medium">Client guidance</div>
                  </div>
                  <ArrowRight className="h-5 w-5 text-[#d7c494]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
