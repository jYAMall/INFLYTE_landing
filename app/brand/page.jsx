import { Features, Footer, Navbar, Hero, FAQ, Statistic, HowItWorks, Team } from '../../sections';

const brand = {
  hero: {
    title: 'Unlock the Full Power of Influencer Marketing with INFLYTE',
    subTitle: 'Discover the right influencers for your brand and make a secure and transparent collaboration agreement using blockchain technology',
    shortBio: 'INFLYTE is a cutting-edge influencer marketing platform that connects advertisers with the most relevant influencers for their campaigns. With the use of smart contracts and artificial intelligence/machine learning (AI/ML), INFLYTE ensures secure transactions, advanced analytics, and influencer matching.\n Join INFLYTE now to gain an advantage in the upcoming era of decentralized influence marketing.',
    imgUrl: '/hero/brand_hero.png',
  },
  features: [
    {
      title: 'Smart Contract Functionality',
      description: 'Our platform utilizes smart contracts to ensure secure, efficient, and transparent transactions.',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">\n  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />\n</svg>\n',
      iconColor: 'text-blue-500',
      iconBgColor: 'bg-blue-100',
    },
    {
      title: '24/7 Support',
      description: 'Our support system provides round-the-clock assistance to all users.',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">\n  <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />\n</svg>\n',
      iconColor: 'text-green-600',
      iconBgColor: 'bg-green-100',
    },
    {
      title: 'AI/ML-Driven Influencer Matching',
      description: 'Our advanced analytics system uses AI and machine learning to match businesses with the perfect influencer for their needs.',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">\n  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />\n</svg>\n',
      iconColor: 'text-yellow-500',
      iconBgColor: 'bg-yellow-100',
    },
    {
      title: 'Multi-Platform Coverage',
      description: 'Our platform supports a wide variety of social media networks, including Twitter, Telegram, Instagram, YouTube, and Facebook.',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">\n  <path strokeLinecap="round" strokeLinejoin="round" d="M6 13.5V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 9.75V10.5" />\n</svg>\n',
      iconColor: 'text-red-500',
      iconBgColor: 'bg-red-100',
    },
    {
      title: 'Community-Driven Governance',
      description: 'Our platform utilizes a decentralized autonomous organization (DAO) system, allowing for community-driven decision making and dispute resolution through a jury of high-rated accounts holding governance tokens.',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">\n  <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />\n</svg>\n',
      iconColor: 'text-purple-500',
      iconBgColor: 'bg-purple-100',
    },
    {
      title: 'Transparent Brand and Influencer Profiles',
      description: 'Our open profile feature allows for transparent information on both brands and influencers.',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">\n  <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25" />\n</svg>\n',
      iconColor: 'text-pink-500',
      iconBgColor: 'bg-pink-100',
    },
    {
      title: 'Cryptocurrency and Fiat Deposit/Withdrawal',
      description: 'Our platform supports both cryptocurrency and fiat currency deposits and withdrawals.',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">\n  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />\n</svg>\n',
      iconColor: 'text-lime-500',
      iconBgColor: 'bg-green-100',
    },
    {
      title: 'Advanced Widgets for Businesses',
      description: 'Our widget system provides businesses with detailed analytics and helps them find the ideal influencer for their needs.',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">\n  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />\n</svg>\n',
      iconColor: 'text-orange-600',
      iconBgColor: 'bg-orange-100',
    },
    {
      title: 'Reputation-based Influencer Rating',
      description: 'Our rating system allows businesses to quickly identify the most reputable and suitable influencer for their needs.',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">\n  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />\n</svg>\n',
      iconColor: 'text-emerald-500',
      iconBgColor: 'bg-emerald-100',
    },
    {
      title: 'Low Fees',
      description: 'We offer lower fees than traditional influence marketing agencies and competitors.',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">\n  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75" />\n</svg>\n',
      iconColor: 'text-sky-500',
      iconBgColor: 'bg-sky-100',
    },
    {
      title: 'User-friendly',
      description: 'We design our interface to be intuitive and easy to use for all types of users',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">\n  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />\n</svg>\n',
      iconColor: 'text-quartz-500',
      iconBgColor: 'bg-quartz-100',
    },
    {
      title: 'Privacy and Security',
      description: 'We employ the latest encryption and security protocols to ensure the safety of user data and transactions.',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">\n  <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />\n</svg>\n',
      iconColor: 'text-amethyst-500',
      iconBgColor: 'bg-amethyst-100',
    },
  ],
  steps: [
    {
      title: 'Step 1',
      titleColor: 'text-black-500',
      description: 'Start by creating an advertising campaign that outlines your target audience, goals, and desired outcome.',
      icon: '<svg\n    className="w-6 text-gray-700 transform rotate-90 sm:rotate-0"\n    stroke="currentColor"\n    strokeWidth="2"\n    strokeLinecap="round"\n    strokeLinejoin="round"\n    viewBox="0 0 24 24"\n>\n  <line\n      fill="none"\n      strokeMiterlimit="10"\n      x1="2"\n      y1="12"\n      x2="22"\n      y2="12"\n  />\n  <polyline\n      fill="none"\n      strokeMiterlimit="10"\n      points="15,5 22,12 15,19 "\n  />\n</svg>',
    },
    {
      title: 'Step 2',
      titleColor: 'text-black-500',
      description: 'Next, submit a budget for your campaign and sign a smart contract that outlines the terms and conditions of your agreement.',
      icon: '<svg\n    className="w-6 text-gray-700 transform rotate-90 sm:rotate-0"\n    stroke="currentColor"\n    strokeWidth="2"\n    strokeLinecap="round"\n    strokeLinejoin="round"\n    viewBox="0 0 24 24"\n>\n  <line\n      fill="none"\n      strokeMiterlimit="10"\n      x1="2"\n      y1="12"\n      x2="22"\n      y2="12"\n  />\n  <polyline\n      fill="none"\n      strokeMiterlimit="10"\n      points="15,5 22,12 15,19 "\n  />\n</svg>',
    },
    {
      title: 'Step 3',
      titleColor: 'text-black-500',
      description: 'Choose the right Influencer for your campaign by reviewing their profile, following, and engagement rate.',
      icon: '<svg\n    className="w-6 text-gray-700 transform rotate-90 sm:rotate-0"\n    stroke="currentColor"\n    strokeWidth="2"\n    strokeLinecap="round"\n    strokeLinejoin="round"\n    viewBox="0 0 24 24"\n>\n  <line\n      fill="none"\n      strokeMiterlimit="10"\n      x1="2"\n      y1="12"\n      x2="22"\n      y2="12"\n  />\n  <polyline\n      fill="none"\n      strokeMiterlimit="10"\n      points="15,5 22,12 15,19 "\n  />\n</svg>',
    },
    {
      title: 'Success',
      titleColor: 'text-green-900',
      description: 'Once the campaign is complete, review the results and if you are satisfied, sign a smart contract to release the budget in favor of the Influencer.',
      icon: '<svg\n    className="w-8 text-gray-600"\n    stroke="currentColor"\n    viewBox="0 0 24 24"\n>\n  <polyline\n      fill="none"\n      strokeWidth="2"\n      strokeLinecap="round"\n      strokeLinejoin="round"\n      strokeMiterlimit="10"\n      points="6,12 10,16 18,8"\n  />\n</svg>',
    },
  ],
  stats: {
    title: 'Find the perfect match for your brand with ease',
    subTitle: ' INFLYTE is a cutting-edge influencer marketing platform that connects advertisers with the most relevant influencers for their campaigns. With the use of smart contracts and artificial intelligence/machine learning (AI/ML), INFLYTE ensures secure transactions, advanced analytics, and influencer matching.',
    leftSide: {
      title: '100%',
      subTitle: 'Secure your campaign with our guarantee. Your budget is protected by a smart contract, ensuring that the task description is clearly outlined',
    },
    rightSide: {
      title: '5%',
      subTitle: 'Low fee for successful campaigns, your brand reputation is worth the investment.',
    },
  },
  faq: [
    {
      question: 'What is Smart Contract ?',
      answer: 'A smart contract is a computer program that can automatically execute the terms of a contract when certain conditions are met. On the Ethereum network, people can use smart contracts to make agreements and exchange things like money and property without the need for a middleman. Think of it like a digital version of a written contract that can be enforced automatically by a computer.',
    },
    {
      question: 'How much fees will be charged for the transaction?',
      answer: 'The fees will be 5% of the total budget of the campaign.',
    },
    {
      question: 'How can I be sure that the Influencer will complete the campaign?',
      answer: 'The Influencer will be required to sign a smart contract that outlines the terms and conditions of the campaign. If the Influencer fails to complete the campaign, the advertiser can cancel the campaign and the budget will be returned to the advertiser.',
    },
    {
      question: 'How can I be sure that the Influencer is real?',
      answer: 'All influencers on our platform are verified by our team. We also use AI/ML algorithms to detect fake accounts and remove them from our platform.',
    },
    {
      question: 'What if I do not like the result of the advertising campaign?',
      answer: 'If you are not satisfied with the result of the campaign, you can cancel the campaign and your budget will be refunded or send the DAO community for consideration if the situation is controversial',
    },
  ],
};

const requestHref = 'https://forms.gle/oBxFM7etmGK2dfh86';
const BrandPage = () => {
  // const { brand } = await getData();
  console.log('das');
  return (brand ? (
    <div className="bg-gradient-to-r from-blue-100 via-blue-300 to-blue-500">
      <Navbar />
      <Hero title={brand.hero.title} subTitle={brand.hero.subTitle} requestHref={requestHref} heroImg={brand.hero.imgUrl} />
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
      <Team />
      <Footer />
    </div>
  ) : <>Loading...</>);
};
export default BrandPage;
