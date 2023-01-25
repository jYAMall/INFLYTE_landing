const Statistic = ({ title, subTitle, leftSide, rightSide, requestHref, linkColor }) => (
  <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20" id="about">
    <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
      <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
        {title}
      </h2>
      <p className="text-base text-gray-700 md:text-lg">
        {subTitle}
      </p>
    </div>
    <div className="relative w-full p-px mx-auto mb-4 overflow-hidden transition-shadow duration-300 lg:mb-8 lg:max-w-4xl group hover:shadow-xl">
      <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
      <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
      <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
      <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
      <div className="relative flex flex-col items-center h-full py-10 duration-300 bg-white rounded transition-color sm:items-stretch sm:flex-row">
        <div className="px-12 py-8">
          <h6 className="text-4xl text-center font-bold text-deep-purple-accent-400 sm:text-5xl">

            {leftSide.title}
          </h6>
          <p className="md:text-base mt-5">

            {leftSide.subTitle}
          </p>
        </div>
        <div className="w-56 h-1 transition duration-300 transform bg-gray-300 rounded-full group-hover:bg-deep-purple-accent-400 group-hover:scale-110 sm:h-auto sm:w-1" />
        <div className="px-12 py-8">
          <h6 className="text-4xl text-center font-bold text-deep-purple-accent-400 sm:text-5xl">
            {rightSide.title}
          </h6>
          <p className="md:text-base mt-5">
            {rightSide.subTitle}
          </p>
        </div>
      </div>
    </div>
    <p className="mx-auto mb-4 text-gray-600 sm:text-center lg:max-w-2xl lg:mb-6 md:px-16 font-bold">
      <a target="_blank" className={`${linkColor} cursor-pointer  hover:underline decoration-2`} href={requestHref} rel="noreferrer">Join INFLYTE</a> now to gain an advantage in the upcoming era of decentralized influence marketing.
    </p>
  </div>
);

export default Statistic;
