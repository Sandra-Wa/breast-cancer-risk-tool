
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import RiskVisualization from '@/components/RiskVisualization';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Download, MailIcon, Share2 } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

interface AssessmentResults {
  riskScore: number;
  riskLevel: 'Low' | 'Moderate' | 'High' | 'Very High';
  formData: Record<string, string>;
}

const Results = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [results, setResults] = useState<AssessmentResults | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Retrieve results from localStorage
    const storedResults = localStorage.getItem('assessmentResults');
    
    if (storedResults) {
      try {
        const parsedResults = JSON.parse(storedResults);
        setResults(parsedResults);
      } catch (error) {
        console.error('Error parsing results:', error);
      }
    }
    
    setLoading(false);
  }, []);

  const handleShare = () => {
    toast({
      title: "Share feature",
      description: "This feature would allow sharing results with healthcare providers.",
    });
  };

  const handleDownload = () => {
    toast({
      title: "Download feature",
      description: "This feature would allow downloading results as PDF.",
    });
  };

  const handleContactDoctor = () => {
    toast({
      title: "Email feature",
      description: "This feature would allow emailing results to your doctor.",
    });
  };

  // If no results found, redirect to assessment
  useEffect(() => {
    if (!loading && !results) {
      toast({
        title: "No results found",
        description: "Please complete the assessment first.",
        variant: "destructive"
      });
      navigate('/assessment');
    }
  }, [loading, results, navigate, toast]);

  if (loading || !results) {
    return (
      <div className="min-h-screen afya-gradient flex items-center justify-center">
        <div className="animate-pulse">Loading your results...</div>
      </div>
    );
  }

  const getRecommendations = (riskLevel: string) => {
    switch (riskLevel) {
      case 'Low':
        return [
          "Continue with routine breast self-exams monthly",
          "Schedule clinical breast exams every 1-3 years",
          "Maintain a healthy lifestyle with regular exercise",
          "Follow a balanced diet rich in fruits and vegetables"
        ];
      case 'Moderate':
        return [
          "Schedule clinical breast exams annually",
          "Consider starting mammograms at age 40 or earlier",
          "Reduce alcohol consumption",
          "Increase physical activity to at least 150 minutes per week",
          "Discuss additional screening options with your doctor"
        ];
      case 'High':
      case 'Very High':
        return [
          "Schedule clinical breast exams every 6 months",
          "Begin regular mammograms (consult your doctor for frequency)",
          "Consider additional screenings like breast MRI",
          "Discuss preventive medications with your healthcare provider",
          "Make significant lifestyle modifications",
          "Consider genetic counseling if you have family history"
        ];
      default:
        return [
          "Schedule a clinical breast exam",
          "Discuss screening options with your healthcare provider",
          "Practice monthly breast self-exams"
        ];
    }
  };

  const recommendations = getRecommendations(results.riskLevel);

  return (
    <div className="min-h-screen afya-gradient py-12">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-10">Your Assessment Results</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <RiskVisualization 
              riskScore={results.riskScore} 
              riskLevel={results.riskLevel}
            />
            
            <div className="mt-6 flex flex-wrap gap-3">
              <Button onClick={handleDownload} variant="outline" className="flex items-center gap-2">
                <Download size={16} />
                Download PDF
              </Button>
              <Button onClick={handleShare} variant="outline" className="flex items-center gap-2">
                <Share2 size={16} />
                Share Results
              </Button>
              <Button onClick={handleContactDoctor} className="bg-afya-600 hover:bg-afya-700 flex items-center gap-2">
                <MailIcon size={16} />
                Email to Doctor
              </Button>
            </div>
          </div>
          
          <div>
            <Card className="p-6">
              <h2 className="font-bold text-xl text-gray-900 mb-4">Recommended Actions</h2>
              
              <ul className="space-y-3">
                {recommendations.map((rec, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-afya-600 mr-2">•</span>
                    <span>{rec}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-6 p-3 bg-amber-50 border border-amber-200 rounded-lg flex items-start">
                <AlertTriangle className="text-amber-500 mr-2 shrink-0 mt-1" size={18} />
                <p className="text-sm text-amber-700">
                  This assessment is not a diagnosis. Please consult with a healthcare professional
                  to discuss your results and develop a personal screening plan.
                </p>
              </div>
            </Card>
            
            <div className="mt-6">
              <h3 className="font-semibold text-lg mb-3">What's Next?</h3>
              <p className="text-gray-600 mb-4">
                Take this results summary to your next doctor's appointment to help guide your 
                conversation about breast cancer screening and prevention.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button
                  onClick={() => navigate('/resources')} 
                  variant="outline"
                  className="w-full md:w-auto"
                >
                  Explore Resources
                </Button>
                <Button
                  onClick={() => navigate('/')} 
                  className="bg-afya-600 hover:bg-afya-700 w-full md:w-auto"
                >
                  Return Home
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;
