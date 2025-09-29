import React, { useState } from 'react';
import { Calendar, Users, FileText, BarChart3, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import { useAuth } from '../contexts/AuthContext';

const PractitionerDashboard: React.FC = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');

  // Sample data
  const appointmentData = [
    { day: 'Mon', appointments: 8 },
    { day: 'Tue', appointments: 12 },
    { day: 'Wed', appointments: 6 },
    { day: 'Thu', appointments: 10 },
    { day: 'Fri', appointments: 9 },
    { day: 'Sat', appointments: 5 },
    { day: 'Sun', appointments: 3 }
  ];

  const patientsData = [
    { month: 'Jan', newPatients: 15, returning: 45 },
    { month: 'Feb', newPatients: 20, returning: 52 },
    { month: 'Mar', newPatients: 18, returning: 48 },
    { month: 'Apr', newPatients: 25, returning: 60 }
  ];

  const todayAppointments = [
    { id: 1, patient: 'Priya Sharma', time: '9:00 AM', therapy: 'Panchakarma Consultation', status: 'confirmed' },
    { id: 2, patient: 'Raj Patel', time: '10:30 AM', therapy: 'Abhyanga', status: 'confirmed' },
    { id: 3, patient: 'Sunita Devi', time: '2:00 PM', therapy: 'Virechana Therapy', status: 'pending' },
    { id: 4, patient: 'Amit Kumar', time: '3:30 PM', therapy: 'Follow-up Consultation', status: 'confirmed' }
  ];

  const recentPatients = [
    { id: 1, name: 'Priya Sharma', lastVisit: '2024-01-30', condition: 'Digestive Issues', progress: 'Improving' },
    { id: 2, name: 'Raj Patel', lastVisit: '2024-01-28', condition: 'Joint Pain', progress: 'Stable' },
    { id: 3, name: 'Sunita Devi', lastVisit: '2024-01-25', condition: 'Skin Disorders', progress: 'Excellent' }
  ];

  const tabs = [
    { id: 'overview', name: 'Overview', icon: BarChart3 },
    { id: 'appointments', name: 'Appointments', icon: Calendar },
    { id: 'patients', name: 'Patients', icon: Users },
    { id: 'prescriptions', name: 'Prescriptions', icon: FileText }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Good morning, Dr. {user?.name}!</h1>
          <p className="text-gray-600 mt-2">Here's your practice overview for today.</p>
        </div>

        {/* Tab Navigation */}
        <div className="border-b border-gray-200 mb-8">
          <nav className="-mb-px flex space-x-8">
            {tabs.map((tab) => {
              const IconComponent = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-2 px-1 border-b-2 font-medium text-sm flex items-center space-x-2 ${
                    activeTab === tab.id
                      ? 'border-green-500 text-green-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <IconComponent className="h-4 w-4" />
                  <span>{tab.name}</span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Tab Content */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-sm border">
                <div className="flex items-center">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <Calendar className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Today's Appointments</p>
                    <p className="text-2xl font-semibold text-gray-900">8</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm border">
                <div className="flex items-center">
                  <div className="p-3 bg-green-100 rounded-lg">
                    <Users className="h-6 w-6 text-green-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Active Patients</p>
                    <p className="text-2xl font-semibold text-gray-900">145</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm border">
                <div className="flex items-center">
                  <div className="p-3 bg-yellow-100 rounded-lg">
                    <Clock className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">This Week</p>
                    <p className="text-2xl font-semibold text-gray-900">53</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm border">
                <div className="flex items-center">
                  <div className="p-3 bg-purple-100 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-purple-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Success Rate</p>
                    <p className="text-2xl font-semibold text-gray-900">94%</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Weekly Appointments Chart */}
              <div className="bg-white rounded-lg p-6 shadow-sm border">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Weekly Appointments</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={appointmentData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="appointments" fill="#10B981" />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              {/* Patient Growth */}
              <div className="bg-white rounded-lg p-6 shadow-sm border">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Patient Growth</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={patientsData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="newPatients" stroke="#3B82F6" strokeWidth={2} name="New Patients" />
                    <Line type="monotone" dataKey="returning" stroke="#10B981" strokeWidth={2} name="Returning Patients" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Today's Schedule */}
            <div className="bg-white rounded-lg shadow-sm border">
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">Today's Schedule</h3>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {todayAppointments.map((appointment) => (
                    <div key={appointment.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="text-sm font-medium text-gray-900">{appointment.time}</div>
                        <div>
                          <p className="font-medium text-gray-900">{appointment.patient}</p>
                          <p className="text-sm text-gray-600">{appointment.therapy}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          appointment.status === 'confirmed' 
                            ? 'bg-green-100 text-green-700' 
                            : 'bg-yellow-100 text-yellow-700'
                        }`}>
                          {appointment.status}
                        </span>
                        <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                          View Details
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'appointments' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">Appointment Management</h2>
              <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors">
                Add Appointment
              </button>
            </div>

            <div className="bg-white rounded-lg shadow-sm border">
              <div className="p-6 border-b border-gray-200">
                <div className="flex space-x-4">
                  <button className="px-4 py-2 bg-green-600 text-white rounded-md">Today</button>
                  <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50">This Week</button>
                  <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50">This Month</button>
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {todayAppointments.map((appointment) => (
                    <div key={appointment.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="text-sm font-medium text-gray-900 w-20">{appointment.time}</div>
                        <div>
                          <p className="font-medium text-gray-900">{appointment.patient}</p>
                          <p className="text-sm text-gray-600">{appointment.therapy}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        {appointment.status === 'pending' && (
                          <AlertCircle className="h-5 w-5 text-yellow-500" />
                        )}
                        <button className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded">Start Session</button>
                        <button className="px-3 py-1 text-sm border border-gray-300 text-gray-700 rounded hover:bg-gray-50">Reschedule</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'patients' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">Patient Management</h2>
              <div className="flex space-x-3">
                <input
                  type="text"
                  placeholder="Search patients..."
                  className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors">
                  Add Patient
                </button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm border">
              <div className="p-6">
                <div className="space-y-4">
                  {recentPatients.map((patient) => (
                    <div key={patient.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                          <span className="text-green-600 font-semibold text-sm">
                            {patient.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">{patient.name}</p>
                          <p className="text-sm text-gray-600">{patient.condition}</p>
                          <p className="text-xs text-gray-500">Last visit: {patient.lastVisit}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          patient.progress === 'Excellent' ? 'bg-green-100 text-green-700' :
                          patient.progress === 'Improving' ? 'bg-blue-100 text-blue-700' :
                          'bg-yellow-100 text-yellow-700'
                        }`}>
                          {patient.progress}
                        </span>
                        <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                          View Profile
                        </button>
                        <button className="text-green-600 hover:text-green-700 text-sm font-medium">
                          Add Note
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'prescriptions' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">Digital Prescriptions</h2>
              <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors">
                Create Prescription
              </button>
            </div>

            <div className="bg-white rounded-lg shadow-sm border p-6">
              <div className="text-center py-12">
                <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">Digital Prescription System</h3>
                <p className="text-gray-600 mb-6">
                  Create, manage, and track digital prescriptions for your patients. 
                  All prescriptions are automatically saved to patient records.
                </p>
                <button className="px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors">
                  Start Creating Prescriptions
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PractitionerDashboard;