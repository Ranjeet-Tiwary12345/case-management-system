import { ContactForm } from '@/components/ContactForm';

export default function ContactPage() {
  return (
    <section className="container-shell py-16 md:py-20">
      <div className="mx-auto max-w-2xl text-center">
        <span className="section-kicker">Contact</span>
        <h1 className="section-title">Contact Advocate Ranjeet Tiwary</h1>
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <aside className="card-surface bg-white p-6 md:p-8">
          <h2 className="font-serif text-2xl text-slate-900">Professional contact details</h2>
          <ul className="mt-6 space-y-5 text-sm text-slate-700">
            <li><span className="font-medium text-slate-900">Phone:</span> [Phone number to be added]</li>
            <li><span className="font-medium text-slate-900">Email:</span> [Email address to be added]</li>
            <li><span className="font-medium text-slate-900">Office:</span> [Office address to be added]</li>
          </ul>
        </aside>

        <div className="card-surface bg-white p-6 md:p-8">
          <h2 className="font-serif text-2xl text-slate-900">Request a Consultation</h2>
          <div className="mt-6">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
