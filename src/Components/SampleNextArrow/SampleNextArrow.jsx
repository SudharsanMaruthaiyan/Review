import { ArrowRight } from 'lucide-react';
import React from 'react'

const SampleNextArrow = ({ onClick }) => {
    return (
      <button
        className="absolute -right-4 -top-10 -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10 border-dotted border-4 border-gray-300 hover:bg-[#2563EB] group transition-colors"
        onClick={onClick}
      >
        <ArrowRight className="w-6 h-6 text-blue-600 group-hover:stroke-white" />
      </button>
    );
}

export default SampleNextArrow