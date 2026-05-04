import React, { useState } from 'react';
import { X } from 'lucide-react';
import galleryData from '../data/gallery.json';

export default function Gallery() {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <section id="gallery" className="bg-[#050505] text-white py-20 relative">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-orange-600/10 rounded-full mix-blend-screen filter blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent">
            Gallery
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Moments from our community events and workshops
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryData.gallery.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedId(item.id)}
              className="group relative h-64 rounded-2xl overflow-hidden cursor-pointer bg-gray-900 border border-white/10 hover:border-blue-500/50 transition-all hover:shadow-lg hover:shadow-blue-500/20"
            >
              {/* Placeholder with gradient */}
              <div className={`w-full h-full ${item.placeholder} flex items-center justify-center relative overflow-hidden`}>
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="text-lg font-bold">{item.title}</h3>
                    <p className="text-sm text-gray-300 mt-1">{item.category}</p>
                  </div>
                </div>

                {/* Default Display */}
                <div className="text-center z-0">
                  <div className="text-4xl mb-2">📸</div>
                  <p className="text-sm text-white/50">{item.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedId && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedId(null)}
        >
          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button
              onClick={() => setSelectedId(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Image Container */}
            <div className="rounded-2xl overflow-hidden">
              {(() => {
                const item = galleryData.gallery.find(g => g.id === selectedId);
                return (
                  <div className={`w-full h-96 ${item.placeholder} flex items-center justify-center`}>
                    <div className="text-center">
                      <div className="text-6xl mb-4">📸</div>
                      <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                      <p className="text-gray-200 mt-2">{item.category}</p>
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
