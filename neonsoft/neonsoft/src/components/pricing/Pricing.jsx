function Pricing() {
  return (
    <>
      <div className="p-10 text-center bg-gray-50 min-h-screen">
        <h1 className="text-4xl font-bold text-blue-500">Pricing Plans</h1>
        <p className="mt-4 text-gray-600">Choose a plan that suits your budget and project needs.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 max-w-6xl mx-auto">
          {/* Basic Plan */}
          <div className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <h2 className="text-2xl font-bold text-gray-800">Basic Plan</h2>
            <p className="mt-3 text-2xl text-blue-500 font-semibold">$10/month</p>
            <ul className="mt-5 space-y-2 text-left text-gray-600">
              <li>✔ 1 Project</li>
              <li>✔ Email Support</li>
              <li>✔ Community Access</li>
            </ul>
            <button className="mt-6 w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition-colors">
              Get Started
            </button>
          </div>

          {/* Standard Plan */}
          <div className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <h2 className="text-2xl font-bold text-gray-800">Standard Plan</h2>
            <p className="mt-3 text-2xl text-blue-500 font-semibold">$20/month</p>
            <ul className="mt-5 space-y-2 text-left text-gray-600">
              <li>✔ Up to 5 Projects</li>
              <li>✔ Priority Email Support</li>
              <li>✔ Community Access</li>
              <li>✔ Basic Analytics</li>
            </ul>
            <button className="mt-6 w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition-colors">
              Choose Plan
            </button>
          </div>

          {/* Premium Plan */}
          <div className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <h2 className="text-2xl font-bold text-gray-800">Premium Plan</h2>
            <p className="mt-3 text-2xl text-blue-500 font-semibold">$30/month</p>
            <ul className="mt-5 space-y-2 text-left text-gray-600">
              <li>✔ Unlimited Projects</li>
              <li>✔ 24/7 Priority Support</li>
              <li>✔ Advanced Analytics</li>
              <li>✔ Personalized Onboarding</li>
            </ul>
            <button className="mt-6 w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition-colors">
              Go Premium
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Pricing;
