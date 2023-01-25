import '../styles/globals.css';
import { Nunito_Sans } from '@next/font/google';
import Script from 'next/script';
import * as snippet from '@segment/snippet';

// Segment setup
function renderSnippet() {
  const opts = {
    apiKey: process.env.SEGMENT_API_KEY,
    // note: the page option only covers SSR tracking.
    // Page.js is used to track other events using `window.analytics.page()`
    page: true,
  };

  if (process.env.NODE_ENV === 'development') {
    return snippet.max(opts);
  }

  return snippet.min(opts);
}

const font = Nunito_Sans({
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
    <body>
      {children}
      <Script
        id="segment-script"
        dangerouslySetInnerHTML={{ __html: renderSnippet() }}
      />
      <Script src={`//code.tidio.co/${process.env.TIDIO_API_KEY}.js`} />
    </body>
  </html>
);

export default RootLayout;
