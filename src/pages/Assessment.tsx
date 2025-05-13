
import React from 'react';
import AssessmentForm from '@/components/AssessmentForm';
import { Card } from "@/components/ui/card";

const Assessment = () => {
  return (
    <div className="min-h-screen afya-gradient py-12">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-3">Breast Cancer Risk Assessment</h1>
          <p className="text-gray-600 max-w-xl mx-auto mb-6">
            Answer the following questions to receive your personalized breast cancer risk evaluation. 
            This assessment takes about 5 minutes to complete.
          </p>
          
          <div className="w-40 h-40 mx-auto mb-6">
            <img 
              src="/lovable-uploads/53b74825-2733-4d4c-8e33-f9aa1baab581.png" 
              alt="Breast Cancer Awareness" 
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        
        <Card className="p-6 shadow-md border-afya-200">
          <AssessmentForm />
        </Card>
        
        <div className="mt-10 text-center">
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            <div className="w-32">
              <img 
                src="/lovable-uploads/668adf61-f763-4950-8654-1adcea1d7170.png" 
                alt="Breast self-examination" 
                className="w-full h-auto rounded-lg shadow-sm"
              />
            </div>
            <div className="w-32">
              <img 
                src="/lovable-uploads/65fdcc52-45b2-43ef-b1fd-cf6ceec297e6.png" 
                alt="Pink ribbon support" 
                className="w-full h-auto rounded-lg shadow-sm"
              />
            </div>
          </div>
          
          <p className="text-sm text-gray-500">
            Your privacy is important to us. All information is confidential and used only for this assessment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Assessment;
