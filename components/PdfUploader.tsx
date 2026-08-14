'use client';

import { useRef, useState } from 'react';
import { AlertCircle, CheckCircle2, FileText, UploadCloud } from 'lucide-react';
import { CaseInformation } from './CaseInformation';
import { ErrorMessage } from './ErrorMessage';
import { emptyCaseData, normalizeCaseData, type NormalizedCaseData } from '@/lib/caseParser';

const MAX_SIZE_MB = 10;
const PDF_UPLOAD_FIELD_NAME = 'data';

export function PdfUploader() {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [caseData, setCaseData] = useState<Partial<NormalizedCaseData> | null>(null);
  const [successMessage, setSuccessMessage] = useState('');

  const validateFile = (file: File): string => {
    if (!file) return 'Please select a PDF file.';
    if (file.type !== 'application/pdf' && !file.name.toLowerCase().endsWith('.pdf')) {
      return 'Please upload a valid PDF file.';
    }
    if (file.size > MAX_SIZE_MB * 1024 * 1024) {
      return 'The selected file is too large. Please upload a PDF under 10 MB.';
    }
    return '';
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] ?? null;
    setError('');
    setSuccessMessage('');
    setCaseData(null);

    if (!file) {
      setSelectedFile(null);
      return;
    }

    const validationError = validateFile(file);
    if (validationError) {
      setError(validationError);
      setSelectedFile(null);
      if (fileInputRef.current) fileInputRef.current.value = '';
      return;
    }

    setSelectedFile(file);
  };

  const handleAnalyze = async () => {
    if (!selectedFile) {
      setError('Please select a PDF document to continue.');
      return;
    }

    const validationError = validateFile(selectedFile);
    if (validationError) {
      setError(validationError);
      return;
    }

    setError('');
    setSuccessMessage('');
    setCaseData(null);
    setIsLoading(true);

    try {
      const response = await fetch('/api/case-analysis', {
        method: 'POST',
        body: (() => {
          const formData = new FormData();
          formData.append(PDF_UPLOAD_FIELD_NAME, selectedFile);
          return formData;
        })(),
        cache: 'no-store'
      });

      if (!response.ok) {
        const payload = await response.json().catch(() => null);
        const message = payload?.error || "We couldn't process this document right now. Please try again.";
        throw new Error(message);
      }

      const payload = await response.json();
      const normalized = normalizeCaseData(payload);
      const hasAnyData = Object.values(normalized).some((value) => value && value.trim() !== '');

      setCaseData(hasAnyData ? normalized : emptyCaseData);
      setSuccessMessage('Case analysis completed successfully.');
    } catch (err) {
      const message = err instanceof Error && err.message ? err.message : "We couldn't process this document right now. Please try again.";
      setError(message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-8">
      <div className="card-surface p-6 md:p-8">
        <div className="flex items-center justify-between gap-4 border-b border-[#e7e1d4] pb-5">
          <div>
            <div className="text-[11px] uppercase tracking-[0.22em] text-slate-500">Document intake</div>
            <h3 className="mt-2 font-serif text-2xl text-slate-900">Upload Case PDF</h3>
          </div>
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#d7d0c2] bg-[#f5f1e8] text-[#9b7a3b]">
            <UploadCloud className="h-5 w-5" />
          </div>
        </div>

        <div className="mt-6 rounded-2xl border-2 border-dashed border-[#d7d0c2] bg-[#faf8f4] p-6">
          <input ref={fileInputRef} type="file" accept="application/pdf" className="hidden" onChange={handleFileChange} />
          <div className="flex flex-col items-center justify-center gap-4 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#d7d0c2] bg-white text-[#9b7a3b]">
              <FileText className="h-7 w-7" />
            </div>
            <div>
              <div className="text-lg font-medium text-slate-900">Upload Case PDF</div>
              <div className="mt-2 text-sm text-slate-600">Supported format: PDF files only</div>
            </div>
            <button type="button" className="button-secondary" onClick={() => fileInputRef.current?.click()}>
              Select PDF
            </button>
            {selectedFile && (
              <div className="text-sm text-slate-700">
                Selected file: <span className="font-medium text-slate-900">{selectedFile.name}</span>
              </div>
            )}
          </div>
        </div>

        {error && <div className="mt-6"><ErrorMessage message={error} /></div>}

        {successMessage && (
          <div className="mt-6 flex items-start gap-3 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-700">
            <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none" />
            <span>{successMessage}</span>
          </div>
        )}

        <button
          type="button"
          className="button-primary mt-6 w-full disabled:cursor-not-allowed disabled:bg-slate-400"
          onClick={handleAnalyze}
          disabled={isLoading || !selectedFile}
        >
          {isLoading ? 'Analyzing...' : 'Analyze Case'}
        </button>

        {isLoading && (
          <div className="mt-6 rounded-xl border border-[#e7e1d4] bg-[#faf8f4] p-4">
            <div className="flex items-center gap-3 text-sm text-slate-700">
              <div className="h-4 w-4 animate-spin rounded-full border-2 border-slate-300 border-t-slate-700" />
              Processing uploaded document and extracting case information...
            </div>
          </div>
        )}
      </div>

      {caseData && <CaseInformation data={caseData} />}
    </div>
  );
}
