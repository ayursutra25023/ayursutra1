import React, { useState } from 'react';
import { Calendar, Activity, BookOpen, MessageSquare, User, Bell, TrendingUp, Clock, Heart } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { useAuth } from '../contexts/AuthContext';

const PatientDashboard: React.FC = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');

  // Sample data
  const healthData = [
    { date: '2024-01-01', energy: 7, sleep: 8, stress: 3 },
    { date: '2024-01-08', energy: 8, sleep: 7, stress: 4 },
    { date: '2024-01-15', energy: 6, sleep: 6, stress: 6 },
    { date: '2024-01-22', energy: 9, sleep: 9, stress: 2 },
    { date: '2024-01-29', energy: 8, sleep: 8, stress: 3 }
  ];

  const upcomingAppointments = [
    { id: 1, practitioner: 'Dr. Rajesh Kumar', therapy: 'Panchakarma Consultation', date: '2024-02-15', time: '10:00 AM' },
    { id: 2, practitioner: 'Dr. Priya Sharma', therapy: 'Abhyanga Massage', date: '2024-02-18', time: '2:00 PM' }
  ];

  const recentSessions = [
    { id: 1, therapy: 'Vamana Therapy', date: '2024-01-30', practitioner: 'Dr. Rajesh Kumar', status: 'Completed' },
    { id: 2, therapy: 'Abhyanga', date: '2024-01-25', practitioner: 'Dr. Priya Sharma', status: 'Completed' }
  ];

  const tabs = [
    { id: 'overview', name: 'Overview', icon: Activity },
    { id: 'appointments', name: 'Appointments', icon: Calendar },
    { id: 'progress', name: 'Progress', icon: TrendingUp },
    { id: 'profile', name: 'Profile', icon: User }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Welcome back, {user?.name}!</h1>
          <p className="text-gray-600 mt-2">Track your wellness journey and manage your Panchakarma treatments.</p>
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
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Quick Stats */}
            <div className="lg:col-span-2 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white rounded-lg p-6 shadow-sm border">
                  <div className="flex items-center">
                    <div className="p-3 bg-green-100 rounded-lg">
                      <Calendar className="h-6 w-6 text-green-600" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-600">Next Appointment</p>
                      <p className="text-2xl font-semibold text-gray-900">Feb 15</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm border">
                  <div className="flex items-center">
                    <div className="p-3 bg-blue-100 rounded-lg">
                      <Activity className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-600">Sessions Completed</p>
                      <p className="text-2xl font-semibold text-gray-900">12</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm border">
                  <div className="flex items-center">
                    <div className="p-3 bg-yellow-100 rounded-lg">
                      <Heart className="h-6 w-6 text-yellow-600" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-600">Wellness Score</p>
                      <p className="text-2xl font-semibold text-gray-900">85%</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Health Progress Chart */}
              <div className="bg-white rounded-lg p-6 shadow-sm border">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Health Trends</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={healthData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis domain={[0, 10]} />
                    <Tooltip />
                    <Line type="monotone" dataKey="energy" stroke="#10B981" strokeWidth={2} name="Energy Level" />
                    <Line type="monotone" dataKey="sleep" stroke="#3B82F6" strokeWidth={2} name="Sleep Quality" />
                    <Line type="monotone" dataKey="stress" stroke="#EF4444" strokeWidth={2} name="Stress Level" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Upcoming Appointments */}
              <div className="bg-white rounded-lg p-6 shadow-sm border">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Appointments</h3>
                <div className="space-y-4">
                  {upcomingAppointments.map((appointment) => (
                    <div key={appointment.id} className="border-l-4 border-green-500 pl-4">
                      <p className="font-medium text-gray-900">{appointment.therapy}</p>
                      <p className="text-sm text-gray-600">{appointment.practitioner}</p>
                      <p className="text-sm text-green-600">{appointment.date} at {appointment.time}</p>
                    </div>
                  ))}
                </div>
                <button className="w-full mt-4 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors">
                  Book New Appointment
                </button>
              </div>

              {/* Recommendations */}
              <div className="bg-green-50 rounded-lg p-6 border border-green-200">
                <h3 className="text-lg font-semibold text-green-800 mb-4">Today's Wellness Tip</h3>
                <p className="text-green-700 text-sm mb-4">
                  Based on your Vata constitution, try starting your day with warm water and lemon 
                  to aid digestion and boost energy levels.
                </p>
                <button className="text-green-600 text-sm font-medium hover:text-green-700">
                  Learn more →
                </button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'appointments' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">Appointments</h2>
              <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors">
                Book New Appointment
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Upcoming */}
              <div className="bg-white rounded-lg shadow-sm border">
                <div className="p-6 border-b border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900">Upcoming Sessions</h3>
                </div>
                <div className="p-6 space-y-4">
                  {upcomingAppointments.map((appointment) => (
                    <div key={appointment.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium text-gray-900">{appointment.therapy}</p>
                        <p className="text-sm text-gray-600">{appointment.practitioner}</p>
                        <p className="text-sm text-gray-500">{appointment.date} at {appointment.time}</p>
                      </div>
                      <div className="flex space-x-2">
                        <button className="px-3 py-1 text-xs bg-blue-100 text-blue-700 rounded">Reschedule</button>
                        <button className="px-3 py-1 text-xs bg-red-100 text-red-700 rounded">Cancel</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Past */}
              <div className="bg-white rounded-lg shadow-sm border">
                <div className="p-6 border-b border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900">Recent Sessions</h3>
                </div>
                <div className="p-6 space-y-4">
                  {recentSessions.map((session) => (
                    <div key={session.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium text-gray-900">{session.therapy}</p>
                        <p className="text-sm text-gray-600">{session.practitioner}</p>
                        <p className="text-sm text-gray-500">{session.date}</p>
                      </div>
                      <span className="px-2 py-1 text-xs bg-green-100 text-green-700 rounded">
                        {session.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'progress' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Health Progress</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Progress Chart */}
              <div className="bg-white rounded-lg p-6 shadow-sm border">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Weekly Health Metrics</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={healthData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis domain={[0, 10]} />
                    <Tooltip />
                    <Bar dataKey="energy" fill="#10B981" name="Energy Level" />
                    <Bar dataKey="sleep" fill="#3B82F6" name="Sleep Quality" />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              {/* Health Journal */}
              <div className="bg-white rounded-lg p-6 shadow-sm border">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Health Journal</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-green-500 pl-4">
                    <p className="text-sm text-gray-600">Jan 30, 2024</p>
                    <p className="text-gray-800">Felt energized after Vamana therapy. Digestive issues have improved significantly.</p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <p className="text-sm text-gray-600">Jan 25, 2024</p>
                    <p className="text-gray-800">Sleep quality better. Abhyanga massage was very relaxing.</p>
                  </div>
                </div>
                <button className="w-full mt-4 px-4 py-2 border border-green-600 text-green-600 rounded-md hover:bg-green-50 transition-colors">
                  Add Journal Entry
                </button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'profile' && (
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Profile Settings</h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    value={user?.name || ''}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    value={user?.email || ''}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Age</label>
                  <input
                    type="number"
                    placeholder="Enter your age"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Dosha Type</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500">
                    <option value="">Select your dosha</option>
                    <option value="vata">Vata</option>
                    <option value="pitta">Pitta</option>
                    <option value="kapha">Kapha</option>
                    <option value="vata-pitta">Vata-Pitta</option>
                    <option value="pitta-kapha">Pitta-Kapha</option>
                    <option value="vata-kapha">Vata-Kapha</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Health Conditions</label>
                  <textarea
                    placeholder="List any health conditions or concerns"
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>

                <div className="flex space-x-4">
                  <button className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors">
                    Save Changes
                  </button>
                  <button className="px-6 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors">
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PatientDashboard;