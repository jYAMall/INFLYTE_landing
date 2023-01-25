import { Features, Footer, Navbar, Hero, FAQ, Statistic, HowItWorks, Team } from '../../sections';

const influencer = {
  hero: {
    title: ' INFLYTE - The Decentralized Platform for Brands and Influencers',
    subTitle: 'Secure Transactions on the Blockchain and lot of brands are waiting for you',
    shortBio: 'INFLYTE is a cutting-edge influencer marketing platform that connects advertisers with the most relevant influencers for their campaigns. With the use of smart contracts and artificial intelligence/machine learning (AI/ML), INFLYTE ensures secure transactions, advanced analytics, and influencer matching.',
    imgUrl: '/hero/influencer_hero.png',
    btnStyleType: 'purple',
  },
  features: [
    {
      title: 'Smart Contract Functionality',
      description: 'Our platform utilizes smart contracts to ensure secure, efficient, and transparent transactions.',
      icon: '  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"> <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" </svg>',
      iconColor: 'text-purple-600',
      iconBgColor: 'bg-purple-100',
    },
    {
      title: '24/7 Support',
      description: 'Our support system provides round-the-clock assistance to all users.',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">  <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" /></svg>',
      iconColor: 'text-green-600',
      iconBgColor: 'bg-green-100',
    },
    {
      title: 'Cryptocurrency and Fiat Deposit/Withdrawal',
      description: 'Our platform supports both cryptocurrency and fiat currency deposits and withdrawals.',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>',
      iconColor: 'text-lime-500',
      iconBgColor: 'bg-green-100',
    },
    {
      title: 'User-friendly',
      description: 'We design our interface to be intuitive and easy to use for all types of users',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>',
      iconColor: 'text-quartz-500',
      iconBgColor: 'bg-quartz-100',
    },
    {
      title: 'Privacy and Security',
      description: 'We employ the latest encryption and security protocols to ensure the safety of user data and transactions.',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">  <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" /></svg>',
      iconColor: 'text-amethyst-500',
      iconBgColor: 'bg-amethyst-100',
    },
    {
      title: 'Top Brands',
      description: 'We have a wide range of brands that are looking for influencers to promote their products and services.',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.87c1.355 0 2.697.055 4.024.165C17.155 8.51 18 9.473 18 10.608v2.513m-3-4.87v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0L3 16.5m15-3.38a48.474 48.474 0 00-6-.37c-2.032 0-4.034.125-6 .37m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.17c0 .62-.504 1.124-1.125 1.124H4.125A1.125 1.125 0 013 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 016 13.12M12.265 3.11a.375.375 0 11-.53 0L12 2.845l.265.265zm-3 0a.375.375 0 11-.53 0L9 2.845l.265.265zm6 0a.375.375 0 11-.53 0L15 2.845l.265.265z" /></svg>',
      iconColor: 'text-rose-500',
      iconBgColor: 'bg-rose-100',
    },
    {
      title: 'Zero Fees',
      description: 'We offer zero fees than traditional influence marketing agencies and competitors.',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75" /></svg>',
      iconColor: 'text-sky-500',
      iconBgColor: 'bg-sky-100',
    },
  ],
  steps: [
    {
      title: 'Step 1',
      titleColor: 'text-black-500',
      description: 'Create an account and fill out your profile. This will help us match you with the best brands for your audience.',
      icon: '<svg    className="w-6 text-gray-700 transform rotate-90 sm:rotate-0"    stroke="currentColor"    strokeWidth="2"    strokeLinecap="round"    strokeLinejoin="round"    viewBox="0 0 24 24">  <line fill="none" strokeMiterlimit="10" x1="2" y1="12" x2="22" y2="12"  />  <polyline fill="none" strokeMiterlimit="10" points="15,5 22,12 15,19 "  /></svg>',
    },
    {
      title: 'Step 2',
      titleColor: 'text-black-500',
      description: 'Receive offers from brands that are looking to work with you. You can choose to accept or decline the offer.',
      icon: '<svg    className="w-6 text-gray-700 transform rotate-90 sm:rotate-0"    stroke="currentColor"    strokeWidth="2"    strokeLinecap="round"    strokeLinejoin="round"    viewBox="0 0 24 24">  <line fill="none" strokeMiterlimit="10" x1="2" y1="12" x2="22" y2="12"  />  <polyline fill="none" strokeMiterlimit="10" points="15,5 22,12 15,19 "  /></svg>',
    },
    {
      title: 'Step 3',
      titleColor: 'text-black-500',
      description: 'Sign smart contract with the brand and start promoting their products and services.',
      icon: '<svg    className="w-6 text-gray-700 transform rotate-90 sm:rotate-0"    stroke="currentColor"    strokeWidth="2"    strokeLinecap="round"    strokeLinejoin="round"    viewBox="0 0 24 24">  <line fill="none" strokeMiterlimit="10" x1="2" y1="12" x2="22" y2="12"  />  <polyline fill="none" strokeMiterlimit="10" points="15,5 22,12 15,19 "  /></svg>',
    },
    {
      title: 'Success',
      titleColor: 'text-green-900',
      description: 'Once the campaign is complete, you will receive your payment and the brand will receive your report.',
      icon: '<svg    className="w-8 text-gray-600"    stroke="currentColor"    viewBox="0 0 24 24">  <polyline fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" points="6,12 10,16 18,8"  /></svg>',
    },
  ],
  stats: {
    title: 'Find your next campaign',
    subTitle: 'Inflyte have lot of campaigns for you to choose from.',
    linkColor: 'text-violet-500',
    leftSide: {
      title: '100%',
      subTitle: 'We only work with brands that are willing to pay for your work.',
    },
    rightSide: {
      title: '0%',
      subTitle: "We don't charge any fees for our services.",
    },
  },
  faq: [
    {
      question: 'What is Smart Contract ?',
      answer: 'A smart contract is a computer program that can automatically execute the terms of a contract when certain conditions are met. On the Ethereum network, people can use smart contracts to make agreements and exchange things like money and property without the need for a middleman. Think of it like a digital version of a written contract that can be enforced automatically by a computer.',
    },
    {
      question: 'How I can get paid ?',
      answer: 'You will receive your payment in the form of cryptocurrency. We will send you the payment once the campaign is complete.',
    },
    {
      question: 'How much fees will be charged for the transaction?',
      answer: "The fees will be charged by the cryptocurrency network. We don't charge any fees for our services.",
    },
    {
      question: 'How I can withdrawal my payment ?',
      answer: 'We have widget for deposit/withdrawal your payment. You can withdraw your payment to your bank account or any other cryptocurrency wallet. You can withdraw your payment anytime you want.',
    },
  ],
};

const requestHref = 'https://forms.gle/bKcLZsjKhwuvf1y6A';
const InfluencerPage = async () => (
  <div className="bg-gradient-to-b from-pink-300 via-purple-300 to-indigo-400">
    <Navbar />
    <Hero title={influencer.hero.title} subTitle={influencer.hero.subTitle} requestHref={requestHref} heroImg={influencer.hero.imgUrl} btnStyleType={influencer.hero.btnStyleType} />
    <Statistic
      title={influencer.stats.title}
      subTitle={influencer.stats.title}
      leftSide={influencer.stats.leftSide}
      rightSide={influencer.stats.rightSide}
      requestHref={requestHref}
      linkColor={influencer.stats.linkColor}
    />
    <Features data={influencer.features} />
    <HowItWorks data={influencer.steps} />
    <FAQ data={influencer.faq} />
    <Team />
    <Footer />
  </div>
);

export default InfluencerPage;
