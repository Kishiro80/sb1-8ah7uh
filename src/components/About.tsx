import React from 'react';
import { Users, Target, Heart } from 'lucide-react';

const values = [
  {
    name: 'Customer First',
    description: 'We put our customers at the heart of everything we do, ensuring their success is our success.',
    icon: Heart,
  },
  {
    name: 'Innovation',
    description: 'Constantly pushing boundaries to deliver cutting-edge solutions for modern businesses.',
    icon: Target,
  },
  {
    name: 'Team Excellence',
    description: 'Our diverse team of experts is passionate about helping startups succeed.',
    icon: Users,
  },
];

export default function About() {
  return (
    <div id="about" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">About Us</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Our mission is your success
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            We're a team of passionate individuals dedicated to helping startups transform their ideas into successful businesses.
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {values.map((value) => (
              <div key={value.name} className="text-center">
                <div className="flex justify-center">
                  <value.icon className="h-12 w-12 text-indigo-600" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-gray-900">{value.name}</h3>
                <p className="mt-4 text-base text-gray-500">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <img
            className="rounded-lg shadow-xl ring-1 ring-black ring-opacity-5"
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
            alt="Our team"
          />
        </div>
      </div>
    </div>
  );
}