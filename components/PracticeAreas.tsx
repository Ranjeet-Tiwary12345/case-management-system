import { BookOpenText, BriefcaseBusiness, FileText, Gavel, Scale, ShieldCheck, Users, Landmark } from 'lucide-react';

const practiceAreas = [
  {
    icon: Gavel,
    title: 'Civil Matters',
    description: 'Professional assistance with civil disputes, documentation, review and representation in appropriate proceedings.'
  },
  {
    icon: Scale,
    title: 'Criminal Matters',
    description: 'Careful review of facts, legal documents and procedural information to support informed decision-making.'
  },
  {
    icon: Landmark,
    title: 'Property & Land Matters',
    description: 'Support for documentation review and legal understanding related to property and land concerns.'
  },
  {
    icon: Users,
    title: 'Family & Matrimonial Matters',
    description: 'Sensitive, client-focused guidance for family matters requiring careful communication and structured review.'
  },
  {
    icon: FileText,
    title: 'Legal Documentation',
    description: 'Drafting and review support for documents that require clear legal language and accurate content.'
  },
  {
    icon: BriefcaseBusiness,
    title: 'Court Representation',
    description: 'Professional case preparation and representation support focused on clarity, process and procedural awareness.'
  },
  {
    icon: ShieldCheck,
    title: 'Legal Consultation',
    description: 'Client-focused consultations to understand legal issues, gather relevant information and outline next steps.'
  },
  {
    icon: BookOpenText,
    title: 'Case Documentation & Analysis',
    description: 'Organizing and reviewing case materials to identify key facts, dates, parties and important legal details.'
  }
];

export function PracticeAreas() {
  return (
    <section className="bg-[#f4f0ea] py-20">
      <div className="container-shell">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-kicker">Practice areas</span>
          <h2 className="section-title">Professional legal support across key matters</h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {practiceAreas.map(({ icon: Icon, title, description }) => (
            <article key={title} className="card-surface flex h-full flex-col p-6">
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
