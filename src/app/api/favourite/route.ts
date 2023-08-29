import { NextRequest, NextResponse } from 'next/server';

type FavouriteResponseSuccess = NextResponse<{
  success: true;
  favouriteId?: number;
}>;
type FavouriteResponseError = NextResponse<{ success: false; error: string }>;
type FavouriteResponse = FavouriteResponseSuccess | FavouriteResponseError;

export async function POST(request: NextRequest): Promise<FavouriteResponse> {
  const data = await request.json();
  const favouriteId = data.favouriteId;
  const imageId = data.imageId;
  const setFavourite = data.setFavourite;

  if (setFavourite && !imageId) {
    return NextResponse.json({ success: false, error: 'No image id' });
  }

  if (!setFavourite && !favouriteId) {
    return NextResponse.json({ success: false, error: 'No favourite id' });
  }

  if (setFavourite) {
    const response = await fetch(`${process.env.API_BASE_URL}/favourites/`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'x-api-key': process.env.API_KEY as string,
      },
      body: JSON.stringify({
        image_id: imageId,
      }),
    });

    if (!response.ok) {
      return NextResponse.json({
        success: false,
        error: await response.text(),
      });
    }
    const body = await response.json();
    return NextResponse.json({
      success: true,
      favouriteId: body.id,
    });
  }
  const response = await fetch(
    `${process.env.API_BASE_URL}/favourites/${favouriteId}`,
    {
      method: 'DELETE',
      headers: {
        'x-api-key': process.env.API_KEY as string,
      },
    },
  );

  if (!response.ok) {
    return NextResponse.json({
      success: false,
      error: await response.text(),
    });
  }

  return NextResponse.json({ success: true });
}
