import Link from 'next/link';

const HomePage = () => (
  <div className="w-full h-screen flex">
    <Link href="/influencer" className="w-[50%] h-full flex items-center justify-center hover:bg-sky-700 group">
      <h1 className="text-black-50 font-bold text-4xl group-hover:text-white">Influencer</h1>
    </Link>
    <Link href="/brand" className="w-[50%] h-full flex items-center justify-center hover:bg-sky-700 group">
      <h1 className="text-black-50 font-bold text-4xl group-hover:text-white">Brand</h1>
    </Link>
  </div>
);

export default HomePage;
