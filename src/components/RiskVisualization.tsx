
import React from 'react';
import { Progress } from "@/components/ui/progress";

interface RiskVisualizationProps {
  riskScore: number; // 0-100
  riskLevel: 'Low' | 'Moderate' | 'High' | 'Very High';
}

const RiskVisualization = ({ riskScore, riskLevel }: RiskVisualizationProps) => {
  // Determine color based on risk level
  const getColorClass = () => {
    switch (riskLevel) {
      case 'Low':
        return 'text-green-600';
      case 'Moderate':
        return 'text-amber-500';
      case 'High':
        return 'text-orange-500';
      case 'Very High':
        return 'text-red-600';
      default:
        return 'text-afya-600';
    }
  };

  const getProgressColor = () => {
    switch (riskLevel) {
      case 'Low':
        return 'bg-green-500';
      case 'Moderate':
        return 'bg-amber-500';
      case 'High':
        return 'bg-orange-500';
      case 'Very High':
        return 'bg-red-500';
      default:
        return 'bg-afya-600';
    }
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow-md">
      <div className="text-center mb-4">
        <h2 className="font-bold text-2xl text-gray-900 mb-1">Your Risk Assessment</h2>
        <p className="text-gray-600">Based on the information you provided</p>
      </div>
      
      <div className="mt-6 mb-2 flex justify-between items-baseline">
        <span className="text-sm text-gray-500">Risk Level:</span>
        <span className={`font-bold text-xl ${getColorClass()}`}>{riskLevel}</span>
      </div>
      
      <div className="relative mt-2 mb-6">
        <Progress 
          value={riskScore} 
          className="h-3 rounded-full"
          indicatorClassName={getProgressColor()}
        />
      </div>
      
      <div className="text-xs flex justify-between text-gray-500 mb-6">
        <span>Low Risk</span>
        <span>Moderate</span>
        <span>High Risk</span>
      </div>
      
      <div className="border-t border-gray-100 pt-4">
        <p className="text-gray-700 text-sm">
          This assessment is based on established risk factors for East African women. 
          It's important to remember that this is not a diagnosis, but a tool to help guide 
          your preventive health strategy. Consult with a healthcare professional for personalized advice.
        </p>
      </div>
    </div>
  );
};

export default RiskVisualization;
