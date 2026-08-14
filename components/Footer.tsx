import Link from 'next/link';

const footerLinks = [
  { href: '/practice-areas', label: 'Practice Areas' },
  { href: '/legal-services', label: 'Legal Services' },
  { href: '/case-analysis', label: 'Case Document Analysis' },
  { href: '/contact', label: 'Contact' }
];

export function Footer() {
  return (
    <footer className="border-t border-[#e7e1d4] bg-[#111827] text-slate-200">
      <div className="container-shell py-12">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-start">
          <div>
            <div className="font-serif text-3xl text-white">Ranjeet Tiwary</div>
            <div className="mt-2 text-xs font-medium uppercase tracking-[0.3em] text-[#d7c494]">Advocate</div>
            <div className="mt-6 max-w-xl text-sm leading-7 text-slate-300">
              The information provided on this website is for general informational purposes and does not constitute legal advice. No advocate-client relationship is created solely through the use of this website.
            </div>
          </div>

          <div>
            <div className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-[#d7c494]">Navigate</div>
            <ul className="space-y-3 text-sm text-slate-300">
              {footerLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <div>© 2026 Ranjeet Tiwary. All rights reserved.</div>
          <div className="text-slate-500">Professional legal consultation and case assistance.</div>
        </div>
      </div>
    </footer>
  );
}
