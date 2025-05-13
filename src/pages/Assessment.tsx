
import React from 'react';
import AssessmentForm from '@/components/AssessmentForm';

const Assessment = () => {
  return (
    <div className="min-h-screen afya-gradient py-12">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-3">Breast Cancer Risk Assessment</h1>
          <p className="text-gray-600 max-w-xl mx-auto">
            Answer the following questions to receive your personalized breast cancer risk evaluation. 
            This assessment takes about 5 minutes to complete.
          </p>
        </div>
        
        <AssessmentForm />
        
        <div className="mt-10 text-center">
          <p className="text-sm text-gray-500">
            Your privacy is important to us. All information is confidential and used only for this assessment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Assessment;
