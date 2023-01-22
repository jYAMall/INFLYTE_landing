import Link from 'next/link';
import Icon3M from '../../assets/icons/3m.svg';

const BrandPage = () => (
  <div>
    <h1 className="text-black-50 font-bold text-2xl">Brand Page</h1>
    <Link href="/">Back to Home</Link>
    <Icon3M width={24} height={24} />
  </div>
);

export default BrandPage;
