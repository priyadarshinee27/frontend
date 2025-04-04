function Services() {
  return (
    <div className="p-10 text-center bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold text-blue-500">Our Services</h1>
      <p className="mt-4 text-gray-600">We offer a wide range of services to meet your needs.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <div className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
          <h2 className="text-2xl font-bold text-gray-800">Web Development</h2>
          <p className="mt-2 text-gray-600">Modern and responsive websites for your business or portfolio.</p>
          <ul className="mt-4 text-left text-gray-500 list-disc list-inside">
            <li>Custom design</li>
            <li>SEO optimized</li>
            <li>Mobile-friendly</li>
          </ul>
          <button className="mt-6 bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold">
            Learn More
          </button>
        </div>
        <div className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
          <h2 className="text-2xl font-bold text-gray-800">App Development</h2>
          <p className="mt-2 text-gray-600">Build fast, scalable apps for iOS and Android platforms.</p>
          <ul className="mt-4 text-left text-gray-500 list-disc list-inside">
            <li>Cross-platform</li>
            <li>Real-time features</li>
            <li>User-friendly UI</li>
          </ul>
          <button className="mt-6 bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold">
            Learn More
          </button>
        </div>
        <div className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
          <h2 className="text-2xl font-bold text-gray-800">Digital Marketing</h2>
          <p className="mt-2 text-gray-600">Promote your brand and boost online presence with expert strategies.</p>
          <ul className="mt-4 text-left text-gray-500 list-disc list-inside">
            <li>Social media campaigns</li>
            <li>Google Ads & SEO</li>
            <li>Email marketing</li>
          </ul>
          <button className="mt-6 bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Services;
