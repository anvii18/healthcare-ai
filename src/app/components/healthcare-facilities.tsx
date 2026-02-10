import { useState } from "react";
import { ArrowLeft, MapPin, Phone, Navigation, Clock, Users, Star } from "lucide-react";

interface HealthcareFacilitiesProps {
  onBack: () => void;
}

export function HealthcareFacilities({ onBack }: HealthcareFacilitiesProps) {
  const [pincode, setPincode] = useState("");
  const [searchPerformed, setSearchPerformed] = useState(false);

  const facilities = [
    {
      name: "District Hospital Khurda",
      type: "Government Hospital",
      distance: "2.3 km",
      address: "NH-16, Khurda, Odisha",
      phone: "+91-6755-220123",
      hours: "24x7 Emergency",
      doctors: 45,
      rating: 4.2,
      specialties: ["Emergency", "Surgery", "Pediatrics", "Maternity"],
    },
    {
      name: "PHC Balianta",
      type: "Primary Health Center",
      distance: "3.8 km",
      address: "Balianta, Khurda, Odisha",
      phone: "+91-6755-220456",
      hours: "8:00 AM - 6:00 PM",
      doctors: 8,
      rating: 3.8,
      specialties: ["General Medicine", "Vaccination", "Basic Care"],
    },
    {
      name: "Community Health Centre Tangi",
      type: "Community Health Center",
      distance: "5.1 km",
      address: "Tangi Road, Khurda, Odisha",
      phone: "+91-6755-220789",
      hours: "24x7",
      doctors: 18,
      rating: 4.0,
      specialties: ["General Medicine", "OPD", "Emergency", "Lab Services"],
    },
    {
      name: "Jeevan Jyoti Hospital",
      type: "Private Hospital",
      distance: "6.2 km",
      address: "Station Road, Khurda, Odisha",
      phone: "+91-6755-221234",
      hours: "24x7",
      doctors: 25,
      rating: 4.5,
      specialties: ["Multi-specialty", "ICU", "Diagnostics"],
    },
  ];

  const handleSearch = () => {
    if (pincode.length >= 6) {
      setSearchPerformed(true);
    }
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
            <h2>Healthcare Facilities</h2>
            <p className="text-sm text-muted-foreground">Find nearby centers</p>
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-6 py-8">
        {/* Search Section */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-6 shadow-sm">
          <h3 className="mb-4 text-gray-900">Enter Your Location</h3>
          <div className="flex gap-3">
            <div className="flex-1 relative">
              <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={pincode}
                onChange={(e) => setPincode(e.target.value)}
                placeholder="Enter Pincode or Area"
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-12 py-3 outline-none focus:border-primary transition-colors"
              />
            </div>
            <button
              onClick={handleSearch}
              className="bg-primary hover:bg-cyan-700 text-white px-6 py-3 rounded-xl transition-colors whitespace-nowrap"
            >
              Search
            </button>
          </div>
          {!searchPerformed && (
            <p className="text-sm text-muted-foreground mt-3">
              Currently showing facilities near Khurda, Odisha
            </p>
          )}
        </div>

        {/* Facilities List */}
        <div className="mb-4">
          <h3 className="mb-4 text-gray-900">
            {facilities.length} Healthcare Centers Nearby
          </h3>
        </div>

        <div className="space-y-4">
          {facilities.map((facility, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Facility Header */}
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h4 className="text-gray-900 mb-1">{facility.name}</h4>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm text-cyan-600 bg-cyan-50 px-2 py-1 rounded-lg border border-cyan-200">
                      {facility.type}
                    </span>
                    <div className="flex items-center gap-1 text-sm text-gray-600">
                      <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      <span>{facility.rating}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-200">
                  <Navigation className="w-4 h-4 text-emerald-600" />
                  <span className="text-sm text-emerald-700">{facility.distance}</span>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-2 mb-3">
                <MapPin className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-gray-600">{facility.address}</p>
              </div>

              {/* Info Row */}
              <div className="flex gap-4 mb-3 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-gray-400" />
                  <span>{facility.hours}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-gray-400" />
                  <span>{facility.doctors} Doctors</span>
                </div>
              </div>

              {/* Specialties */}
              <div className="flex flex-wrap gap-2 mb-4">
                {facility.specialties.map((specialty, sIndex) => (
                  <span
                    key={sIndex}
                    className="bg-gray-50 text-gray-700 px-3 py-1 rounded-lg text-sm border border-gray-200"
                  >
                    {specialty}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <button className="flex-1 bg-primary hover:bg-cyan-700 text-white py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors">
                  <Phone className="w-4 h-4" />
                  <span>Call Now</span>
                </button>
                <button className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors">
                  <Navigation className="w-4 h-4" />
                  <span>Get Directions</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Emergency Info */}
        <div className="mt-6 bg-red-50 border border-red-200 rounded-2xl p-5">
          <div className="flex gap-3">
            <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
              <Phone className="w-5 h-5 text-red-600" />
            </div>
            <div>
              <h3 className="text-red-900 mb-1">Emergency Helpline</h3>
              <p className="text-sm text-red-700 mb-2">
                For medical emergencies, call 108 (Ambulance Service)
              </p>
              <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors">
                Call 108 Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
