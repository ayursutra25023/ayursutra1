import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LandingAnimation from './components/LandingAnimation';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import PatientDashboard from './pages/PatientDashboard';
import PractitionerDashboard from './pages/PractitionerDashboard';
import AdminDashboard from './pages/AdminDashboard';
import PanchakarmaCatalog from './pages/PanchakarmaCatalog';
import CommunityForum from './pages/CommunityForum';
import ClinicFinder from './pages/ClinicFinder';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { NotificationProvider } from './contexts/NotificationContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  const [showLanding, setShowLanding] = useState(false);

  useEffect(() => {
    const hasSeenLanding = localStorage.getItem('ayursutra-landing-seen');
    if (!hasSeenLanding) {
      setShowLanding(true);
      localStorage.setItem('ayursutra-landing-seen', 'true');
    }
  }, []);

  const handleLandingComplete = () => {
    setShowLanding(false);
  };

  if (showLanding) {
    return <LandingAnimation onComplete={handleLandingComplete} />;
  }

  return (
    <AuthProvider>
      <NotificationProvider>
        <Router>
          <div className="min-h-screen bg-gradient-to-br from-green-50 to-amber-50">
            <AppRoutes />
          </div>
        </Router>
      </NotificationProvider>
    </AuthProvider>
  );
}

function AppRoutes() {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={!user ? <LoginPage /> : <Navigate to={getDashboardPath(user.role)} />} />
          <Route path="/register" element={!user ? <RegisterPage /> : <Navigate to={getDashboardPath(user.role)} />} />
          <Route path="/panchakarma" element={<PanchakarmaCatalog />} />
          <Route path="/community" element={<CommunityForum />} />
          <Route path="/clinic-finder" element={<ClinicFinder />} />
          
          {/* Protected Routes */}
          <Route path="/patient-dashboard" element={
            user && user.role === 'patient' ? <PatientDashboard /> : <Navigate to="/login" />
          } />
          <Route path="/practitioner-dashboard" element={
            user && user.role === 'practitioner' ? <PractitionerDashboard /> : <Navigate to="/login" />
          } />
          <Route path="/admin-dashboard" element={
            user && user.role === 'admin' ? <AdminDashboard /> : <Navigate to="/login" />
          } />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

function getDashboardPath(role: string) {
  switch (role) {
    case 'patient': return '/patient-dashboard';
    case 'practitioner': return '/practitioner-dashboard';
    case 'admin': return '/admin-dashboard';
    default: return '/';
  }
}

export default App;