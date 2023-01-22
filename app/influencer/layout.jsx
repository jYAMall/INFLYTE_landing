import Script from 'next/script';

const InfluencerLayout = ({ children }) => (
  <>
    <div className="influencerLayout">{children}</div>
    <Script src={`//code.tidio.co/${process.env.TIDIO_API_KEY}.js`} />
  </>
);

export default InfluencerLayout;
