import Button from '~/components/button';

export default function Home() {
  return (
    <main className="flex flex-col text-center p-24">
      <p className="text-center">Upload goes here</p>
      <div className="flex justify-center mt-12">
        <Button href="/" text="&larr; Go back" />
      </div>
    </main>
  );
}
