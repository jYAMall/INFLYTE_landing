'use client';

const Footer = () => (
  <footer aria-label="Site Footer" className="bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="flex justify-center text-black font-bold text-2xl">
        Inflyte
      </div>

      <p className="mx-auto mt-6 text-center leading-relaxed text-black-500">
        Inflyte - Efficient, Secure, and Transparent Influencer Campaigns.
      </p>

      <div className="mt-12 flex justify-center gap-6 md:gap-8" />
      <div className="flex justify-center">
        <p className="mr-1 text-gray-800">Contact Email:</p>
        <a
          href="mailto:info@inflyte.space"
          aria-label="Our email"
          title="Our email"
          className="transition-colors duration-300 text-deep-purple-accent-400 hover:underline decoration-1"
        >
          info@inflyte.space
        </a>
      </div>
      <p className="text-center text-black-300 font-bold mt-10">Made in 🇺🇦 with ❤️ by 🙌</p>

    </div>
  </footer>
);

export default Footer;
