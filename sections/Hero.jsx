import Image from 'next/image';
import Button from '../components/Button';

const HeroSection = ({ title, subTitle, requestHref, heroImg }) => (
  <section className="px-4 py-24 mx-auto max-w-7xl">
    <div className="w-full mx-auto text-left md:w-11/12 xl:w-9/12 md:text-center">
      <h1 className="mb-6 text-4xl font-extrabold leading-none tracking-normal text-gray-900 md:text-6xl md:tracking-tight">
        {title}
      </h1>
      <p className="px-0 mb-6 text-lg text-gray-600 md:text-xl lg:px-24">
        {subTitle}
      </p>
      <div className="mb-4 space-x-0 md:space-x-2 md:mb-8">
        <Button href={requestHref}>Request invite</Button>
      </div>
    </div>
    <div className="w-full mx-auto mt-20 text-center md:w-10/12">
      <Image src={heroImg} alt="Hellonext feedback boards software screenshot"
        width={1200} height={800}
        className="w-full rounded-lg shadow-2xl"
      />
    </div>
  </section>

);

export default HeroSection;
