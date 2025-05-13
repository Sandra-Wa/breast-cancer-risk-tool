export default function Home({ onStartAssessment }) {
  return (
    <div className="py-12 px-4">
      {/* Header with image and description side by side */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-10">
        <div className="md:w-1/2 text-center md:text-left">
          <p className="text-gray-600 max-w-lg">
            This tool helps East African women understand their personal risk factors 
            for breast cancer based on local epidemiological data.
          </p>
        </div>

        <div className="md:w-1/3">
          <img
            src="/mnt/data/woman-with-breast-cancer-receiving-support.jpg"  // Updated image path
            alt="Breast cancer awareness"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
      </div>

      {/* Start Button */}
      <div className="text-center mb-16">
        <button
          onClick={onStartAssessment}
          className="bg-pink-primary hover:bg-pink-dark text-white font-bold py-3 px-8 rounded-full shadow-soft transition"
        >
          Start Assessment
        </button>
      </div>

      {/* Features */}
      <div className="grid md:grid-cols-3 gap-8">
        {[ 
          {
            icon: '📊',
            title: "Personalized Risk",
            desc: "Calculated specifically for East African women"
          },
          {
            icon: '🛡️',
            title: "Prevention Tips",
            desc: "Actionable recommendations based on your results"
          },
          {
            icon: '🏥',
            title: "Local Resources",
            desc: "Connections to screening facilities in your area"
          }
        ].map((item, i) => (
          <div key={i} className="bg-white p-6 rounded-lg shadow-soft text-center">
            <span className="text-4xl mb-3 inline-block">{item.icon}</span>
            <h3 className="font-bold text-lg text-pink-dark mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
