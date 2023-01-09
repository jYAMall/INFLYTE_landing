import React from 'react';
import { Link } from 'react-router-dom';

import '../assets/css/styles.scss';
//import Breadcrumb from '../../layouts/AdminLayout/Breadcrumb';

import heroImage1 from '../assets/images/app_hero_1.png';
import blockchain from '../assets/images/blockchain.png';
import artificial_intelligence from '../assets/images/artificial_intelligence.png';
import global_payments from '../assets/images/global_payments.png';
import feature1 from '../assets/images/feature_1.png';
import feature2 from '../assets/images/feature_2.png';


const Landing = () => {
  return (
    <React.Fragment>
      <div className="wrapper">
        <div>
          <nav className="navbar landing-nav navbar-expand-lg navbar-light navbar-default navbar-fixed-top past-main" role="navigation">
            <div className="container">
              <a className="navbar-brand page-scroll bg-transparent" href="#main">
                <h1 className='text-logo'>INFLYTE</h1>
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto" />
                <ul className="navbar-nav my-2 my-lg-0">
                  <li className="nav-item">
                    <a className="nav-link page-scroll" href="#about">
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link page-scroll" href="#services">
                      Solutions
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link page-scroll" href="#features">
                      Benefits
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link page-scroll" href="#reviews">
                      Blog
                    </a>
                  </li>
                  <li className="nav-item">
                  <Link className="nav-link" to="#">
                    SIGN UP
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="#">
                    LOGIN
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div className="main" id="about">
            <div className="hero-section app-hero">
              <div className="container">
                <div className="hero-content app-hero-content text-center">
                  <div className="row justify-content-md-center">
                    <div className="col-md-10 z-0">
                      <h1 className="wow fadeInUp" data-wow-delay="0s">
                      Maximizing advertising reach with the perfect influence
                      </h1>
                      <p className="wow fadeInUp" data-wow-delay="0.2s">
                        Advanced technologies for an ultimate solution.  <br className="hidden-xs" /> The best choice for both advertisers and influencers.
                      </p>
                      <button className="bt" data-wow-delay="0.2s">
                        Talk to us
                      </button>
                      <button className="bt " data-wow-delay="0.2s">
                        White paper
                      </button>
                    </div>
                    <div className="col-md-12">
                      <div className="hero-image">
                        <img className="img-fluid" src={heroImage1} alt="App Hero 1" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="services-section text-center" id="services">
              <div className="container">
                <div className="row  justify-content-md-center">
                  <div className="col-md-8">
                    <div className="services-content">
                      <h1 className="wow fadeInUp" data-wow-delay="0s">
                        We use the most advanced technologies to give our users the best experience
                      </h1>
                      <p className="wow fadeInUp" data-wow-delay="0.2s">
                        Our customers will benefit from a simple and intuitive interface that hides complex technological processes, ensuring a smooth and user-friendly experience. This helps maximize the benefit for each participant.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-12 text-center">
                    <div className="services">
                      <div className="row">
                        <div className="col-sm-4 wow fadeInUp" data-wow-delay="0.2s">
                          <div className="services-icon">
                            <img src={blockchain} height="60" width="60" alt="Service" />
                          </div>
                          <div className="services-description">
                            <h1>Blockchain</h1>
                            <p>
                             Smart contracts facilitate secure and transparent interactions between platform users, while the integration of crypto tokens offers a convenient and flexible payment system within the platform.
                            </p>
                          </div>
                        </div>
                        <div className="col-sm-4 wow fadeInUp" data-wow-delay="0.3s">
                          <div className="services-icon">
                            <img className="icon-2" src={artificial_intelligence} height="60" width="60" alt="Service" />
                          </div>
                          <div className="services-description">
                            <h1>Artificial Intelligence</h1>
                            <p>
                             Our AI model analyzes public data and user feedback to continuously improve and offer the most targeted and profitable ad opportunities to our users, maximizing their success.
                            </p>
                          </div>
                        </div>
                        <div className="col-sm-4 wow fadeInUp" data-wow-delay="0.4s">
                          <div className="services-icon">
                            <img className="icon-3" src={global_payments} height="60" width="60" alt="Service" />
                          </div>
                          <div className="services-description">
                            <h1>Global payments</h1>
                            <p>
                             Our platform offers a range of tools for paying for services and receiving payouts in both fiat and cryptocurrency, making it accessible and convenient for users in over 150 countries, regardless of their preferred payment method.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-features" id="features">
              <div className="container">
                <div className="flex-split">
                  <div className="f-left wow fadeInUp" data-wow-delay="0s">
                    <div className="left-content">
                      <img className="img-fluid" src={feature1} alt="Feature 1" />
                    </div>
                  </div>
                  <div className="f-right wow fadeInUp z-0" data-wow-delay="0.2s">
                    <div className="right-content z-0">
                      <h2>For advertisers</h2>
                      <p>
                        INFLLYTE platform offers a great experience for all users, whether they are individuals promoting their own products, marketing agencies working with influencers, or well-known companies and global brands. Everyone can effectively connect with influencers and thought leaders.
                      </p>
                      <ul>
                        <li>
                          <i className="feather icon-check-square" />
                          Carefully selected influencers for your needs
                        </li>
                        <li>
                          <i className="feather icon-check-square" />
                          Guarantee of compliance of the result with the your brief
                        </li>
                        <li>
                          <i className="feather icon-check-square" />
                          Flexible and convenient payment options, including both fiat and cryptocurrency
                        </li>
                      </ul>
                      <button className="bt">Get early access</button>
                    </div>
                  </div>
                </div>
                <div className="flex-split">
                  <div className="f-right z-0">
                    <div className="right-content wow fadeInUp z-0" data-wow-delay="0.2s">
                      <h2>For influencers</h2>
                      <p>
                        The INFLYTE platform is the best place for influencers of all sizes to analyze their audience, interact with advertisers, and grow their presence. Whether you are an established blogger with millions of followers or a micro-influencer just starting out, the platform provides favorable conditions for your development and success.
                      </p>
                      <ul>
                        <li>
                          <i className="feather icon-check-square" />
                          Simple interaction with advertisers, the most relevant offers
                        </li>
                        <li>
                          <i className="feather icon-check-square" />
                          Guarantee of payment for performed promotional services
                        </li>
                        <li>
                          <i className="feather icon-check-square" />
                          The flexibility to receive payment in both fiat and cryptocurrency, at your choice
                        </li>
                      </ul>
                      <button className="bt">Get early access</button>
                    </div>
                  </div>
                  <div className="f-left">
                    <div className="left-content wow fadeInUp" data-wow-delay="0.3s">
                      <img className="img-fluid" src={feature2} alt="Feature 2" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="cta-sub text-center no-color z-0">
              <div className="container z-0">
                <h1 className="wow fadeInUp" data-wow-delay="0s">
                Subscribe to product notifications
                </h1>
                <p className="wow fadeInUp" data-wow-delay="0.2s">
                  We will sent you weekly mail about product updates.
                  <br className="hidden-xs" />
                  Please write accurate email address below.
                </p>
                <div className="form wow fadeInUp z-0" data-wow-delay="0.3s">
                  <form className="subscribe-form wow zoomIn z-0">
                    <input className="mail" type="email" name="email" placeholder="Email address" autoComplete="off" />
                    <button className="submit-button bt" type="button">
                      Subscribe
                    </button>
                  </form>
                  <div className="success-message" />
                  <div className="error-message" />
                </div>
              </div>
            </div>
            <div className="footer">
              <div className="container">
                <div className="col-md-12 text-center">
                <h1 className='text-logo'>INFLYTE</h1>
                  {/*<ul className="footer-menu">
                    <li>
                      <Link to="#">Site</Link>
                    </li>
                    <li>
                      <Link to="#">Support</Link>
                    </li>
                    <li>
                      <Link to="#">Terms</Link>
                    </li>
                    <li>
                      <Link to="#">Privacy</Link>
                    </li>
                  </ul>*/}
                  <div className="footer-text">
                    <p>Copyright © 2023 INFLYTE. All Rights Reserved.</p>
                  </div>
                </div>
              </div>
            </div>
            <a id="back-top" className="back-to-top page-scroll" href="#main">
              <i className="feather icon-arrow-up" />
            </a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Landing;
