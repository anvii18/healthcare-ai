import { useState } from "react";
import { ArrowLeft, Thermometer, Wind, Droplet, HeartPulse, AlertCircle, Check } from "lucide-react";

interface SymptomsCheckerProps {
  onBack: () => void;
  onNavigate: (screen: string) => void;
}

export function SymptomsChecker({ onBack, onNavigate }: SymptomsCheckerProps) {
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const [showResults, setShowResults] = useState(false);

  const symptoms = [
    { id: "fever", label: "Fever", icon: Thermometer, color: "bg-red-100 text-red-600 border-red-200" },
    { id: "cough", label: "Cough", icon: Wind, color: "bg-orange-100 text-orange-600 border-orange-200" },
    { id: "cold", label: "Cold / Runny Nose", icon: Droplet, color: "bg-blue-100 text-blue-600 border-blue-200" },
    { id: "headache", label: "Headache", icon: AlertCircle, color: "bg-purple-100 text-purple-600 border-purple-200" },
    { id: "bodyache", label: "Body Ache", icon: HeartPulse, color: "bg-pink-100 text-pink-600 border-pink-200" },
    { id: "fatigue", label: "Fatigue / Weakness", icon: AlertCircle, color: "bg-yellow-100 text-yellow-600 border-yellow-200" },
  ];

  const toggleSymptom = (symptomId: string) => {
    setSelectedSymptoms((prev) =>
      prev.includes(symptomId)
        ? prev.filter((s) => s !== symptomId)
        : [...prev, symptomId]
    );
  };

  const handleSubmit = () => {
    setShowResults(true);
  };

  const getGuidance = () => {
    if (selectedSymptoms.includes("fever") && selectedSymptoms.includes("cough")) {
      return {
        condition: "Common Cold or Flu",
        severity: "moderate",
        advice: [
          "Stay hydrated - drink plenty of water and fluids",
          "Get adequate rest - sleep 7-8 hours",
          "Monitor temperature regularly",
          "Take paracetamol if fever is above 100°F",
          "Avoid contact with others to prevent spread",
        ],
        action: "If fever persists for more than 3 days or exceeds 102°F, please visit a doctor.",
      };
    } else if (selectedSymptoms.includes("fever")) {
      return {
        condition: "Fever",
        severity: "mild",
        advice: [
          "Monitor your temperature every 4 hours",
          "Stay well hydrated",
          "Rest in a cool, comfortable environment",
          "Take paracetamol if needed",
        ],
        action: "Consult a doctor if fever persists beyond 2 days.",
      };
    } else {
      return {
        condition: "Mild Symptoms",
        severity: "low",
        advice: [
          "Stay hydrated",
          "Get adequate rest",
          "Maintain a healthy diet",
          "Monitor your symptoms",
        ],
        action: "Symptoms should improve in 2-3 days. Consult a doctor if they worsen.",
      };
    }
  };

  const guidance = getGuidance();

  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-50 to-white pb-20">
      {/* Header */}
      <div className="bg-white border-b border-border sticky top-0 z-10">
        <div className="max-w-2xl mx-auto px-4 py-4 flex items-center gap-3">
          <button
            onClick={onBack}
            className="w-10 h-10 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <h2>Symptoms Checker</h2>
            <p className="text-sm text-muted-foreground">Select your symptoms</p>
          </div>
        </div>
      </div>

      {!showResults ? (
        <div className="max-w-2xl mx-auto px-6 py-8">
          {/* Instructions */}
          <div className="bg-cyan-50 border border-cyan-200 rounded-2xl p-5 mb-6">
            <div className="flex gap-3">
              <AlertCircle className="w-6 h-6 text-cyan-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-cyan-900 mb-1">Important Note</h3>
                <p className="text-sm text-cyan-700 leading-relaxed">
                  This is not a diagnostic tool. The guidance provided is for awareness only. 
                  Always consult a healthcare professional for accurate diagnosis.
                </p>
              </div>
            </div>
          </div>

          {/* Symptoms Selection */}
          <h3 className="mb-4 text-gray-900">What symptoms are you experiencing?</h3>
          <div className="grid grid-cols-1 gap-4 mb-8">
            {symptoms.map((symptom) => {
              const Icon = symptom.icon;
              const isSelected = selectedSymptoms.includes(symptom.id);
              
              return (
                <button
                  key={symptom.id}
                  onClick={() => toggleSymptom(symptom.id)}
                  className={`flex items-center gap-4 p-5 rounded-2xl border-2 transition-all ${
                    isSelected
                      ? "border-primary bg-cyan-50 shadow-md"
                      : "border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm"
                  }`}
                >
                  <div className={`w-14 h-14 rounded-xl ${symptom.color} flex items-center justify-center border-2 flex-shrink-0`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <span className="text-lg flex-1 text-left">{symptom.label}</span>
                  {isSelected && (
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            disabled={selectedSymptoms.length === 0}
            className="w-full bg-primary hover:bg-cyan-700 text-white py-4 px-6 rounded-2xl shadow-md hover:shadow-lg transition-all disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            Get Guidance
          </button>
        </div>
      ) : (
        <div className="max-w-2xl mx-auto px-6 py-8">
          {/* Results */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-6 shadow-sm">
            <div className="flex items-start gap-3 mb-4">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                guidance.severity === "moderate" ? "bg-orange-100 text-orange-600" : 
                guidance.severity === "mild" ? "bg-yellow-100 text-yellow-600" : 
                "bg-green-100 text-green-600"
              }`}>
                <AlertCircle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-gray-900 mb-1">Possible Condition</h3>
                <p className="text-muted-foreground">{guidance.condition}</p>
              </div>
            </div>
          </div>

          {/* Advice */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-6 shadow-sm">
            <h3 className="mb-4 text-gray-900">Recommended Actions</h3>
            <ul className="space-y-3">
              {guidance.advice.map((item, index) => (
                <li key={index} className="flex gap-3">
                  <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Action Alert */}
          <div className="bg-orange-50 border border-orange-200 rounded-2xl p-5 mb-6">
            <div className="flex gap-3">
              <AlertCircle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-orange-900 mb-1">When to Seek Help</h3>
                <p className="text-sm text-orange-700 leading-relaxed">
                  {guidance.action}
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <button
              onClick={() => onNavigate("facilities")}
              className="w-full bg-primary hover:bg-cyan-700 text-white py-4 px-6 rounded-2xl shadow-md hover:shadow-lg transition-all"
            >
              Find Nearby Healthcare Centers
            </button>
            <button
              onClick={() => setShowResults(false)}
              className="w-full bg-gray-100 hover:bg-gray-200 text-gray-900 py-4 px-6 rounded-2xl transition-all"
            >
              Check Again
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
