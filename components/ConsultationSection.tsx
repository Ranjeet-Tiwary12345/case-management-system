import Link from 'next/link';

export function ConsultationSection() {
  return (
    <section className="bg-[#111827] py-20 text-white">
      <div className="container-shell grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
        <div>
          <span className="section-kicker border-white/15 bg-white/5 text-white">Trusted counsel</span>
          <h2 className="mt-4 max-w-xl font-serif text-4xl text-white">Professional legal assistance for your matter.</h2>
        </div>
        <Link href="/contact" className="button-primary bg-[#d7c494] text-slate-900 hover:bg-[#c8b07d]">
          Request a Consultation
        </Link>
      </div>
    </section>
  );
}
