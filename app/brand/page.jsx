import { Features, Footer, Navbar, Hero, FAQ, Statistic } from 'sections';

const BrandPage = () => (
  <div className="bg-gradient-to-r from-blue-100 via-blue-300 to-blue-500">
    <Navbar />
    <Hero />
    <Statistic />
    <Features />
    <FAQ />
    <Footer />
  </div>
);

export default BrandPage;
