import { ArrowLeft, AlertTriangle, Info, Shield, TrendingUp, MapPin } from "lucide-react";

interface AlertsScreenProps {
  onBack: () => void;
}

export function AlertsScreen({ onBack }: AlertsScreenProps) {
  const criticalAlerts = [
    {
      id: 1,
      title: "Dengue Outbreak Alert - Khurda District",
      severity: "high",
      date: "February 8, 2026",
      description: "Increased cases of dengue fever reported in Khurda and surrounding areas. Take preventive measures.",
      location: "Khurda District, Odisha",
      cases: 127,
      affectedAreas: ["Khurda", "Balianta", "Tangi"],
      preventionTips: [
        "Use mosquito repellents",
        "Eliminate standing water",
        "Use mosquito nets while sleeping",
        "Wear full-sleeve clothes",
      ],
    },
  ];

  const activeAlerts = [
    {
      id: 2,
      title: "Seasonal Flu - Moderate Risk",
      severity: "medium",
      date: "February 5, 2026",
      description: "Seasonal influenza cases are on the rise. Maintain hygiene and get vaccinated.",
      location: "State-wide, Odisha",
      cases: 342,
    },
    {
      id: 3,
      title: "Water-borne Diseases Advisory",
      severity: "medium",
      date: "February 3, 2026",
      description: "Drink only boiled or purified water. Risk of cholera and typhoid in rural areas.",
      location: "Rural areas, Odisha",
      cases: 89,
    },
  ];

  const advisories = [
    {
      title: "COVID-19 Vaccination Booster",
      type: "info",
      date: "February 1, 2026",
      description: "Booster doses available for all adults. Visit nearest vaccination center.",
    },
    {
      title: "Heat Wave Precautions",
      type: "info",
      date: "January 28, 2026",
      description: "Stay hydrated, avoid direct sunlight during peak hours (12 PM - 3 PM).",
    },
  ];

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
            <h2>Health Alerts</h2>
            <p className="text-sm text-muted-foreground">Stay informed & protected</p>
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-6 py-8">
        {/* Government Verified Badge */}
        <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl p-6 mb-6 text-white shadow-md">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-white">Government Verified</h3>
              <p className="text-sm text-emerald-50">Official health advisories from Odisha Health Dept.</p>
            </div>
          </div>
        </div>

        {/* Critical Alerts */}
        {criticalAlerts.length > 0 && (
          <div className="mb-8">
            <h3 className="mb-4 text-gray-900 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-red-600" />
              Critical Alerts
            </h3>
            <div className="space-y-4">
              {criticalAlerts.map((alert) => (
                <div
                  key={alert.id}
                  className="bg-white rounded-2xl border-2 border-red-200 overflow-hidden shadow-md"
                >
                  {/* Alert Header */}
                  <div className="bg-gradient-to-r from-red-500 to-orange-500 p-5 text-white">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <AlertTriangle className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-white mb-1">{alert.title}</h4>
                        <p className="text-sm text-red-50 mb-2">{alert.date}</p>
                      </div>
                    </div>
                  </div>

                  {/* Alert Body */}
                  <div className="p-5">
                    <p className="text-gray-700 mb-4 leading-relaxed">{alert.description}</p>
                    
                    {/* Stats */}
                    <div className="flex gap-4 mb-4">
                      <div className="flex items-center gap-2 text-sm">
                        <TrendingUp className="w-4 h-4 text-red-600" />
                        <span className="text-gray-600">
                          <span className="text-red-600">{alert.cases}</span> reported cases
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <MapPin className="w-4 h-4 text-red-600" />
                        <span className="text-gray-600">{alert.location}</span>
                      </div>
                    </div>

                    {/* Affected Areas */}
                    <div className="mb-4">
                      <p className="text-sm text-gray-600 mb-2">Affected Areas:</p>
                      <div className="flex flex-wrap gap-2">
                        {alert.affectedAreas.map((area, index) => (
                          <span
                            key={index}
                            className="bg-red-50 text-red-700 px-3 py-1 rounded-lg text-sm border border-red-200"
                          >
                            {area}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Prevention Tips */}
                    <div className="bg-orange-50 rounded-xl p-4 border border-orange-200">
                      <h4 className="text-orange-900 mb-2 flex items-center gap-2">
                        <Shield className="w-4 h-4" />
                        Prevention Tips
                      </h4>
                      <ul className="space-y-2">
                        {alert.preventionTips.map((tip, index) => (
                          <li key={index} className="flex gap-2 text-sm text-orange-800">
                            <span className="text-orange-600">•</span>
                            <span>{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Active Alerts */}
        <div className="mb-8">
          <h3 className="mb-4 text-gray-900">Active Health Advisories</h3>
          <div className="space-y-4">
            {activeAlerts.map((alert) => (
              <div
                key={alert.id}
                className="bg-white rounded-2xl border border-orange-200 p-5 shadow-sm"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <AlertTriangle className="w-6 h-6 text-orange-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-gray-900 mb-1">{alert.title}</h4>
                    <p className="text-sm text-muted-foreground mb-2">{alert.date}</p>
                    <p className="text-sm text-gray-700 mb-3 leading-relaxed">{alert.description}</p>
                    <div className="flex gap-4 text-sm">
                      <div className="flex items-center gap-2 text-orange-600">
                        <TrendingUp className="w-4 h-4" />
                        <span>{alert.cases} cases</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <MapPin className="w-4 h-4" />
                        <span>{alert.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* General Advisories */}
        <div className="mb-6">
          <h3 className="mb-4 text-gray-900">General Health Advisories</h3>
          <div className="space-y-3">
            {advisories.map((advisory, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-cyan-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Info className="w-5 h-5 text-cyan-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-gray-900 mb-1">{advisory.title}</h4>
                    <p className="text-sm text-muted-foreground mb-2">{advisory.date}</p>
                    <p className="text-sm text-gray-700 leading-relaxed">{advisory.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Alert Subscription */}
        <div className="bg-cyan-50 border border-cyan-200 rounded-2xl p-5">
          <div className="flex gap-3 mb-4">
            <div className="w-10 h-10 bg-cyan-100 rounded-xl flex items-center justify-center flex-shrink-0">
              <Info className="w-5 h-5 text-cyan-600" />
            </div>
            <div>
              <h3 className="text-cyan-900 mb-1">Stay Updated</h3>
              <p className="text-sm text-cyan-700 leading-relaxed">
                Get instant notifications about health alerts and disease outbreaks in your area via SMS and WhatsApp.
              </p>
            </div>
          </div>
          <button className="w-full bg-primary hover:bg-cyan-700 text-white py-3 px-4 rounded-xl transition-colors">
            Enable Alert Notifications
          </button>
        </div>
      </div>
    </div>
  );
}
