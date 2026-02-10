import { ArrowLeft, User, Globe, Bell, Shield, Phone, Mail, MapPin, Calendar } from "lucide-react";

interface ProfileScreenProps {
  onBack: () => void;
  selectedLanguage: string;
  onLanguageChange: (lang: string) => void;
}

export function ProfileScreen({ onBack, selectedLanguage, onLanguageChange }: ProfileScreenProps) {
  const languages = [
    { code: "en", name: "English" },
    { code: "hi", name: "हिंदी" },
    { code: "or", name: "ଓଡ଼ିଆ" },
  ];

  const profileInfo = {
    name: "Ramesh Kumar",
    age: 35,
    phone: "+91 98765 43210",
    email: "ramesh.kumar@example.com",
    location: "Khurda, Odisha",
  };

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
            <h2>Profile</h2>
            <p className="text-sm text-muted-foreground">Manage your account</p>
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-6 py-8">
        {/* Profile Header */}
        <div className="bg-gradient-to-r from-cyan-500 to-teal-500 rounded-2xl p-6 mb-6 text-white shadow-md">
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
              <User className="w-10 h-10" />
            </div>
            <div>
              <h3 className="text-white text-xl mb-1">{profileInfo.name}</h3>
              <p className="text-cyan-50">{profileInfo.age} years old</p>
            </div>
          </div>
        </div>

        {/* Profile Information */}
        <div className="bg-white rounded-2xl border border-gray-200 p-5 mb-6 shadow-sm">
          <h3 className="mb-4 text-gray-900">Personal Information</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-cyan-100 rounded-xl flex items-center justify-center">
                <Phone className="w-5 h-5 text-cyan-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Phone Number</p>
                <p className="text-gray-900">{profileInfo.phone}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-cyan-100 rounded-xl flex items-center justify-center">
                <Mail className="w-5 h-5 text-cyan-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="text-gray-900">{profileInfo.email}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-cyan-100 rounded-xl flex items-center justify-center">
                <MapPin className="w-5 h-5 text-cyan-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Location</p>
                <p className="text-gray-900">{profileInfo.location}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Language Settings */}
        <div className="bg-white rounded-2xl border border-gray-200 p-5 mb-6 shadow-sm">
          <h3 className="mb-4 text-gray-900 flex items-center gap-2">
            <Globe className="w-5 h-5 text-cyan-600" />
            Language Preference
          </h3>
          <div className="grid grid-cols-3 gap-3">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => onLanguageChange(lang.code)}
                className={`py-3 px-4 rounded-xl transition-all ${
                  selectedLanguage === lang.code
                    ? "bg-primary text-white shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {lang.name}
              </button>
            ))}
          </div>
        </div>

        {/* Notification Settings */}
        <div className="bg-white rounded-2xl border border-gray-200 p-5 mb-6 shadow-sm">
          <h3 className="mb-4 text-gray-900 flex items-center gap-2">
            <Bell className="w-5 h-5 text-cyan-600" />
            Notification Preferences
          </h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-900">Health Alerts</p>
                <p className="text-sm text-muted-foreground">Disease outbreaks & advisories</p>
              </div>
              <button className="w-14 h-8 rounded-full bg-primary">
                <div className="w-6 h-6 rounded-full bg-white translate-x-7 transition-transform" />
              </button>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-900">Vaccination Reminders</p>
                <p className="text-sm text-muted-foreground">Upcoming vaccines & schedules</p>
              </div>
              <button className="w-14 h-8 rounded-full bg-primary">
                <div className="w-6 h-6 rounded-full bg-white translate-x-7 transition-transform" />
              </button>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-900">WhatsApp Updates</p>
                <p className="text-sm text-muted-foreground">Receive updates on WhatsApp</p>
              </div>
              <button className="w-14 h-8 rounded-full bg-gray-300">
                <div className="w-6 h-6 rounded-full bg-white translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Health Stats */}
        <div className="bg-white rounded-2xl border border-gray-200 p-5 mb-6 shadow-sm">
          <h3 className="mb-4 text-gray-900">Your Health Activity</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-cyan-50 rounded-xl p-4 border border-cyan-200">
              <div className="flex items-center gap-2 mb-1">
                <Calendar className="w-5 h-5 text-cyan-600" />
                <p className="text-sm text-cyan-700">Consultations</p>
              </div>
              <p className="text-2xl text-cyan-900">12</p>
            </div>
            <div className="bg-emerald-50 rounded-xl p-4 border border-emerald-200">
              <div className="flex items-center gap-2 mb-1">
                <Shield className="w-5 h-5 text-emerald-600" />
                <p className="text-sm text-emerald-700">Vaccines</p>
              </div>
              <p className="text-2xl text-emerald-900">8</p>
            </div>
          </div>
        </div>

        {/* About & Support */}
        <div className="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm">
          <h3 className="mb-4 text-gray-900">About & Support</h3>
          <div className="space-y-3">
            <button className="w-full text-left py-3 px-4 rounded-xl hover:bg-gray-50 flex items-center justify-between transition-colors">
              <span className="text-gray-700">Help & FAQ</span>
              <span className="text-gray-400">→</span>
            </button>
            <button className="w-full text-left py-3 px-4 rounded-xl hover:bg-gray-50 flex items-center justify-between transition-colors">
              <span className="text-gray-700">Privacy Policy</span>
              <span className="text-gray-400">→</span>
            </button>
            <button className="w-full text-left py-3 px-4 rounded-xl hover:bg-gray-50 flex items-center justify-between transition-colors">
              <span className="text-gray-700">Terms of Service</span>
              <span className="text-gray-400">→</span>
            </button>
            <button className="w-full text-left py-3 px-4 rounded-xl hover:bg-gray-50 flex items-center justify-between transition-colors">
              <span className="text-gray-700">Contact Support</span>
              <span className="text-gray-400">→</span>
            </button>
          </div>
        </div>

        {/* App Version */}
        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground">Sehat Bandhu v1.0.0</p>
          <p className="text-xs text-muted-foreground mt-1">Powered by Odisha Health Department</p>
        </div>
      </div>
    </div>
  );
}
