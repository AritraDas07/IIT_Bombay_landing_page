import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X, Download, Share2, Eye } from 'lucide-react';

interface GalleryItem {
  id: number;
  src: string;
  title: string;
  category: string;
  year: string;
  views: number;
}

const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<number>(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const categories = ['all', 'robotics', 'coding', 'exhibitions', 'lectures', 'workshops'];

  const galleryItems: GalleryItem[] = [
    { id: 1, src: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg', title: 'Robotics Competition', category: 'robotics', year: '2024', views: 1250 },
    { id: 2, src: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg', title: 'Coding Marathon', category: 'coding', year: '2024', views: 980 },
    { id: 3, src: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg', title: 'Tech Exhibition', category: 'exhibitions', year: '2024', views: 1560 },
    { id: 4, src: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg', title: 'AI Workshop', category: 'workshops', year: '2024', views: 875 },
    { id: 5, src: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg', title: 'Guest Lecture', category: 'lectures', year: '2024', views: 1120 },
    { id: 6, src: 'https://images.pexels.com/photos/2599909/pexels-photo-2599909.jpeg', title: 'Drone Racing', category: 'robotics', year: '2024', views: 1680 },
    { id: 7, src: 'https://images.pexels.com/photos/1181359/pexels-photo-1181359.jpeg', title: 'Hackathon Finals', category: 'coding', year: '2024', views: 2100 },
    { id: 8, src: 'https://images.pexels.com/photos/1181347/pexels-photo-1181347.jpeg', title: 'Innovation Showcase', category: 'exhibitions', year: '2024', views: 1890 },
    { id: 9, src: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg', title: 'VR Experience', category: 'workshops', year: '2024', views: 1340 },
    { id: 10, src: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg', title: 'Tech Talk Series', category: 'lectures', year: '2024', views: 967 },
    { id: 11, src: 'https://images.pexels.com/photos/2599492/pexels-photo-2599492.jpeg', title: 'Robot Assembly', category: 'robotics', year: '2023', views: 1456 },
    { id: 12, src: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg', title: 'Algorithm Contest', category: 'coding', year: '2023', views: 1234 }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % filteredItems.length);
  };

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxOpen) {
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') prevImage();
        if (e.key === 'ArrowRight') nextImage();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen]);

  return (
    <section id="gallery" className="py-20 bg-slate-800/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Gallery
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            Explore the highlights from past Techfest events, showcasing innovation, competition, and celebration of technology.
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                  : 'bg-slate-700 text-slate-300 hover:bg-slate-600 hover:text-white'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 cursor-pointer"
              onClick={() => openLightbox(index)}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-semibold text-lg mb-1">{item.title}</h3>
                  <div className="flex items-center justify-between text-sm text-slate-300">
                    <span className="capitalize">{item.category}</span>
                    <span>{item.year}</span>
                  </div>
                  <div className="flex items-center mt-2">
                    <Eye className="w-4 h-4 mr-1" />
                    <span className="text-xs">{item.views.toLocaleString()} views</span>
                  </div>
                </div>
              </div>

              {/* Category badge */}
              <div className="absolute top-3 left-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs px-3 py-1 rounded-full opacity-90">
                {item.category}
              </div>
            </div>
          ))}
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-8 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl border border-slate-600 backdrop-blur-sm">
            <div className="text-4xl font-bold text-white mb-2">10,000+</div>
            <div className="text-slate-400">Photos & Videos</div>
          </div>
          <div className="p-8 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl border border-slate-600 backdrop-blur-sm">
            <div className="text-4xl font-bold text-white mb-2">5M+</div>
            <div className="text-slate-400">Total Views</div>
          </div>
          <div className="p-8 bg-gradient-to-r from-pink-500/20 to-orange-500/20 rounded-xl border border-slate-600 backdrop-blur-sm">
            <div className="text-4xl font-bold text-white mb-2">27</div>
            <div className="text-slate-400">Years Documented</div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center">
          <div className="relative max-w-7xl max-h-full mx-auto p-4">
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 bg-slate-800/80 hover:bg-slate-700 text-white p-2 rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-slate-800/80 hover:bg-slate-700 text-white p-3 rounded-full transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-slate-800/80 hover:bg-slate-700 text-white p-3 rounded-full transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image */}
            <div className="text-center">
              <img
                src={filteredItems[selectedImage]?.src}
                alt={filteredItems[selectedImage]?.title}
                className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
              />
              
              {/* Image info */}
              <div className="mt-4 text-white">
                <h3 className="text-2xl font-bold mb-2">{filteredItems[selectedImage]?.title}</h3>
                <div className="flex items-center justify-center gap-6 text-slate-300">
                  <span className="capitalize">{filteredItems[selectedImage]?.category}</span>
                  <span>{filteredItems[selectedImage]?.year}</span>
                  <div className="flex items-center">
                    <Eye className="w-4 h-4 mr-1" />
                    <span>{filteredItems[selectedImage]?.views.toLocaleString()} views</span>
                  </div>
                </div>
                
                {/* Action buttons */}
                <div className="flex justify-center gap-4 mt-4">
                  <button className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors">
                    <Download className="w-4 h-4" />
                    Download
                  </button>
                  <button className="flex items-center gap-2 bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg transition-colors">
                    <Share2 className="w-4 h-4" />
                    Share
                  </button>
                </div>
              </div>
            </div>

            {/* Image counter */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-slate-800/80 text-white px-4 py-2 rounded-full">
              {selectedImage + 1} / {filteredItems.length}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;