import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO at TechStart',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    quote: 'This platform has transformed how we operate. The features and support are unmatched.',
  },
  {
    name: 'Michael Chen',
    role: 'Founder at InnovateCo',
    image: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    quote: 'The best decision we made was choosing this platform for our startup journey.',
  },
  {
    name: 'Emily Rodriguez',
    role: 'CTO at FutureLabs',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    quote: 'Incredible tools and even better results. Our team productivity has skyrocketed.',
  },
];

export default function Feedback() {
  return (
    <div id="feedback" className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Trusted by innovative teams
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Don't just take our word for it - hear from some of our satisfied customers
          </p>
        </div>
        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="bg-white rounded-lg shadow-lg p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">{testimonial.quote}</p>
                <div className="flex items-center">
                  <img className="h-12 w-12 rounded-full" src={testimonial.image} alt={testimonial.name} />
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}