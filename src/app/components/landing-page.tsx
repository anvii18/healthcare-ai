import { MessageCircle, Phone, Globe, Shield, Bell, MapPin } from "lucide-react";

interface LandingPageProps {
  onNavigate: (screen: string) => void;
  selectedLanguage: string;
  onLanguageChange: (lang: string) => void;
}

export function LandingPage({ onNavigate, selectedLanguage, onLanguageChange }: LandingPageProps) {
  const languages = [
    { code: "en", name: "English" },
    { code: "hi", name: "हिंदी" },
    { code: "or", name: "ଓଡ଼ିଆ" },
  ];

  const features = [
    {
      icon: MessageCircle,
      title: "Chat Support",
      description: "Get instant health guidance",
      color: "bg-cyan-100 text-cyan-600",
    },
    {
      icon: Bell,
      title: "Outbreak Alerts",
      description: "Stay informed about health risks",
      color: "bg-red-100 text-red-600",
    },
    {
      icon: Shield,
      title: "Vaccination Info",
      description: "Track your immunization schedule",
      color: "bg-emerald-100 text-emerald-600",
    },
    {
      icon: MapPin,
      title: "Find Facilities",
      description: "Locate nearby healthcare centers",
      color: "bg-blue-100 text-blue-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-50 to-white pb-20">
      {/* Header with Language Selector */}
      <div className="bg-white border-b border-border sticky top-0 z-10">
        <div className="max-w-2xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Globe className="w-5 h-5 text-primary" />
            <span className="text-sm text-muted-foreground">Language</span>
          </div>
          <div className="flex gap-2">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => onLanguageChange(lang.code)}
                className={`px-3 py-1.5 rounded-full transition-all ${
                  selectedLanguage === lang.code
                    ? "bg-primary text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {lang.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="max-w-2xl mx-auto px-6 pt-12 pb-8 text-center">
        {/* Logo/Icon */}
        <div className="w-24 h-24 bg-gradient-to-br from-cyan-500 to-teal-600 rounded-3xl mx-auto mb-6 flex items-center justify-center shadow-lg">
          <Shield className="w-14 h-14 text-white" />
        </div>
        
        {/* App Name */}
        <h1 className="text-4xl mb-3 text-gray-900">Sehat Bandhu</h1>
        
        {/* Tagline */}
        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          Your AI Health Companion for Awareness & Prevention
        </p>

        {/* Government Badge */}
        <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 rounded-full px-4 py-2 mb-8">
          <Shield className="w-4 h-4 text-emerald-600" />
          <span className="text-sm text-emerald-700">Government Verified</span>
        </div>

        {/* Primary CTA Buttons */}
        <div className="space-y-4 mb-12">
          <button
            onClick={() => onNavigate("chat")}
            className="w-full bg-primary hover:bg-cyan-700 text-white py-4 px-6 rounded-2xl flex items-center justify-center gap-3 shadow-md hover:shadow-lg transition-all"
          >
            <MessageCircle className="w-6 h-6" />
            <span className="text-lg">Chat with Sehat Bandhu</span>
          </button>
          
          <button
            onClick={() => onNavigate("chat")}
            className="w-full bg-secondary hover:bg-emerald-700 text-white py-4 px-6 rounded-2xl flex items-center justify-center gap-3 shadow-md hover:shadow-lg transition-all"
          >
            <Phone className="w-6 h-6" />
            <span className="text-lg">Voice / IVR Support</span>
          </button>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 gap-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className={`w-12 h-12 rounded-xl ${feature.color} flex items-center justify-center mb-3 mx-auto`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-base mb-1">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-snug">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Quick Links */}
      <div className="max-w-2xl mx-auto px-6 mt-8">
        <div className="bg-cyan-50 rounded-2xl p-6 border border-cyan-100">
          <h3 className="mb-4 text-gray-900">Quick Access</h3>
          <div className="space-y-3">
            <button
              onClick={() => onNavigate("symptoms")}
              className="w-full bg-white hover:bg-gray-50 text-gray-900 py-3 px-4 rounded-xl flex items-center justify-between border border-gray-200 transition-colors"
            >
              <span>Check Symptoms</span>
              <span className="text-2xl">🩺</span>
            </button>
            <button
              onClick={() => onNavigate("vaccination")}
              className="w-full bg-white hover:bg-gray-50 text-gray-900 py-3 px-4 rounded-xl flex items-center justify-between border border-gray-200 transition-colors"
            >
              <span>Vaccination Schedule</span>
              <span className="text-2xl">💉</span>
            </button>
            <button
              onClick={() => onNavigate("facilities")}
              className="w-full bg-white hover:bg-gray-50 text-gray-900 py-3 px-4 rounded-xl flex items-center justify-between border border-gray-200 transition-colors"
            >
              <span>Find Healthcare Centers</span>
              <span className="text-2xl">🏥</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
