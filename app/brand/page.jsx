import { Features, Footer, Navbar, Hero, FAQ, Statistic, HowItWorks } from 'sections';
import { API_URL } from 'utils/config';

const getData = async () => {
  const res = await fetch(`${API_URL}/data/info.json`);
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
};
const BrandPage = async () => {
  const { brand } = await getData();
  return (
    <div className="bg-gradient-to-r from-blue-100 via-blue-300 to-blue-500">
      <Navbar />
      <Hero title={brand.hero.title} subTitle={brand.hero.subTitle} requestHref="https://docs.google.com/forms/d/e/1FAIpQLSfBwe-b6bK8caThCruhJAEJxHfixzw6NefJUD1i2Dkiweia7w/viewform" />
      <Statistic />
      <Features data={brand.features} />
      <HowItWorks data={brand.steps} />
      <FAQ />
      <Footer />
    </div>
  );
};

export default BrandPage;
