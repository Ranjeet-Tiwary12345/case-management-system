export const N8N_FILE_FIELD = process.env.N8N_FILE_FIELD || 'data';

export async function submitCaseAnalysisToN8n(file: File) {
  const endpoint = process.env.N8N_WEBHOOK_URL;

  if (!endpoint) {
    throw new Error('The case analysis service is not configured.');
  }

  const formData = new FormData();
  formData.append(N8N_FILE_FIELD, file, file.name);

  const response = await fetch(endpoint, {
    method: 'POST',
    body: formData,
    cache: 'no-store'
  });

  if (!response.ok) {
    throw new Error('We could not process this document right now. Please try again.');
  }

  const text = await response.text();
  if (!text) {
    throw new Error('We could not process this document right now. Please try again.');
  }

  try {
    return JSON.parse(text);
  } catch {
    return text;
  }
}
