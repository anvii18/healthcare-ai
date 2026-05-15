import { useState } from "react";
import { LandingPage } from "./components/landing-page";
import { ChatInterface } from "./components/chat-interface";
import { SymptomsChecker } from "./components/symptoms-checker";
import { VaccinationScreen } from "./components/vaccination-screen";
import { HealthcareFacilities } from "./components/healthcare-facilities";
import { AlertsScreen } from "./components/alerts-screen";
import { ProfileScreen } from "./components/profile-screen";
import { BottomNavigation } from "./components/bottom-navigation";

type Screen = "home" | "chat" | "symptoms" | "vaccination" | "facilities" | "alerts" | "profile";

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>("home");
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  const handleNavigate = (screen: string) => {
    setCurrentScreen(screen as Screen);
  };

  const handleTabChange = (tab: string) => {
    setCurrentScreen(tab as Screen);
  };

  const handleBack = () => {
    setCurrentScreen("home");
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case "home":
        return (
          <LandingPage
            onNavigate={handleNavigate}
            selectedLanguage={selectedLanguage}
            onLanguageChange={setSelectedLanguage}
          />
        );
      case "chat":
        return <ChatInterface onNavigate={handleNavigate} />;
      case "symptoms":
        return <SymptomsChecker onBack={handleBack} onNavigate={handleNavigate} />;
      case "vaccination":
        return <VaccinationScreen onBack={handleBack} />;
      case "facilities":
        return <HealthcareFacilities onBack={handleBack} />;
      case "alerts":
        return <AlertsScreen onBack={handleBack} />;
      case "profile":
        return (
          <ProfileScreen
            onBack={handleBack}
            selectedLanguage={selectedLanguage}
            onLanguageChange={setSelectedLanguage}
          />
        );
      default:
        return (
          <LandingPage
            onNavigate={handleNavigate}
            selectedLanguage={selectedLanguage}
            onLanguageChange={setSelectedLanguage}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {renderScreen()}
      <BottomNavigation activeTab={currentScreen} onTabChange={handleTabChange} />
    </div>
  );
}
