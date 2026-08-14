import { NextRequest, NextResponse } from 'next/server';

const webhookUrl = process.env.N8N_WEBHOOK_URL;
const fileFieldName = process.env.N8N_FILE_FIELD || 'data';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get(fileFieldName) as File | null;

    if (!file || !(file instanceof File)) {
      return NextResponse.json({ error: 'Please upload a valid PDF file.' }, { status: 400 });
    }

    if (file.type !== 'application/pdf' && !file.name.toLowerCase().endsWith('.pdf')) {
      return NextResponse.json({ error: 'Please upload a valid PDF file.' }, { status: 400 });
    }

    if (!webhookUrl) {
      return NextResponse.json({ error: 'The case analysis service is not configured.' }, { status: 503 });
    }

    const upstreamFormData = new FormData();
    upstreamFormData.append(fileFieldName, file, file.name);

    const response = await fetch(webhookUrl, {
      method: 'POST',
      body: upstreamFormData,
      cache: 'no-store'
    });

    if (!response.ok) {
      return NextResponse.json({ error: "We couldn't process this document right now. Please try again." }, { status: 502 });
    }

    const responseText = await response.text();
    if (!responseText) {
      return NextResponse.json({ error: "We couldn't process this document right now. Please try again." }, { status: 502 });
    }

    let parsed: unknown = responseText;
    try {
      parsed = JSON.parse(responseText);
    } catch {
      // allow raw text fallback for non-JSON responses
    }

    return NextResponse.json(parsed, { status: 200 });
  } catch (error) {
    if (error instanceof Error && error.name === 'AbortError') {
      return NextResponse.json({ error: 'The request timed out. Please try again.' }, { status: 504 });
    }

    return NextResponse.json({ error: "We couldn't process this document right now. Please try again." }, { status: 500 });
  }
}
