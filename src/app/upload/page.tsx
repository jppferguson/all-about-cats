import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex flex-col text-center p-24">
      <a href="/" className="mb-12">
        &larr; Go back
      </a>
      <p className="text-center">Upload goes here</p>
    </main>
  );
}
