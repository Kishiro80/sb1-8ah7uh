import React from 'react';
import { Zap, Shield, Rocket, Target } from 'lucide-react';

const features = [
  {
    name: 'Lightning Fast',
    description: 'Get your project up and running in minutes with our streamlined setup process.',
    icon: Zap,
  },
  {
    name: 'Secure by Default',
    description: 'Enterprise-grade security measures to protect your data and your customers.',
    icon: Shield,
  },
  {
    name: 'Scalable Solution',
    description: 'Grow your business without worrying about infrastructure limitations.',
    icon: Rocket,
  },
  {
    name: 'Goal Oriented',
    description: 'Track your progress and achieve your business objectives effectively.',
    icon: Target,
  },
];

export default function Features() {
  return (
    <div id="features" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to succeed
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Our platform provides all the essential tools and features to help your startup thrive in today's competitive market.
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <div className="absolute h-12 w-12 rounded-md bg-indigo-500 flex items-center justify-center">
                  <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <div className="ml-16">
                  <h3 className="text-lg font-medium text-gray-900">{feature.name}</h3>
                  <p className="mt-2 text-base text-gray-500">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}