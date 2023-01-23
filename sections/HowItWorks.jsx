const HowItWorks = ({ data }) => (
  <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20" id="how-it-works">
    <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
      <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
        How it works?
      </h2>
      <p className="text-base text-gray-700 md:text-lg">
        Simple guide to get you started!
      </p>
    </div>
    <div className="grid gap-10 lg:grid-cols-4 sm:grid-cols-2">
      {data.map((step) => (
        <div key={step.title} className="shadow-lg rounded-md bg-white p-5">
          <div className="flex items-center justify-between mb-6">
            <p className={`text-2xl font-bold ${step.titleColor}`}>{step.title}</p>
            <div className={`w-8 h-8 ${step.titleColor}`} dangerouslySetInnerHTML={{ __html: step.icon || '' }} />
          </div>
          <p className="text-gray-600">
            {step.description}
          </p>
        </div>
      ))}
    </div>
  </div>
);

export default HowItWorks;
