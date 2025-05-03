import React from 'react';

const Hero: React.FC = () => (
  <section className="relative rounded-xl overflow-hidden mb-6 h-64">
    <div className="absolute inset-0 hero-gradient z-10" />
    <img
      src=""
      alt="Featured Content"
      className="w-full h-full object-cover"
    />
    <div className="absolute bottom-0 left-0 right-0 z-20 p-4">
      <h1 className="text-2xl font-bold mb-2">Daredevil: Born Again</h1>
      <p className="text-sm text-gray-300 mb-4">
        Matt Murdock finds himself on a collision course with Wilson Fisk when their past identities begin to emerge.
      </p>
      <div className="flex space-x-3">
        <button className="bg-white text-black px-4 py-1 rounded-full text-sm font-semibold flex items-center hover:bg-gray-200 transition">
          <span className="fas fa-play mr-2" /> Now Streaming
        </button>
        <button className="glass-card px-4 py-1 rounded-full text-sm font-semibold flex items-center hover:bg-gray-800 transition">
          <span className="fas fa-info-circle mr-2" /> Details
        </button>
      </div>
    </div>
  </section>
);

export default Hero;