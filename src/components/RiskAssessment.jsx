import { useState } from 'react'
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'

export default function RiskAssessment({ onComplete, onBack }) {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    // Personal Information
    age: '',
    ethnicity: '',
    residence: '',

    // Family History
    motherHistory: false,
    sisterHistory: false,
    auntHistory: false,
    geneticTesting: false,

    // Reproductive History
    menarcheAge: '',
    menopauseAge: '',
    pregnancies: '',
    firstPregnancyAge: '',
    breastfeedingMonths: '',

    // Lifestyle Factors
    alcoholUse: '',
    smoking: false,
    physicalActivity: '',
    dietQuality: '',
    nightShiftWork: false,

    // Medical History
    hormoneTherapy: false,
    contraceptiveUse: false,
    previousBiopsies: false,
    breastDensity: '',
    radiationExposure: false,

    // East African Specific
    pesticideExposure: false,
    charcoalUse: false,
    traditionalMedicineUse: false
  })

  const questions = [
    {
      title: "Personal Information",
      fields: [
        {
          name: "age",
          label: "What is your current age?",
          type: "number",
          min: 18,
          max: 100
        },
        {
          name: "ethnicity",
          label: "Which ethnic group do you identify with?",
          type: "select",
          options: ["Kikuyu", "Luo", "Kamba", "Luhya", "Kalenjin", "Other"]
        },
        {
          name: "residence",
          label: "Where do you primarily live?",
          type: "select",
          options: ["Urban", "Rural"]
        }
      ]
    },
    {
      title: "Family History",
      description: "Breast cancer in close relatives increases your risk",
      fields: [
        {
          name: "motherHistory",
          label: "Has your mother had breast cancer?",
          type: "radio"
        },
        {
          name: "sisterHistory",
          label: "Has a sister had breast cancer?",
          type: "radio"
        },
        {
          name: "auntHistory",
          label: "Has an aunt had breast cancer?",
          type: "radio"
        },
        {
          name: "geneticTesting",
          label: "Have you had any genetic testing for cancer risk?",
          type: "radio"
        }
      ]
    },
    {
      title: "Reproductive History",
      fields: [
        {
          name: "menarcheAge",
          label: "At what age did you start menstruating (menarche)?",
          type: "number"
        },
        {
          name: "menopauseAge",
          label: "At what age did you go through menopause? (Leave blank if not applicable)",
          type: "number"
        },
        {
          name: "pregnancies",
          label: "How many pregnancies have you had?",
          type: "number"
        },
        {
          name: "firstPregnancyAge",
          label: "How old were you at your first pregnancy? (Leave blank if not applicable)",
          type: "number"
        },
        {
          name: "breastfeedingMonths",
          label: "Total months you breastfed (all children combined)?",
          type: "number"
        }
      ]
    },
    {
      title: "Lifestyle Factors",
      fields: [
        {
          name: "alcoholUse",
          label: "How often do you consume alcohol?",
          type: "select",
          options: ["Never", "Occasionally", "Weekly", "Daily"]
        },
        {
          name: "smoking",
          label: "Do you smoke?",
          type: "radio"
        },
        {
          name: "physicalActivity",
          label: "How would you describe your physical activity level?",
          type: "select",
          options: ["None", "Light", "Moderate", "High"]
        },
        {
          name: "dietQuality",
          label: "How would you rate your overall diet quality?",
          type: "select",
          options: ["Poor", "Average", "Good"]
        },
        {
          name: "nightShiftWork",
          label: "Have you worked night shifts regularly?",
          type: "radio"
        }
      ]
    },
    {
      title: "Medical History",
      fields: [
        {
          name: "hormoneTherapy",
          label: "Have you used hormone replacement therapy (HRT)?",
          type: "radio"
        },
        {
          name: "contraceptiveUse",
          label: "Have you used hormonal contraceptives?",
          type: "radio"
        },
        {
          name: "previousBiopsies",
          label: "Have you had any breast biopsies?",
          type: "radio"
        },
        {
          name: "breastDensity",
          label: "What is your breast density (from mammogram)?",
          type: "select",
          options: ["Low", "Medium", "High"]
        },
        {
          name: "radiationExposure",
          label: "Have you had chest radiation therapy before age 30?",
          type: "radio"
        }
      ]
    },
    {
      title: "East African-Specific Factors",
      fields: [
        {
          name: "pesticideExposure",
          label: "Have you been exposed to pesticides regularly?",
          type: "radio"
        },
        {
          name: "charcoalUse",
          label: "Do you regularly cook with charcoal indoors?",
          type: "radio"
        },
        {
          name: "traditionalMedicineUse",
          label: "Do you use traditional herbal medicine frequently?",
          type: "radio"
        }
      ]
    }
  ]

  const handleNext = () => {
    if (step < questions.length) setStep(step + 1)
    else calculateRisk()
  }

  const handleBack = () => {
    if (step > 1) setStep(step - 1)
    else onBack()
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'radio' || type === 'checkbox' ? checked : value
    }))
  }

  const calculateRisk = () => {
    let score = 0

    if (formData.age < 40) score += 1
    if (formData.age >= 40 && formData.age <= 50) score += 3
    if (formData.age > 50) score += 2

    if (formData.motherHistory) score += 4
    if (formData.sisterHistory) score += 3
    if (formData.auntHistory) score += 2

    if (formData.menarcheAge < 12) score += 1
    if (formData.menopauseAge && formData.menopauseAge > 55) score += 1
    if (formData.pregnancies === '0') score += 2
    if (formData.firstPregnancyAge && formData.firstPregnancyAge > 30) score += 1
    if (formData.breastfeedingMonths < 12) score += 1

    if (formData.alcoholUse === 'daily') score += 2
    if (formData.smoking) score += 2
    if (formData.physicalActivity === 'none') score += 2
    if (formData.dietQuality === 'poor') score += 1
    if (formData.nightShiftWork) score += 1

    if (formData.hormoneTherapy) score += 2
    if (formData.contraceptiveUse) score += 1
    if (formData.previousBiopsies) score += 2
    if (formData.breastDensity === 'high') score += 3
    if (formData.radiationExposure) score += 2

    if (formData.pesticideExposure) score += 1
    if (formData.charcoalUse) score += 1
    if (formData.traditionalMedicineUse) score += 1

    let riskLevel = 'Low'
    if (score >= 15) riskLevel = 'Very High'
    else if (score >= 10) riskLevel = 'High'
    else if (score >= 6) riskLevel = 'Moderate'

    onComplete({
      score,
      riskLevel,
      recommendations: [], // You can plug in generateRecommendations
      riskFactors: [] // You can plug in identifyKeyRiskFactors
    })
  }

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-soft">
      <h2 className="text-2xl font-bold text-pink-dark mb-4">
        {questions[step - 1].title}
      </h2>

      <div className="space-y-4">
        {questions[step - 1].fields.map(field => (
          <div key={field.name} className="mb-4">
            <label className="block text-gray-700 mb-2">
              {field.label}
            </label>
            {field.type === 'select' ? (
              <select
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                className="w-full p-2 border border-pink-light rounded"
              >
                <option value="">Select...</option>
                {field.options.map(opt => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            ) : field.type === 'radio' ? (
              <div className="flex gap-4">
                <label>
                  <input
                    type="radio"
                    name={field.name}
                    checked={formData[field.name] === true}
                    onChange={() => handleChange({ target: { name: field.name, type: 'radio', checked: true } })}
                  /> Yes
                </label>
                <label>
                  <input
                    type="radio"
                    name={field.name}
                    checked={formData[field.name] === false}
                    onChange={() => handleChange({ target: { name: field.name, type: 'radio', checked: false } })}
                  /> No
                </label>
              </div>
            ) : (
              <input
                type={field.type}
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                className="w-full p-2 border border-pink-light rounded"
                min={field.min}
                max={field.max}
              />
            )}
          </div>
        ))}
      </div>

      <div className="flex justify-between mt-8">
        <button
          onClick={handleBack}
          className="flex items-center gap-2 bg-pink-light text-pink-dark px-4 py-2 rounded hover:bg-pink-primary hover:text-white transition"
        >
          <FiArrowLeft /> Back
        </button>

        <button
          onClick={handleNext}
          className="flex items-center gap-2 bg-purple-accent text-white px-4 py-2 rounded hover:bg-purple-700 transition"
        >
          {step === questions.length ? 'Calculate Risk' : 'Next'} <FiArrowRight />
        </button>
      </div>
    </div>
  )
}
