import { NextRequest, NextResponse } from 'next/server';

type UploadResponseSuccess = NextResponse<{ success: true }>;
type UploadResponseError = NextResponse<{ success: false; error: string }>;

type UploadResponse = UploadResponseSuccess | UploadResponseError;

export async function POST(request: NextRequest): Promise<UploadResponse> {
  const formData = await request.formData();
  const file: File | null = formData.get('file') as unknown as File;

  if (!file) {
    return NextResponse.json({ success: false, error: 'No image uploaded' });
  }

  const response = await fetch(`${process.env.API_BASE_URL}/images/upload/`, {
    method: 'POST',
    headers: {
      'x-api-key': process.env.API_KEY as string,
    },
    body: formData,
  });

  if (!response.ok) {
    return NextResponse.json({ success: false, error: await response.text() });
  }

  return NextResponse.json({ success: true });
}
