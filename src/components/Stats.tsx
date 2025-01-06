import React from 'react';
import { Users, School, Heart, Home } from 'lucide-react';

const Stats = () => {
  return (
    <div className=" py-16">
      <h2 className='text-3xl font-bold text-center mb-12'>Our Achievements</h2>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center ">
          <div className="flex flex-col items-center border-2 border-blue-400 rounded-lg p-9 bg-gray-500 ">
            <Users className="h-12 w-12 text-yellow-400 mb-4" />
            <span className="text-4xl font-bold text-white">1000+</span>
            <span className="text-blue-100">Lives Impacted</span>
          </div>
          <div className="flex flex-col items-center border-2 border-blue-400 rounded-lg p-9 bg-gray-500 ">
            <School className="h-12 w-12 text-yellow-400 mb-4" />
            <span className="text-4xl font-bold text-white">10+</span>
            <span className="text-blue-100">Schools programs</span>
          </div>
          <div className="flex flex-col items-center border-2 border-blue-400 rounded-lg p-9 bg-gray-500 ">
            <Heart className="h-12 w-12 text-yellow-400 mb-4" />
            <span className="text-4xl font-bold text-white">100+</span>
            <span className="text-blue-100">Healthcare Projects</span>
          </div>
          <div className="flex flex-col items-center border-2 border-blue-400 rounded-lg p-9 bg-gray-500 ">
            <Home className="h-12 w-12 text-yellow-400 mb-4" />
            <span className="text-4xl font-bold text-white">20</span>
            <span className="text-blue-100">Communities Served</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;