import { Features, Footer, Navbar, Hero, FAQ, Statistic, HowItWorks } from 'sections';

const getData = async () => {
  const res = await fetch(`${process.env.API_URL}/data/info.json`);
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
};

const requestHref = 'https://forms.gle/oBxFM7etmGK2dfh86';
const BrandPage = async () => {
  const { brand } = await getData();
  return (
    <div className="bg-gradient-to-r from-blue-100 via-blue-300 to-blue-500">
      <Navbar />
      <Hero title={brand.hero.title} subTitle={brand.hero.subTitle} requestHref={requestHref} />
      <Statistic
        title={brand.stats.title}
        subTitle={brand.stats.title}
        leftSide={brand.stats.leftSide}
        rightSide={brand.stats.rightSide}
        requestHref={requestHref}
      />
      <Features data={brand.features} />
      <HowItWorks data={brand.steps} />
      <FAQ data={brand.faq} />
      <Footer />
    </div>
  );
};

export default BrandPage;
