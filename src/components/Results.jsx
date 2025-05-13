import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function Results({ data, onRestart, onResources }) {
  const riskColors = {
    "Low": "bg-teal-accent",
    "Moderate": "bg-yellow-400",
    "High": "bg-orange-500",
    "Very High": "bg-red-600"
  };

  const progress = (data.score / 25) * 100; // Assuming score is out of 25, adjust as needed

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-soft">
      <h2 className="text-2xl font-bold text-pink-dark mb-6">Your Results</h2>

      {/* Circular Progress Bar for Risk Score */}
      <div className="flex justify-center mb-6">
        <div className="w-32 h-32">
          <CircularProgressbar
            value={progress}
            text={`${data.score}/25`}
            styles={buildStyles({
              pathColor: riskColors[data.riskLevel],
              textColor: "#fff",
              trailColor: "#d6d6d6",
            })}
          />
        </div>
      </div>

      <div className={`${riskColors[data.riskLevel]} text-white p-4 rounded-lg mb-8`}>
        <h3 className="font-bold text-xl">Your Risk Level: {data.riskLevel}</h3>
        <p>Score: {data.score}/25</p>
      </div>

      {/* Information Section about Breast Cancer */}
      <div className="mb-8 p-6 bg-gray-100 rounded-lg shadow-md">
        <h3 className="font-bold text-lg text-pink-dark mb-3">What is Breast Cancer?</h3>
        <p className="text-gray-700 mb-4">
          Breast cancer is a disease in which cells in the breast grow out of control. It is one of the most common cancers among women, though men can also develop breast cancer.
        </p>
        <p className="text-gray-700 mb-4">
          There are several types of breast cancer, including ductal carcinoma in situ (DCIS), invasive ductal carcinoma (IDC), and invasive lobular carcinoma (ILC). Early detection through regular screening and maintaining a healthy lifestyle can help reduce the risks.
        </p>
        <p className="text-gray-700">
          Risk factors for breast cancer include age, genetics, family history, and lifestyle factors such as alcohol use and physical inactivity. While some risk factors can't be changed, others can be managed through prevention strategies like regular exercise and a healthy diet.
        </p>
      </div>

      {/* Recommendations Section */}
      <div className="mb-8">
        <h3 className="font-bold text-lg text-pink-dark mb-3">Recommendations</h3>
        <ul className="space-y-3">
          {data.recommendations.map((rec, i) => (
            <li key={i} className="bg-pink-light p-3 rounded">
              ✅ {rec}
            </li>
          ))}
        </ul>
      </div>

      {/* Buttons */}
      <div className="flex flex-wrap gap-4">
        <button
          onClick={onRestart}
          className="bg-pink-light text-pink-dark px-6 py-2 rounded hover:bg-pink-primary hover:text-white transition"
        >
          Start New Assessment
        </button>
        <button
          onClick={onResources}
          className="bg-purple-accent text-white px-6 py-2 rounded hover:bg-purple-700 transition"
        >
          View Local Resources
        </button>
      </div>
    </div>
  );
}
