
const STYLE_TYPES = {
  blue: 'text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 ',
  purple: 'text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80',
};
const Button = ({ children, onClick, href, styleType = 'blue' }) => (
  <a
    href={href}
    onClick={onClick}
    target={href ? '_blank' : null}
    className={`
      ${STYLE_TYPES[styleType]}
      group relative inline-flex items-center overflow-hidden rounded px-8 py-3
    `}
    rel="noreferrer"
  >
    <span
      className="absolute left-0 -translate-x-full transition-transform group-hover:translate-x-4"
    >
      <svg
        className="h-5 w-5"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M17 8l4 4m0 0l-4 4m4-4H3"
        />
      </svg>
    </span>

    <span className="text-sm font-medium transition-all group-hover:ml-4">
      {children}
    </span>
  </a>
);

export default Button;
