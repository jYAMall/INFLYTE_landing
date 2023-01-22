import Script from 'next/script';

const BrandLayout = ({ children }) => (
  <>
    <div className="brandLayout">{children}</div>
    <Script src={`//code.tidio.co/${process.env.TIDIO_API_KEY}.js`} />
  </>

);

export default BrandLayout;
