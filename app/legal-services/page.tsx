import { LegalServices } from '@/components/LegalServices';

export default function LegalServicesPage() {
  return (
    <section className="py-16 md:py-20">
      <div className="container-shell">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-kicker">Legal services</span>
          <h1 className="section-title">Legal Services</h1>
        </div>
      </div>
      <div className="mt-12">
        <LegalServices />
      </div>
    </section>
  );
}
