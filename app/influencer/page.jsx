import { FAQ, Features, Footer, Hero, Navbar, Statistic } from 'sections';

const InfluencerPage = () => (
  <div className="bg-gradient-to-b from-pink-300 via-purple-300 to-indigo-400">
    <Navbar />
    <Hero />
    <Statistic />
    <Features />
    <FAQ />
    <Footer />
  </div>
);

export default InfluencerPage;
