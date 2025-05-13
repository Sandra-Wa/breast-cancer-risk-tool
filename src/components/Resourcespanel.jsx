export default function ResourcesPanel({ onBack }) {
  const resourceSections = [
    {
      heading: "Nairobi",
      resources: [
        {
          name: "Kenya Cancer Association",
          contact: "0800 221 221",
          services: "Free screenings every 2nd Saturday",
          link: "https://kenyacancer.org/"
        },
        {
          name: "Faraja Cancer Support Trust",
          contact: "+254 722 593 675",
          services: "Counseling, support groups, therapy services",
          link: "https://farajacancersupport.org/"
        },
        {
          name: "Texas Cancer Centre",
          contact: "+254 722 868 900",
          services: "Chemotherapy, radiotherapy, and patient care",
          link: "https://texascancercentre.co.ke/"
        }
      ]
    },
    {
      heading: "Western Kenya (Eldoret & Rift Valley)",
      resources: [
        {
          name: "Moi Teaching & Referral Hospital – AMPATH Oncology",
          contact: "+254 53 2060000",
          services: "Comprehensive cancer diagnosis and treatment",
          link: "https://www.mtrh.go.ke/"
        },
        {
          name: "Faraja Cancer Support Trust – Eldoret Branch",
          contact: "+254 722 593 675",
          services: "Support groups, wellness therapy, community outreach",
          link: "https://farajacancersupport.org/"
        }
      ]
    },
    {
      heading: "Coastal Kenya",
      resources: [
        {
          name: "Coast General Teaching & Referral Hospital – Cancer Centre",
          contact: "+254 720 947 801",
          services: "Cancer screening and treatment services",
          link: "https://cgtrh.go.ke/"
        }
      ]
    },
    {
      heading: "International Support",
      resources: [
        {
          name: "Breast Cancer Now (UK-based)",
          contact: "N/A",
          services: "Global educational resources and research support",
          link: "https://breastcancernow.org/"
        }
      ]
    }
  ]

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-soft">
      <h2 className="text-2xl font-bold text-pink-dark mb-6">Support Resources</h2>

      {resourceSections.map((section, index) => (
        <div key={index} className="mb-8">
          <h3 className="text-xl font-semibold text-pink-primary mb-4">{section.heading}</h3>
          <div className="space-y-6">
            {section.resources.map((resource, i) => (
              <div key={i} className="border-b border-pink-light pb-4">
                <h4 className="font-bold text-lg text-purple-accent">{resource.name}</h4>
                <p className="text-gray-600">📞 {resource.contact}</p>
                <p className="mt-2 text-gray-700">{resource.services}</p>
                <a
                  href={resource.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 bg-purple-accent text-white px-4 py-2 rounded hover:bg-purple-700 transition"
                >
                  Visit Website
                </a>
              </div>
            ))}
          </div>
        </div>
      ))}

      <button
        onClick={onBack}
        className="mt-8 bg-pink-light text-pink-dark px-6 py-2 rounded hover:bg-pink-primary hover:text-white transition"
      >
        Back to Results
      </button>
    </div>
  )
}
