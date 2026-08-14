import { FileCheck2, FileSearch, Gavel, ScrollText, ShieldCheck, NotebookPen } from 'lucide-react';

const services = [
  {
    icon: ShieldCheck,
    title: 'Legal Consultation',
    description: 'Initial legal guidance tailored to the facts, concerns and circumstances of the matter.'
  },
  {
    icon: FileSearch,
    title: 'Case Document Review',
    description: 'Detailed review of documents to identify relevant facts, deadlines and important case information.'
  },
  {
    icon: NotebookPen,
    title: 'Legal Drafting',
    description: 'Preparation of legal documents and procedural content with careful attention to clarity and structure.'
  },
  {
    icon: ScrollText,
    title: 'Case Information Organization',
    description: 'Systematic consolidation of notices, records and information for accessible review and follow-up.'
  },
  {
    icon: FileCheck2,
    title: 'Document Analysis',
    description: 'Review of relevant legal papers to surface key details that may require attention or further action.'
  },
  {
    icon: Gavel,
    title: 'Hearing / Case Information Preparation',
    description: 'Helping organize matter-specific information for case-related preparation and hearing readiness.'
  }
];

export function LegalServices() {
  return (
    <section className="bg-white py-20">
      <div className="container-shell">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-kicker">Legal services</span>
          <h2 className="section-title">Clear, careful and practical legal support</h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map(({ icon: Icon, title, description }) => (
            <article key={title} className="card-surface p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#dacfa8] bg-[#f8f3e8] text-[#9b7a3b]">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-xl text-slate-900">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-700">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
