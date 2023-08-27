import classNames from 'classnames';
import './globals.css';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import Footer from '~/components/footer';
import Header from '~/components/header';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "It's All About Cats",
  description: 'Meow Meow',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={classNames(
          montserrat.className,
          'flex min-h-screen flex-col',
        )}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
