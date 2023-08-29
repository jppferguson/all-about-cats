import { NextRequest, NextResponse } from 'next/server';

type VoteResponseSuccess = NextResponse<{
  success: true;
}>;
type VoteResponseError = NextResponse<{ success: false; error: string }>;
type VoteResponse = VoteResponseSuccess | VoteResponseError;

export async function POST(request: NextRequest): Promise<VoteResponse> {
  const data = await request.json();
  const imageId = data.imageId;
  const votePositive = data.votePositive;

  if (votePositive && !imageId) {
    return NextResponse.json({ success: false, error: 'No image id' });
  }

  const response = await fetch(`${process.env.API_BASE_URL}/votes/`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'x-api-key': process.env.API_KEY as string,
    },
    body: JSON.stringify({
      image_id: imageId,
      value: votePositive ? 1 : -1,
    }),
  });

  if (!response.ok) {
    return NextResponse.json({
      success: false,
      error: await response.text(),
    });
  }

  return NextResponse.json({ success: true });
}
