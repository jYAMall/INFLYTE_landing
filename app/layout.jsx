import '../styles/globals.css';
import { Sen } from '@next/font/google';

const font = Sen({
  subsets: ['latin'],
  weight: ['400', '700', '800'],
});

const RootLayout = ({ children }) => (
  <html lang="en" className={font.className}>
    {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
    <head />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />
    <body>{children}</body>
  </html>
);

export default RootLayout;
