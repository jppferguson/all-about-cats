import Button from '~/components/button';
import Upload from '~/components/upload';

export default function Home() {
  return (
    <main className="flex flex-col text-center p-24">
      <Upload />
      <div className="flex justify-center mt-12">
        <Button icon="arrowBack" type="link" href="/" text="Go back" />
      </div>
    </main>
  );
}
