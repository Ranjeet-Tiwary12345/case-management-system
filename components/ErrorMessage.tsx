import { AlertTriangle } from 'lucide-react';

type ErrorMessageProps = {
  message: string;
};

export function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <div className="flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
      <AlertTriangle className="mt-0.5 h-4 w-4 flex-none" />
      <span>{message}</span>
    </div>
  );
}
