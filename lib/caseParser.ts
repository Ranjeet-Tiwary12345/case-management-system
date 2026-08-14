export type NormalizedCaseData = {
  caseNumber: string;
  caseCategory: string;
  courtName: string;
  courtNumber: string;
  serialNumber: string;
  dateOfFiling: string;
  dateOfHearing: string;
  nextHearingDate: string;
  petitioner: string;
  respondent: string;
  advocateName: string;
  oppositePartyAdvocate: string;
  caseStatus: string;
  policeStation: string;
  firNumber: string;
  year: string;
  judgeName: string;
  caseType: string;
  otherImportantDetails: string;
};

export const emptyCaseData: NormalizedCaseData = {
  caseNumber: '',
  caseCategory: '',
  courtName: '',
  courtNumber: '',
  serialNumber: '',
  dateOfFiling: '',
  dateOfHearing: '',
  nextHearingDate: '',
  petitioner: '',
  respondent: '',
  advocateName: '',
  oppositePartyAdvocate: '',
  caseStatus: '',
  policeStation: '',
  firNumber: '',
  year: '',
  judgeName: '',
  caseType: '',
  otherImportantDetails: ''
};

const normalize = (value: unknown): string => {
  if (value === null || value === undefined) return '';
  if (typeof value === 'string') return value.trim();
  if (typeof value === 'number' || typeof value === 'boolean') return String(value);
  return JSON.stringify(value, null, 2).trim();
};

const findNestedJson = (input: unknown): unknown => {
  if (!input || typeof input !== 'string') return input;

  const trimmed = input.trim();
  if (!trimmed) return '';

  try {
    return JSON.parse(trimmed);
  } catch {
    // ignore parse failure and look for json-like fragments
  }

  const start = trimmed.indexOf('{');
  const end = trimmed.lastIndexOf('}');
  if (start !== -1 && end !== -1 && end > start) {
    const candidate = trimmed.slice(start, end + 1);
    try {
      return JSON.parse(candidate);
    } catch {
      return input;
    }
  }

  const bracketStart = trimmed.indexOf('[');
  const bracketEnd = trimmed.lastIndexOf(']');
  if (bracketStart !== -1 && bracketEnd !== -1 && bracketEnd > bracketStart) {
    const candidate = trimmed.slice(bracketStart, bracketEnd + 1);
    try {
      return JSON.parse(candidate);
    } catch {
      return input;
    }
  }

  return input;
};

const flattenObject = (value: unknown, result: Record<string, string> = {}): Record<string, string> => {
  if (!value || typeof value !== 'object') return result;

  for (const [key, item] of Object.entries(value as Record<string, unknown>)) {
    if (item && typeof item === 'object' && !Array.isArray(item)) {
      flattenObject(item, result);
      continue;
    }

    if (Array.isArray(item)) {
      result[key] = normalize(item.join(', '));
      continue;
    }

    result[key] = normalize(item);
  }

  return result;
};

const normalizeKey = (key: string): keyof NormalizedCaseData | null => {
  const map: Record<string, keyof NormalizedCaseData> = {
    caseNumber: 'caseNumber',
    case_number: 'caseNumber',
    caseNo: 'caseNumber',
    caseNumberNo: 'caseNumber',
    caseCategory: 'caseCategory',
    case_category: 'caseCategory',
    courtName: 'courtName',
    court_name: 'courtName',
    courtNumber: 'courtNumber',
    court_number: 'courtNumber',
    serialNumber: 'serialNumber',
    serial_number: 'serialNumber',
    dateOfFiling: 'dateOfFiling',
    date_of_filing: 'dateOfFiling',
    filingDate: 'dateOfFiling',
    dateOfHearing: 'dateOfHearing',
    date_of_hearing: 'dateOfHearing',
    hearingDate: 'dateOfHearing',
    nextHearingDate: 'nextHearingDate',
    next_hearing_date: 'nextHearingDate',
    petitioner: 'petitioner',
    respondent: 'respondent',
    advocateName: 'advocateName',
    advocate_name: 'advocateName',
    oppositePartyAdvocate: 'oppositePartyAdvocate',
    opposite_party_advocate: 'oppositePartyAdvocate',
    caseStatus: 'caseStatus',
    case_status: 'caseStatus',
    policeStation: 'policeStation',
    police_station: 'policeStation',
    firNumber: 'firNumber',
    fir_number: 'firNumber',
    year: 'year',
    judgeName: 'judgeName',
    judge_name: 'judgeName',
    caseType: 'caseType',
    case_type: 'caseType',
    otherImportantDetails: 'otherImportantDetails',
    other_important_details: 'otherImportantDetails',
    details: 'otherImportantDetails'
  };

  return map[key] ?? null;
};

export function normalizeCaseData(raw: unknown): NormalizedCaseData {
  const result: NormalizedCaseData = { ...emptyCaseData };

  if (!raw) return result;

  const parsed = findNestedJson(raw);

  if (parsed && typeof parsed === 'object' && !Array.isArray(parsed)) {
    const flatMap = flattenObject(parsed);

    for (const [key, value] of Object.entries(flatMap)) {
      const normalizedKey = normalizeKey(key);
      if (!normalizedKey) continue;
      if (result[normalizedKey] !== undefined) {
        result[normalizedKey] = normalize(value);
      }
    }

    const directObject = parsed as Record<string, unknown>;
    const candidateKeys = Object.keys(directObject);
    for (const candidate of candidateKeys) {
      const mapped = normalizeKey(candidate);
      if (!mapped) continue;
      result[mapped] = normalize(directObject[candidate]);
    }

    if (directObject.data && typeof directObject.data === 'object') {
      const nested = directObject.data as Record<string, unknown>;
      Object.entries(nested).forEach(([key, value]) => {
        const mapped = normalizeKey(key);
        if (mapped) result[mapped] = normalize(value);
      });
    }
  }

  if (typeof parsed === 'string') {
    const maybeJson = findNestedJson(parsed);
    if (maybeJson && typeof maybeJson === 'object' && !Array.isArray(maybeJson)) {
      return normalizeCaseData(maybeJson);
    }
  }

  return result;
}
