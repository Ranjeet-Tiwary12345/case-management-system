type CaseInformationRowProps = {
  label: string;
  value?: string;
};

export function CaseInformationRow({ label, value }: CaseInformationRowProps) {
  const displayValue = value && value.trim() ? value : 'Not available';

  return (
    <div className="rounded-xl border border-[#e7e1d4] bg-[#faf8f4] p-4">
      <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">{label}</div>
      <div className="mt-2 text-sm leading-6 text-slate-800">{displayValue}</div>
    </div>
  );
}
