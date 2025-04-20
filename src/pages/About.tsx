
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Heart } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Header Section */}
        <section className="bg-ecg-light py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-ecg-dark mb-4">About MyECGProject</h1>
            <p className="text-gray-700 max-w-3xl">
              Learn about our mission to make ECG interpretation accessible, engaging, and effective
              for medical students and healthcare professionals.
            </p>
          </div>
        </section>
        
        {/* Mission and Vision */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold text-ecg-dark mb-6">Our Mission</h2>
                <p className="text-gray-700 mb-4">
                  At MyECGProject, we believe that understanding electrocardiograms should be accessible 
                  to all medical and healthcare students. Our mission is to transform ECG education through 
                  interactive learning, visual explanations, and gamified practice.
                </p>
                <p className="text-gray-700 mb-4">
                  We've created a platform that bridges the gap between theoretical knowledge and practical 
                  interpretation skills, making it easier for students to master this essential diagnostic tool.
                </p>
                <p className="text-gray-700">
                  Through our carefully designed tutorials, animated videos, and randomized quizzes, we aim to 
                  build confidence and competence in ECG interpretation for the next generation of healthcare providers.
                </p>
              </div>
              
              <div className="md:w-1/2 flex justify-center">
                <div className="relative w-64 h-64 rounded-full bg-ecg-light flex items-center justify-center">
                  <Heart className="h-24 w-24 text-ecg-secondary animate-pulse" />
                  <div className="absolute w-full h-px bg-ecg-secondary top-1/2">
                    <div className="ecg-line w-full">
                      <div className="ecg-pulse"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Team Section */}
        <section className="py-12 bg-ecg-light">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-ecg-dark mb-8 text-center">Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-32 h-32 rounded-full bg-gray-200 mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold text-ecg-dark">Dr. Sarah Anderson</h3>
                <p className="text-ecg-primary mb-2">Cardiologist & Lead Educator</p>
                <p className="text-gray-600">
                  With 15 years of clinical experience, Dr. Anderson brings expert knowledge and teaching 
                  methodology to our ECG tutorials.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-32 h-32 rounded-full bg-gray-200 mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold text-ecg-dark">Michael Chen</h3>
                <p className="text-ecg-primary mb-2">Lead Developer</p>
                <p className="text-gray-600">
                  Michael specializes in creating interactive medical education platforms with a focus on 
                  user experience and visual learning.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-32 h-32 rounded-full bg-gray-200 mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold text-ecg-dark">Emma Roberts</h3>
                <p className="text-ecg-primary mb-2">Medical Education Specialist</p>
                <p className="text-gray-600">
                  Emma's background in curriculum development helps ensure our content is pedagogically 
                  sound and optimized for learning.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Testimonials */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-ecg-dark mb-8 text-center">What Our Users Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-ecg-light p-6 rounded-lg">
                <p className="text-gray-700 italic mb-4">
                  "MyECGProject transformed how I understand ECGs. The interactive tutorials and practice 
                  quizzes helped me go from confused to confident in just a few weeks of consistent use."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gray-300 mr-4"></div>
                  <div>
                    <h4 className="font-semibold text-ecg-dark">James Wilson</h4>
                    <p className="text-sm text-gray-600">Medical Student, Year 3</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-ecg-light p-6 rounded-lg">
                <p className="text-gray-700 italic mb-4">
                  "As a nursing instructor, I've recommended MyECGProject to all my students. The visual 
                  approach and progression from basics to complex cases is exactly what we needed."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gray-300 mr-4"></div>
                  <div>
                    <h4 className="font-semibold text-ecg-dark">Patricia Nguyen</h4>
                    <p className="text-sm text-gray-600">Nursing Educator</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Contact Section */}
        <section className="py-12 bg-ecg-light">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-ecg-dark mb-4">Get In Touch</h2>
            <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
              Have questions or feedback about MyECGProject? We'd love to hear from you. 
              Contact our team for support, partnership inquiries, or content suggestions.
            </p>
            <button className="bg-ecg-primary text-white px-6 py-3 rounded-md hover:bg-ecg-dark transition-colors">
              Contact Us
            </button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
