'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { navigation } from '../constants';
import { HamburgerButton } from '../components';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onToggle = () => {
    setIsOpen(!isOpen);
    document.body.classList.toggle('overflow-hidden');
  };

  const mobileOpenMenuStyles = isOpen ? 'max-md:top-0 max-md:bottom-0 max-md:bg-white ' : '';

  return (
    <header aria-label="Site Header" className={`
    fixed left-0 right-0 z-10 ${mobileOpenMenuStyles}
    bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10
    `}
    >
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <Link className="block text-black font-bold text-2xl" href="/">
              Inflyte
            </Link>
          </div>

          <div className="md:block hidden">
            <nav aria-label="Site Nav">
              <ul className="flex items-center gap-6 text-sm">
                {
                    navigation.map((item) => (
                      <li key={item.label}>
                        <a
                          className="text-black-500 transition hover:text-gray-500/75"
                          href={item.href}
                        >
                          {item.label}
                        </a>
                      </li>
                    ))
                  }
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="block md:hidden">
              <HamburgerButton isOpen={isOpen} onToggle={onToggle} />
            </div>
          </div>
        </div>
      </div>
      {
        isOpen && (
        <div className="md:hidden flex flex-col items-center justify-center h-full">
          <nav aria-label="Site Nav">
            <ul className="flex flex-col items-center gap-12 text-2xl font-bold">
              {
                  navigation.map((item) => (
                    <li key={item.label}>
                      <a
                        className="text-black-500 transition hover:text-gray-500/75"
                        href={item.href}
                      >
                        {item.label}
                      </a>
                    </li>
                  ))
                }
            </ul>
          </nav>
        </div>
        )
      }

    </header>

  );
};

export default Navbar;
