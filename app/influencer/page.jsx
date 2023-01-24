import { Features, Footer, Navbar, Hero, FAQ, Statistic, HowItWorks, Team } from 'sections';

const getData = async () => {
  const res = await fetch(`${process.env.API_URL}/data/info.json`);
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
};

const requestHref = 'https://forms.gle/bKcLZsjKhwuvf1y6A';
const InfluencerPage = async () => {
  const { influencer } = await getData();
  return (
    <div className="bg-gradient-to-b from-pink-300 via-purple-300 to-indigo-400">
      <Navbar />
      <Hero title={influencer.hero.title} subTitle={influencer.hero.subTitle} requestHref={requestHref} heroImg={influencer.hero.imgUrl} />
      <Statistic
        title={influencer.stats.title}
        subTitle={influencer.stats.title}
        leftSide={influencer.stats.leftSide}
        rightSide={influencer.stats.rightSide}
        requestHref={requestHref}
      />
      <Features data={influencer.features} />
      <HowItWorks data={influencer.steps} />
      <FAQ data={influencer.faq} />
      <Team />
      <Footer />
    </div>
  );
};

export default InfluencerPage;
