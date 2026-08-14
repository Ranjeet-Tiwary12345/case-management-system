import { PracticeAreas } from '@/components/PracticeAreas';

export default function PracticeAreasPage() {
  return (
    <section className="py-16 md:py-20">
      <div className="container-shell">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-kicker">Practice areas</span>
          <h1 className="section-title">Practice Areas</h1>
          <p className="mt-5 text-base leading-8 text-slate-700">
            The exact scope of legal matters can be tailored to the unique facts and requirements of each client matter.
          </p>
        </div>
      </div>
      <div className="mt-12">
        <PracticeAreas />
      </div>
    </section>
  );
}
