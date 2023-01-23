const Features = ({ data }) => (
  <section className="px-4 py-20 mx-auto max-w-7xl" id="features">
    <h2 className="mb-1 text-3xl font-extrabold leading-tight text-gray-900">Features</h2>
    <p className="mb-16 text-lg text-gray-500">The list of unique features of our project</p>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-16 lg:gap-x-24 gap-y-20">
      {data.map((feature) => (
        <div key={feature.title} className="drop-shadow-lg p-5 bg-white rounded-lg overflow-hidden">
          <div className={`flex items-center justify-center p-1 w-8 h-8 mb-4 rounded-full ${feature.iconColor} ${feature.iconBgColor}`} dangerouslySetInnerHTML={{ __html: feature.icon || '' }} />

          <h3 className="mb-2 text-base font-semibold leading-tight text-gray-900">{feature.title}</h3>
          <p className="text-sm text-gray-500">
            {feature.description}
          </p>
        </div>
      ))}
    </div>
  </section>
);

export default Features;
