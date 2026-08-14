import { FileText, Scale } from 'lucide-react';
import { CaseInformationRow } from './CaseInformationRow';
import { emptyCaseData, type NormalizedCaseData } from '@/lib/caseParser';

export function CaseInformation({ data }: { data: Partial<NormalizedCaseData> | null }) {
  const info = data && Object.keys(data).length ? data : emptyCaseData;

  const fields: Array<{ label: string; value?: string }> = [
    { label: 'Case Number', value: info.caseNumber },
    { label: 'Case Category', value: info.caseCategory },
    { label: 'Court Name', value: info.courtName },
    { label: 'Court Number', value: info.courtNumber },
    { label: 'Serial Number', value: info.serialNumber },
    { label: 'Date of Filing', value: info.dateOfFiling },
    { label: 'Date of Hearing', value: info.dateOfHearing },
    { label: 'Next Hearing Date', value: info.nextHearingDate },
    { label: 'Petitioner', value: info.petitioner },
    { label: 'Respondent', value: info.respondent },
    { label: 'Advocate Name', value: info.advocateName },
    { label: 'Opposite Party Advocate', value: info.oppositePartyAdvocate },
    { label: 'Case Status', value: info.caseStatus },
    { label: 'Police Station', value: info.policeStation },
    { label: 'FIR Number', value: info.firNumber },
    { label: 'Year', value: info.year },
    { label: 'Judge Name', value: info.judgeName },
    { label: 'Case Type', value: info.caseType },
    { label: 'Other Important Details', value: info.otherImportantDetails }
  ];

  return (
    <div className="card-surface p-6 md:p-8">
      <div className="flex items-center justify-between gap-4 border-b border-[#e7e1d4] pb-5">
        <div>
          <div className="text-[11px] uppercase tracking-[0.2em] text-slate-500">Extracted information</div>
          <h3 className="mt-2 font-serif text-2xl text-slate-900">Case Information</h3>
        </div>
        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#d7d0c2] bg-[#f5f1e8] text-[#9b7a3b]">
          <Scale className="h-5 w-5" />
        </div>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {fields.map((field) => (
          <CaseInformationRow key={field.label} label={field.label} value={field.value} />
        ))}
      </div>

      <div className="mt-6 flex items-start gap-3 rounded-xl border border-[#e7e1d4] bg-[#f8f6f1] p-4 text-sm text-slate-700">
        <FileText className="mt-0.5 h-4 w-4 text-[#9b7a3b]" />
        <span>Case analysis completed successfully. The processed document has been sent to the configured email address.</span>
      </div>
    </div>
  );
}
