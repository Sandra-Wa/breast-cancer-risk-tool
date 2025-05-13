
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import ProgressBar from './ProgressBar';
import { useToast } from "@/hooks/use-toast";

interface FormData {
  age: string;
  familyHistory: string;
  previousBiopsies: string;
  firstChildAfter30: string;
  menstrualPeriodBefore12: string;
  alcohol: string;
  exercise: string;
  breastfeeding: string;
  overweight: string;
  contraceptivePills: string;
}

const AssessmentForm = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;
  
  const [formData, setFormData] = useState<FormData>({
    age: '',
    familyHistory: '',
    previousBiopsies: '',
    firstChildAfter30: '',
    menstrualPeriodBefore12: '',
    alcohol: '',
    exercise: '',
    breastfeeding: '',
    overweight: '',
    contraceptivePills: '',
  });
  
  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (currentStep === 1 && !formData.age) {
      toast({
        title: "Age is required",
        description: "Please enter your age to continue.",
        variant: "destructive"
      });
      return;
    }
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
      window.scrollTo(0, 0);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo(0, 0);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Calculate risk score (simplified example)
    const calculateRiskScore = () => {
      let score = 0;
      
      // Age factor
      const age = parseInt(formData.age);
      if (age >= 50) score += 30;
      else if (age >= 40) score += 20;
      else if (age >= 30) score += 10;
      
      // Family history
      if (formData.familyHistory === 'yes') score += 20;
      
      // Previous biopsies
      if (formData.previousBiopsies === 'yes') score += 15;
      
      // First child after 30
      if (formData.firstChildAfter30 === 'yes') score += 10;
      
      // Early menstrual period
      if (formData.menstrualPeriodBefore12 === 'yes') score += 10;
      
      // Lifestyle factors
      if (formData.alcohol === 'yes') score += 5;
      if (formData.exercise === 'no') score += 5;
      if (formData.breastfeeding === 'no') score += 5;
      if (formData.overweight === 'yes') score += 10;
      if (formData.contraceptivePills === 'yes') score += 5;
      
      return Math.min(score, 100); // Cap at 100
    };

    const getRiskLevel = (score: number) => {
      if (score < 30) return 'Low';
      if (score < 50) return 'Moderate';
      if (score < 70) return 'High';
      return 'Very High';
    };
    
    const riskScore = calculateRiskScore();
    const riskLevel = getRiskLevel(riskScore) as 'Low' | 'Moderate' | 'High' | 'Very High';
    
    // Save to localStorage for the results page
    localStorage.setItem('assessmentResults', JSON.stringify({
      riskScore,
      riskLevel,
      formData
    }));
    
    // Navigate to the results page
    navigate('/results');
  };

  return (
    <div className="max-w-2xl mx-auto">
      <Card className="p-6 shadow-md">
        <h2 className="text-2xl font-bold text-afya-700 mb-6">Breast Cancer Risk Assessment</h2>
        
        <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />
        
        <form onSubmit={handleSubmit} className="mt-8">
          {currentStep === 1 && (
            <div className="space-y-6 animate-fade-in">
              <h3 className="text-xl font-semibold text-gray-800">Basic Information</h3>
              
              <div>
                <Label htmlFor="age" className="text-base">What is your age?</Label>
                <Input
                  id="age"
                  type="number"
                  placeholder="Enter your age"
                  className="mt-2"
                  min="18"
                  max="120"
                  value={formData.age}
                  onChange={(e) => handleInputChange('age', e.target.value)}
                />
              </div>
              
              <div>
                <Label className="text-base mb-2 block">Do you have a family history of breast cancer?</Label>
                <RadioGroup 
                  value={formData.familyHistory} 
                  onValueChange={(value) => handleInputChange('familyHistory', value)}
                  className="space-y-3"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="family-yes" />
                    <Label htmlFor="family-yes">Yes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="family-no" />
                    <Label htmlFor="family-no">No</Label>
                  </div>
                </RadioGroup>
              </div>
              
              <div>
                <Label className="text-base mb-2 block">Have you had any previous breast biopsies?</Label>
                <RadioGroup 
                  value={formData.previousBiopsies} 
                  onValueChange={(value) => handleInputChange('previousBiopsies', value)}
                  className="space-y-3"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="biopsies-yes" />
                    <Label htmlFor="biopsies-yes">Yes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="biopsies-no" />
                    <Label htmlFor="biopsies-no">No</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
          )}
          
          {currentStep === 2 && (
            <div className="space-y-6 animate-fade-in">
              <h3 className="text-xl font-semibold text-gray-800">Reproductive Factors</h3>
              
              <div>
                <Label className="text-base mb-2 block">Did you have your first child after age 30?</Label>
                <RadioGroup 
                  value={formData.firstChildAfter30} 
                  onValueChange={(value) => handleInputChange('firstChildAfter30', value)}
                  className="space-y-3"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="firstChild-yes" />
                    <Label htmlFor="firstChild-yes">Yes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="firstChild-no" />
                    <Label htmlFor="firstChild-no">No</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="na" id="firstChild-na" />
                    <Label htmlFor="firstChild-na">Not applicable</Label>
                  </div>
                </RadioGroup>
              </div>
              
              <div>
                <Label className="text-base mb-2 block">Did your menstrual periods start before age 12?</Label>
                <RadioGroup 
                  value={formData.menstrualPeriodBefore12} 
                  onValueChange={(value) => handleInputChange('menstrualPeriodBefore12', value)}
                  className="space-y-3"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="menstrual-yes" />
                    <Label htmlFor="menstrual-yes">Yes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="menstrual-no" />
                    <Label htmlFor="menstrual-no">No</Label>
                  </div>
                </RadioGroup>
              </div>
              
              <div>
                <Label className="text-base mb-2 block">Have you breastfed for more than 1 year total?</Label>
                <RadioGroup 
                  value={formData.breastfeeding} 
                  onValueChange={(value) => handleInputChange('breastfeeding', value)}
                  className="space-y-3"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="breastfeeding-yes" />
                    <Label htmlFor="breastfeeding-yes">Yes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="breastfeeding-no" />
                    <Label htmlFor="breastfeeding-no">No</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="na" id="breastfeeding-na" />
                    <Label htmlFor="breastfeeding-na">Not applicable</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
          )}
          
          {currentStep === 3 && (
            <div className="space-y-6 animate-fade-in">
              <h3 className="text-xl font-semibold text-gray-800">Lifestyle Factors</h3>
              
              <div>
                <Label className="text-base mb-2 block">Do you consume alcohol regularly?</Label>
                <RadioGroup 
                  value={formData.alcohol} 
                  onValueChange={(value) => handleInputChange('alcohol', value)}
                  className="space-y-3"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="alcohol-yes" />
                    <Label htmlFor="alcohol-yes">Yes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="alcohol-no" />
                    <Label htmlFor="alcohol-no">No</Label>
                  </div>
                </RadioGroup>
              </div>
              
              <div>
                <Label className="text-base mb-2 block">Do you exercise regularly (at least 150 minutes weekly)?</Label>
                <RadioGroup 
                  value={formData.exercise} 
                  onValueChange={(value) => handleInputChange('exercise', value)}
                  className="space-y-3"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="exercise-yes" />
                    <Label htmlFor="exercise-yes">Yes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="exercise-no" />
                    <Label htmlFor="exercise-no">No</Label>
                  </div>
                </RadioGroup>
              </div>
              
              <div>
                <Label className="text-base mb-2 block">Are you overweight (BMI over 25)?</Label>
                <RadioGroup 
                  value={formData.overweight} 
                  onValueChange={(value) => handleInputChange('overweight', value)}
                  className="space-y-3"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="overweight-yes" />
                    <Label htmlFor="overweight-yes">Yes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="overweight-no" />
                    <Label htmlFor="overweight-no">No</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
          )}
          
          {currentStep === 4 && (
            <div className="space-y-6 animate-fade-in">
              <h3 className="text-xl font-semibold text-gray-800">Medical History</h3>
              
              <div>
                <Label className="text-base mb-2 block">Have you used hormonal contraceptive pills for more than 5 years?</Label>
                <RadioGroup 
                  value={formData.contraceptivePills} 
                  onValueChange={(value) => handleInputChange('contraceptivePills', value)}
                  className="space-y-3"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="pills-yes" />
                    <Label htmlFor="pills-yes">Yes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="pills-no" />
                    <Label htmlFor="pills-no">No</Label>
                  </div>
                </RadioGroup>
              </div>
              
              <div className="pt-4 border-t border-gray-100">
                <div className="flex items-start space-x-2 mb-6">
                  <Checkbox id="terms" className="mt-1" />
                  <Label htmlFor="terms" className="text-sm text-gray-600">
                    I understand this assessment is for informational purposes only and does not constitute medical advice or diagnosis. I should consult with a healthcare provider for any medical concerns.
                  </Label>
                </div>
                
                <div className="flex items-start space-x-2">
                  <Checkbox id="newsletter" className="mt-1" />
                  <Label htmlFor="newsletter" className="text-sm text-gray-600">
                    I would like to receive educational newsletters about breast cancer prevention and early detection.
                  </Label>
                </div>
              </div>
            </div>
          )}
          
          <div className="mt-10 flex justify-between">
            {currentStep > 1 ? (
              <Button 
                type="button" 
                variant="outline" 
                onClick={handleBack}
              >
                Back
              </Button>
            ) : (
              <div></div>
            )}
            
            {currentStep < totalSteps ? (
              <Button 
                type="button" 
                onClick={handleNext}
              >
                Continue
              </Button>
            ) : (
              <Button 
                type="submit"
                className="bg-afya-700 hover:bg-afya-800"
              >
                Submit Assessment
              </Button>
            )}
          </div>
        </form>
      </Card>
    </div>
  );
};

export default AssessmentForm;
