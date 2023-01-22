
const Button = ({ children, onClick, href }) => (
  <a
    href={href}
    onClick={onClick}
    target={href ? '_blank' : null}
    className="group relative inline-flex items-center overflow-hidden rounded border border-current px-8 py-3 text-indigo-600 focus:outline-none focus:ring active:text-indigo-500" rel="noreferrer"
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