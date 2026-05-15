import { ArrowLeft, Calendar, Bell, Check, Clock, Shield } from "lucide-react";
import { useState } from "react";

interface VaccinationScreenProps {
  onBack: () => void;
}

export function VaccinationScreen({ onBack }: VaccinationScreenProps) {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  const upcomingVaccines = [
    {
      name: "Influenza (Flu) Vaccine",
      dueDate: "March 15, 2026",
      status: "upcoming",
      description: "Annual flu shot recommended",
      importance: "high",
    },
    {
      name: "Tetanus Booster (Td)",
      dueDate: "June 20, 2026",
      status: "upcoming",
      description: "Due every 10 years",
      importance: "medium",
    },
  ];

  const completedVaccines = [
    {
      name: "COVID-19 Booster",
      completedDate: "January 10, 2026",
      location: "District Hospital, Bhubaneswar",
    },
    {
      name: "Hepatitis B",
      completedDate: "May 15, 2023",
      location: "PHC Khurda",
    },
  ];

  const governmentPrograms = [
    {
      title: "Universal Immunization Program",
      vaccines: ["BCG", "DPT", "Polio", "Measles", "Hepatitis B"],
      ageGroup: "Children (0-5 years)",
    },
    {
      title: "COVID-19 Vaccination Drive",
      vaccines: ["Covaxin", "Covishield"],
      ageGroup: "All adults 18+",
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
            <h2>Vaccination Schedule</h2>
            <p className="text-sm text-muted-foreground">Track your immunizations</p>
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-6 py-8">
        {/* Notification Settings */}
        <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl p-6 mb-6 text-white shadow-md">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                <Bell className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-white mb-1">Vaccine Reminders</h3>
                <p className="text-sm text-emerald-50">SMS & WhatsApp notifications</p>
              </div>
            </div>
            <button
              onClick={() => setNotificationsEnabled(!notificationsEnabled)}
              className={`w-14 h-8 rounded-full transition-colors ${
                notificationsEnabled ? "bg-white" : "bg-white/30"
              }`}
            >
              <div
                className={`w-6 h-6 rounded-full bg-emerald-600 transition-transform ${
                  notificationsEnabled ? "translate-x-7" : "translate-x-1"
                }`}
              />
            </button>
          </div>
          <p className="text-sm text-emerald-50">
            {notificationsEnabled
              ? "You'll receive reminders 7 days before each vaccine is due"
              : "Enable to get timely vaccination reminders"}
          </p>
        </div>

        {/* Upcoming Vaccines */}
        <div className="mb-8">
          <h3 className="mb-4 text-gray-900">Upcoming Vaccines</h3>
          <div className="space-y-4">
            {upcomingVaccines.map((vaccine, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border-2 border-orange-200 p-5 shadow-sm"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                    vaccine.importance === "high" 
                      ? "bg-orange-100 text-orange-600" 
                      : "bg-yellow-100 text-yellow-600"
                  }`}>
                    <Clock className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-gray-900 mb-1">{vaccine.name}</h4>
                    <p className="text-sm text-muted-foreground mb-2">{vaccine.description}</p>
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="w-4 h-4 text-orange-600" />
                      <span className="text-orange-600">Due: {vaccine.dueDate}</span>
                    </div>
                  </div>
                </div>
                <button className="w-full mt-4 bg-orange-50 hover:bg-orange-100 text-orange-700 py-3 px-4 rounded-xl transition-colors">
                  Schedule Appointment
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Completed Vaccines */}
        <div className="mb-8">
          <h3 className="mb-4 text-gray-900">Vaccination History</h3>
          <div className="space-y-3">
            {completedVaccines.map((vaccine, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-gray-900 mb-1">{vaccine.name}</h4>
                    <p className="text-sm text-muted-foreground mb-1">
                      Completed: {vaccine.completedDate}
                    </p>
                    <p className="text-sm text-gray-600">{vaccine.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Government Programs */}
        <div className="mb-6">
          <h3 className="mb-4 text-gray-900">Government Vaccination Programs</h3>
          <div className="space-y-4">
            {governmentPrograms.map((program, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 bg-cyan-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-cyan-600" />
                  </div>
                  <div>
                    <h4 className="text-gray-900 mb-1">{program.title}</h4>
                    <p className="text-sm text-muted-foreground">{program.ageGroup}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {program.vaccines.map((vaccine, vIndex) => (
                    <span
                      key={vIndex}
                      className="bg-cyan-50 text-cyan-700 px-3 py-1.5 rounded-full text-sm border border-cyan-200"
                    >
                      {vaccine}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Info Box */}
        <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5">
          <div className="flex gap-3">
            <Shield className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="text-emerald-900 mb-1">Stay Protected</h3>
              <p className="text-sm text-emerald-700 leading-relaxed">
                Vaccinations are one of the most effective ways to prevent serious diseases. 
                Keep your immunization schedule up to date for better health protection.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
