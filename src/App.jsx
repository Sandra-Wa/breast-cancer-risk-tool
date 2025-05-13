import { useState } from 'react'
import Home from './components/Home'
import RiskAssessment from './components/RiskAssessment'
import Results from './components/Results'
import ResourcesPanel from './components/ResourcesPanel'

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [riskData, setRiskData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleAssessmentComplete = (data) => {
    setIsLoading(true)
    // Simulate API call
    setTimeout(() => {
      setRiskData(data)
      setCurrentPage('results')
      setIsLoading(false)
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white font-sans">
      <header className="bg-pink-600 text-white py-4 shadow-md">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold">Pink Ribbon Risk Assessment</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 min-h-[70vh]">
        {isLoading ? (
          <div className="text-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-pink-600 mx-auto"></div>
            <p className="mt-4 text-pink-700 font-medium">Calculating your risk...</p>
          </div>
        ) : (
          <>
            {currentPage === 'home' && (
              <Home onStartAssessment={() => setCurrentPage('assessment')} />
            )}
            {currentPage === 'assessment' && (
              <RiskAssessment 
                onComplete={handleAssessmentComplete}
                onBack={() => setCurrentPage('home')}
              />
            )}
            {currentPage === 'results' && riskData && (
              <Results 
                data={riskData}
                onRestart={() => setCurrentPage('home')}
                onResources={() => setCurrentPage('resources')}
              />
            )}
            {currentPage === 'resources' && (
              <ResourcesPanel onBack={() => setCurrentPage('results')} />
            )}
          </>
        )}
      </main>

      <footer className="bg-pink-600 text-white py-6 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white">© {new Date().getFullYear()} East African Breast Health Initiative</p>
          <p className="text-pink-100 text-sm mt-2">For educational purposes only</p>
        </div>
      </footer>
    </div>
  )
}

export default App