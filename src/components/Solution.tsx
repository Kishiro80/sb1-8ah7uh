import React from 'react';
import { CheckCircle } from 'lucide-react';

export default function Solution() {
  return (
    <div id="solution" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              The complete solution for your business
            </h2>
            <p className="mt-3 max-w-3xl text-lg text-gray-500">
              We've built a comprehensive platform that addresses all your business needs. From ideation to execution, we're here to support your journey.
            </p>
            <div className="mt-10 space-y-4">
              {[
                'Integrated development tools',
                'Advanced analytics dashboard',
                'Automated workflow processes',
                'Real-time collaboration features',
                'Comprehensive documentation',
              ].map((feature) => (
                <div key={feature} className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="ml-3 text-base text-gray-500">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-10 lg:mt-0">
            <img
              className="rounded-xl shadow-xl ring-1 ring-black ring-opacity-5"
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2852&q=80"
              alt="Dashboard screenshot"
            />
          </div>
        </div>
      </div>
    </div>
  );
}