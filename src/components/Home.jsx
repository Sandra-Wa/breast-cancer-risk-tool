export default function Home({ onStartAssessment }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-pink-50">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="lg:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              <span className="text-pink-600">Breast Cancer Risk</span> Assessment for East African Women
            </h1>
            <p className="text-lg text-gray-600 max-w-lg">
              Get personalized insights based on local epidemiological data to better understand your risk factors and prevention options.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button
                onClick={onStartAssessment}
                className="bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 px-6 rounded-full shadow-md transition-all duration-300 hover:shadow-lg"
              >
                Start Free Assessment
              </button>
              <button className="border border-pink-600 text-pink-600 hover:bg-pink-50 font-semibold py-3 px-6 rounded-full transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
          <div className="lg:w-1/2 mt-8 lg:mt-0">
            <img
              src="/src/images/Home.jpeg"
              alt="African woman consulting with doctor"
              className="rounded-xl shadow-xl w-full h-64 md:h-80 object-cover"  // Reduced height
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { value: "1 in 28", label: "Women affected" },
              { value: "95%", label: "Treatable when early" },
              { value: "40%", label: "Risk reduction" },
              { value: "80%", label: "Survival rate" }
            ].map((stat, index) => (
              <div key={index} className="p-4">
                <p className="text-3xl font-bold text-pink-600 mb-1">{stat.value}</p>
                <p className="text-gray-600 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How Our Assessment Helps You</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Our tool provides personalized insights to help you make informed decisions about your breast health.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: '📊',
                title: "Personalized Risk",
                desc: "Tailored evaluation based on your health profile"
              },
              {
                icon: '🛡️',
                title: "Prevention Tips",
                desc: "Actionable steps to reduce your risk factors"
              },
              {
                icon: '🏥',
                title: "Local Resources",
                desc: "Find nearby screening facilities and specialists"
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              {
                question: "Who should take this assessment?",
                answer: "All East African women aged 20+ should understand their risk factors, especially those with family history."
              },
              {
                question: "How long does it take?",
                answer: "The assessment takes about 5 minutes to complete."
              },
              {
                question: "Is my data private?",
                answer: "Yes, all information is confidential and stored securely."
              }
            ].map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-4">
                <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                <p className="text-gray-600 mt-1">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-pink-600">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Take Control of Your Breast Health Today</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Early awareness leads to better outcomes. Start your personalized assessment now.
          </p>
          <button
            onClick={onStartAssessment}
            className="bg-white text-pink-600 hover:bg-gray-100 font-semibold py-3 px-10 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl"
          >
            Begin Assessment Now
          </button>
        </div>
      </section>
    </div>
  );
}