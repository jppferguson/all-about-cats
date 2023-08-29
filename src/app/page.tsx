import Button from '~/components/button';
import CatImage from '~/components/catImage';

export default async function Home() {
  const cats = await getCats();
  const favouriteCats = await getFavouriteCats();
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-center justify-between p-24">
      {!cats.length ? (
        <div className="flex flex-col justify-center items-center w-full">
          <h2 className="text-lg font-bold mb-2">Oh no!</h2>
          <p className="text-sm">No cats have been uploaded yet!</p>
          <Button
            type="link"
            text="Let's upload one!"
            href="/upload"
            icon="upload"
            className="mt-8"
          />
        </div>
      ) : (
        cats.map((cat: Cat) => (
          <CatImage
            key={cat.id}
            id={cat.id}
            imageUrl={cat.url}
            favouriteId={
              favouriteCats?.find(
                (favouriteCat) => favouriteCat.image.id === cat.id,
              )?.id
            }
          />
        ))
      )}
    </main>
  );
}

async function getCats(): Promise<Cat[]> {
  const res = await fetch(`${process.env.API_BASE_URL}/images/?limit=10`, {
    headers: {
      'x-api-key': process.env.API_KEY as string,
    },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

async function getFavouriteCats(): Promise<FavouriteCat[]> {
  const res = await fetch(`${process.env.API_BASE_URL}/favourites`, {
    headers: {
      'x-api-key': process.env.API_KEY as string,
    },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}
