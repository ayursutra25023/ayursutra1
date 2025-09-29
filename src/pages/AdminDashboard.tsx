import React, { useState } from 'react';
import { Users, Calendar, MapPin, BarChart3, Settings, Plus, Building } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { useAuth } from '../contexts/AuthContext';

const AdminDashboard: React.FC = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');

  // Sample data
  const monthlyData = [
    { month: 'Jan', appointments: 120, revenue: 45000 },
    { month: 'Feb', appointments: 135, revenue: 52000 },
    { month: 'Mar', appointments: 148, revenue: 58000 },
    { month: 'Apr', appointments: 162, revenue: 61000 }
  ];

  const therapyData = [
    { name: 'Panchakarma', value: 35, color: '#10B981' },
    { name: 'Abhyanga', value: 25, color: '#3B82F6' },
    { name: 'Shirodhara', value: 20, color: '#F59E0B' },
    { name: 'Virechana', value: 15, color: '#EF4444' },
    { name: 'Others', value: 5, color: '#8B5CF6' }
  ];

  const practitioners = [
    { id: 1, name: 'Dr. Rajesh Kumar', specialization: 'Panchakarma', patients: 45, experience: '15 years', status: 'Active' },
    { id: 2, name: 'Dr. Priya Sharma', specialization: 'Ayurvedic Medicine', patients: 38, experience: '12 years', status: 'Active' },
    { id: 3, name: 'Dr. Amit Patel', specialization: 'Pulse Diagnosis', patients: 32, experience: '8 years', status: 'Active' }
  ];

  const recentActivity = [
    { id: 1, action: 'New practitioner registered', user: 'Dr. Sarah Wilson', time: '2 hours ago' },
    { id: 2, action: 'Clinic profile updated', user: 'Admin', time: '4 hours ago' },
    { id: 3, action: 'New patient appointment', user: 'Rajesh Patel', time: '6 hours ago' }
  ];

  const tabs = [
    { id: 'overview', name: 'Overview', icon: BarChart3 },
    { id: 'practitioners', name: 'Practitioners', icon: Users },
    { id: 'clinic', name: 'Clinic Setup', icon: Building },
    { id: 'analytics', name: 'Analytics', icon: BarChart3 },
    { id: 'settings', name: 'Settings', icon: Settings }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Clinic Administration</h1>
          <p className="text-gray-600 mt-2">Manage your Ayurvedic clinic operations and practitioners.</p>
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
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Total Practitioners</p>
                    <p className="text-2xl font-semibold text-gray-900">12</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm border">
                <div className="flex items-center">
                  <div className="p-3 bg-green-100 rounded-lg">
                    <Calendar className="h-6 w-6 text-green-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Monthly Appointments</p>
                    <p className="text-2xl font-semibold text-gray-900">162</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm border">
                <div className="flex items-center">
                  <div className="p-3 bg-yellow-100 rounded-lg">
                    <Users className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Active Patients</p>
                    <p className="text-2xl font-semibold text-gray-900">1,247</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm border">
                <div className="flex items-center">
                  <div className="p-3 bg-purple-100 rounded-lg">
                    <BarChart3 className="h-6 w-6 text-purple-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Monthly Revenue</p>
                    <p className="text-2xl font-semibold text-gray-900">₹61K</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Monthly Performance */}
              <div className="bg-white rounded-lg p-6 shadow-sm border">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Monthly Performance</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={monthlyData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis yAxisId="left" />
                    <YAxis yAxisId="right" orientation="right" />
                    <Tooltip />
                    <Bar yAxisId="left" dataKey="appointments" fill="#10B981" name="Appointments" />
                    <Bar yAxisId="right" dataKey="revenue" fill="#3B82F6" name="Revenue (₹)" />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              {/* Therapy Distribution */}
              <div className="bg-white rounded-lg p-6 shadow-sm border">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Popular Therapies</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={therapyData}
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {therapyData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-lg shadow-sm border">
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {recentActivity.map((activity) => (
                    <div key={activity.id} className="flex items-center space-x-4">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <div className="flex-1">
                        <p className="text-sm text-gray-900">
                          <span className="font-medium">{activity.action}</span> by {activity.user}
                        </p>
                        <p className="text-xs text-gray-500">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'practitioners' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">Practitioner Management</h2>
              <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors flex items-center space-x-2">
                <Plus className="h-4 w-4" />
                <span>Add Practitioner</span>
              </button>
            </div>

            <div className="bg-white rounded-lg shadow-sm border">
              <div className="p-6">
                <div className="space-y-4">
                  {practitioners.map((practitioner) => (
                    <div key={practitioner.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                          <span className="text-green-600 font-semibold">
                            {practitioner.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-900">{practitioner.name}</h3>
                          <p className="text-sm text-gray-600">{practitioner.specialization}</p>
                          <p className="text-xs text-gray-500">Experience: {practitioner.experience}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="text-right">
                          <p className="text-sm font-medium text-gray-900">{practitioner.patients} patients</p>
                          <span className="inline-flex px-2 py-1 text-xs font-medium bg-green-100 text-green-700 rounded-full">
                            {practitioner.status}
                          </span>
                        </div>
                        <div className="flex space-x-2">
                          <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">Edit</button>
                          <button className="text-gray-600 hover:text-gray-700 text-sm font-medium">View Profile</button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'clinic' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Clinic Setup & Configuration</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Clinic Information */}
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Clinic Information</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Clinic Name</label>
                    <input
                      type="text"
                      defaultValue="AyurSutra Wellness Center"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                    <textarea
                      rows={3}
                      defaultValue="123 Wellness Street, Ayurveda District, Kerala, India"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                    <input
                      type="tel"
                      defaultValue="+91 98765 43210"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      defaultValue="contact@ayursutra.com"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                </div>
              </div>

              {/* Google Maps Integration */}
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Location Setup</h3>
                <div className="space-y-4">
                  <div className="h-48 bg-gray-200 rounded-md flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-gray-600">Google Maps Integration</p>
                      <p className="text-sm text-gray-500">Click to set clinic location</p>
                    </div>
                  </div>
                  <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                    Update Location on Google Maps
                  </button>
                  <div className="bg-blue-50 border border-blue-200 rounded-md p-3">
                    <p className="text-blue-700 text-sm">
                      <strong>Note:</strong> Setting your location on Google Maps helps patients find your clinic easily.
                      Ensure your clinic is verified for better visibility.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Operating Hours</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day) => (
                  <div key={day} className="flex items-center space-x-4">
                    <div className="w-20">
                      <label className="text-sm font-medium text-gray-700">{day}</label>
                    </div>
                    <input
                      type="time"
                      defaultValue="09:00"
                      className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                    <span className="text-gray-500">to</span>
                    <input
                      type="time"
                      defaultValue="18:00"
                      className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'analytics' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Analytics & Reports</h2>
            
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <div className="text-center py-12">
                <BarChart3 className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">Advanced Analytics</h3>
                <p className="text-gray-600 mb-6">
                  Get detailed insights into your clinic's performance, patient satisfaction, 
                  and therapy effectiveness.
                </p>
                <button className="px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors">
                  Generate Detailed Reports
                </button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'settings' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">System Settings</h2>
            
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <div className="text-center py-12">
                <Settings className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">Configuration Settings</h3>
                <p className="text-gray-600 mb-6">
                  Manage system preferences, notification settings, and clinic policies.
                </p>
                <button className="px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors">
                  Access Settings
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;