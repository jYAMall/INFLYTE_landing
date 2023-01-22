import Link from 'next/link';
import Icon3M from 'assets/icons/3m.svg';
import { TitleText } from 'components/CustomTexts';

const BrandPage = () => (
  <div>
    <h1 className="text-black-50 font-bold text-2xl">Brand Page</h1>
    <Link href="/">Back to Home</Link>
    <Icon3M width={24} height={24} />
    <TitleText>dasdas</TitleText>
  </div>
);

export default BrandPage;
