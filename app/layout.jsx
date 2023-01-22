import '../styles/globals.css';
import { Inter } from '@next/font/google';

const inter = Inter({
  subsets: ['latin'],
  // weight: ['100', '300', '400', '500', '700', '900'],
});

const RootLayout = ({ children }) => (
  <html lang="en" className={inter.className}>
    {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
    <head />
    <body>{children}</body>
  </html>
);

export default RootLayout;
