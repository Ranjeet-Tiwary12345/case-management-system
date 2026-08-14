import './globals.css';
import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: 'Ranjeet Tiwary | Advocate',
  description: 'Professional legal consultation, case documentation and legal assistance by Advocate Ranjeet Tiwary.',
  openGraph: {
    title: 'Ranjeet Tiwary | Advocate',
    description: 'Professional legal consultation, case documentation and legal assistance by Advocate Ranjeet Tiwary.',
    url: '/',
    siteName: 'Ranjeet Tiwary Advocate',
    type: 'website'
  },
  alternates: {
    canonical: '/'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#f7f5f1] text-slate-800 antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
