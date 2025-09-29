import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Calendar, Heart, Star, MapPin, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

const HomePage: React.FC = () => {
  const therapies = [
    {
      name: 'Vamana',
      description: 'Therapeutic vomiting for Kapha disorders',
      image: 'https://images.pexels.com/photos/6111616/pexels-photo-6111616.jpeg?auto=compress&cs=tinysrgb&w=400',
      benefits: ['Respiratory disorders', 'Skin conditions', 'Digestive issues']
    },
    {
      name: 'Virechana',
      description: 'Purgation therapy for Pitta disorders',
      image: 'https://images.pexels.com/photos/6663228/pexels-photo-6663228.jpeg?auto=compress&cs=tinysrgb&w=400',
      benefits: ['Liver disorders', 'Skin diseases', 'Chronic fever']
    },
    {
      name: 'Basti',
      description: 'Medicated enemas for Vata disorders',
      image: 'https://images.pexels.com/photos/3985163/pexels-photo-3985163.jpeg?auto=compress&cs=tinysrgb&w=400',
      benefits: ['Joint pain', 'Paralysis', 'Nervous disorders']
    },
    {
      name: 'Nasya',
      description: 'Nasal administration of medicines',
      image: 'https://images.pexels.com/photos/6663301/pexels-photo-6663301.jpeg?auto=compress&cs=tinysrgb&w=400',
      benefits: ['Sinusitis', 'Headaches', 'Mental disorders']
    },
    {
      name: 'Raktamokshana',
      description: 'Bloodletting for blood-related disorders',
      image: 'https://images.pexels.com/photos/6663374/pexels-photo-6663374.jpeg?auto=compress&cs=tinysrgb&w=400',
      benefits: ['Skin disorders', 'Hypertension', 'Blood impurities']
    }
  ];

  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Patient',
      content: 'AyurSutra transformed my Panchakarma journey. The digital tracking and reminders helped me stay consistent with my treatments.',
      rating: 5
    },
    {
      name: 'Dr. Rajesh Kumar',
      role: 'Ayurvedic Practitioner',
      content: 'Managing multiple patients has become effortless. The platform provides excellent insights into patient progress.',
      rating: 5
    },
    {
      name: 'Clinic Director',
      role: 'Wellness Center',
      content: 'Our clinic efficiency improved significantly. The scheduling system and patient management features are outstanding.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 via-green-700 to-green-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Ancient Wisdom,
                <span className="block text-green-200">Modern Care</span>
              </h1>
              <p className="text-xl text-green-100 mb-8 leading-relaxed">
                Experience the power of Panchakarma therapy management with AyurSutra. 
                Connect with certified practitioners, track your wellness journey, and 
                discover the healing potential of Ayurveda.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/register"
                  className="inline-flex items-center px-8 py-3 bg-white text-green-700 rounded-lg font-semibold hover:bg-green-50 transition-colors group"
                >
                  Start Your Journey
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/clinic-finder"
                  className="inline-flex items-center px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-green-700 transition-colors group"
                >
                  <MapPin className="mr-2 h-5 w-5" />
                  Find Clinics
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/6111616/pexels-photo-6111616.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Ayurvedic therapy"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center space-x-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <Heart className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">5000+ Patients</p>
                    <p className="text-gray-600 text-sm">Successfully Treated</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Panchakarma Management
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform brings together patients, practitioners, and clinics in a 
              seamless ecosystem designed for optimal Ayurvedic care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-green-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow"
            >
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">For Patients</h3>
              <ul className="text-gray-600 space-y-2">
                <li>Easy therapy booking & scheduling</li>
                <li>Progress tracking with visualizations</li>
                <li>Personalized wellness recommendations</li>
                <li>Community support & knowledge sharing</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-amber-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow"
            >
              <div className="bg-amber-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Calendar className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">For Practitioners</h3>
              <ul className="text-gray-600 space-y-2">
                <li>Patient management dashboard</li>
                <li>Digital prescription system</li>
                <li>Progress monitoring tools</li>
                <li>Automated appointment scheduling</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-blue-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow"
            >
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">For Clinics</h3>
              <ul className="text-gray-600 space-y-2">
                <li>Multi-practitioner management</li>
                <li>Centralized patient records</li>
                <li>Analytics & reporting tools</li>
                <li>Google Maps integration</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Panchakarma Therapies */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Five Sacred Panchakarma Therapies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the transformative power of authentic Panchakarma treatments, 
              each designed to purify and rejuvenate your body, mind, and spirit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {therapies.map((therapy, index) => (
              <motion.div
                key={therapy.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <img
                  src={therapy.image}
                  alt={therapy.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{therapy.name}</h3>
                  <p className="text-gray-600 mb-4">{therapy.description}</p>
                  <div className="space-y-1">
                    <p className="font-semibold text-green-600 text-sm">Benefits:</p>
                    {therapy.benefits.map((benefit, i) => (
                      <p key={i} className="text-sm text-gray-500">• {benefit}</p>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/panchakarma"
              className="inline-flex items-center px-8 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors group"
            >
              <BookOpen className="mr-2 h-5 w-5" />
              Explore All Therapies
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Trusted by Healthcare Community
            </h2>
            <p className="text-xl text-gray-600">
              See what our users say about their AyurSutra experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-6"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Begin Your Wellness Journey?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Join thousands of individuals who have transformed their health through 
            AyurSutra's comprehensive Panchakarma management platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/register"
              className="inline-flex items-center px-8 py-3 bg-white text-green-700 rounded-lg font-semibold hover:bg-green-50 transition-colors group"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/community"
              className="inline-flex items-center px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-green-700 transition-colors"
            >
              Join Community
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;