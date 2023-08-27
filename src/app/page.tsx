import Image from 'next/image';
import CatImage from '~/components/catImage';

export default function Home() {
  return (
    <main className="flex items-center justify-between p-24">
      {['img1', 'img2'].map((image) => (
        <CatImage key={image} id={image} />
      ))}
    </main>
  );
}
