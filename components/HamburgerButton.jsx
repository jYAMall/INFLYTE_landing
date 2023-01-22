'use client';

const HamburgerButton = ({ isOpen, onToggle }) => {
  const genericHamburgerLine = 'h-1 w-8 my-1 rounded-full bg-black transition ease transform duration-300';

  return (
    <button
      type="button"
      className="flex flex-col h-12 w-12 justify-center items-center group"
      onClick={onToggle}
    >
      <div
        className={`${genericHamburgerLine} ${
          isOpen
            ? 'rotate-45 translate-y-3 opacity-50 group-hover:opacity-100'
            : 'opacity-50 group-hover:opacity-100'
        }`}
      />
      <div
        className={`${genericHamburgerLine} ${
          isOpen ? 'opacity-0' : 'opacity-50 group-hover:opacity-100'
        }`}
      />
      <div
        className={`${genericHamburgerLine} ${
          isOpen
            ? '-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100'
            : 'opacity-50 group-hover:opacity-100'
        }`}
      />
    </button>
  );
};

export default HamburgerButton;
