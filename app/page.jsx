'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const variant = {
  hidden: {
    opacity: 0,
    transition: {
      ease: 'easeOut',
      duration: 0.2,
      type: 'tween',
    },
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.4,
      type: 'tween',
      ease: 'easeIn',
    },
  },
};

const items = [
  {
    href: '/influencer',
    label: 'Influencer',
    gradient: 'bg-gradient-to-b from-pink-300 via-purple-300 to-indigo-400',
  },
  {
    href: '/brand',
    label: 'Brand',
    gradient: 'bg-gradient-to-r from-blue-100 via-blue-300 to-blue-500',
  },
];

const HomePage = () => {
  const handleClick = (item) => {
    window.analytics.track(item.label, {
      title: item.label,
    });
  };
  return (
    <div className="w-full h-screen flex">
      {items.map((item) => (
        <motion.div key={item.label} initial="hidden" whileHover="visible" className="relative w-[50%] h-full cursor-pointer" onClick={() => handleClick(item)}>
          <motion.div variants={variant} className={`absolute top-0 left-0 right-0 bottom-0 z-[-1] w-full h-full ${item.gradient}`} />
          <Link href={item.href} className="flex items-center justify-center h-full w-full text-center">
            <h1 className="text-black-50 font-bold text-4xl">{item.label}</h1>
          </Link>
        </motion.div>
      ))}
    </div>
  );
};

export default HomePage;
