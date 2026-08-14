import { ConsultationSection } from '@/components/ConsultationSection';
import { Hero } from '@/components/Hero';
import { LegalServices } from '@/components/LegalServices';
import { PracticeAreas } from '@/components/PracticeAreas';

export default function HomePage() {
  return (
    <>
      <Hero />
      <section className="bg-white py-20">
        <div className="container-shell">
          <div className="mx-auto max-w-2xl text-center">
            <span className="section-kicker">Professional approach</span>
            <h2 className="section-title">Professional Approach</h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                title: 'Careful Case Analysis',
                description: 'Understand documents, facts and important case information.'
              },
              {
                title: 'Clear Communication',
                description: 'Present legal information in a clear and understandable manner.'
              },
              {
                title: 'Client-Focused Assistance',
                description: 'Focus on the individual requirements and circumstances of each matter.'
              }
            ].map((item) => (
              <article key={item.title} className="card-surface p-8 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-[#d7d0c2] bg-[#f8f3e8] text-[#9b7a3b]">
                  <span className="text-sm font-semibold">01</span>
                </div>
                <h3 className="mt-6 text-2xl text-slate-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-700">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <PracticeAreas />
      <LegalServices />
      <ConsultationSection />
    </>
  );
}
