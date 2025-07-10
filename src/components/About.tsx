import React from 'react';
import { Star, Target, Award, Globe } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            About Techfest
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Techfest is the annual science and technology festival of IIT Bombay, 
            recognized as Asia's largest science and technology festival.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-slate-300 leading-relaxed">
                Since its inception in 1998, Techfest has been at the forefront of promoting 
                science and technology education in India. With over 200,000 participants 
                from across the globe, it serves as a platform for innovation, learning, 
                and technological advancement.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                The festival features competitions, exhibitions, lectures, and workshops 
                covering diverse fields from robotics and artificial intelligence to 
                biotechnology and aerospace engineering.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 bg-slate-700/50 rounded-xl border border-slate-600 hover:border-blue-500 transition-all duration-300">
                <Target className="w-8 h-8 text-blue-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Our Mission</h3>
                <p className="text-slate-400">
                  To inspire and educate the next generation of scientists and engineers.
                </p>
              </div>
              <div className="p-6 bg-slate-700/50 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300">
                <Award className="w-8 h-8 text-purple-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Our Vision</h3>
                <p className="text-slate-400">
                  To be the global leader in science and technology education festivals.
                </p>
              </div>
            </div>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-2 gap-6">
            <div className="p-8 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl border border-slate-600 backdrop-blur-sm">
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">27</div>
                <div className="text-slate-400">Years of Excellence</div>
              </div>
            </div>
            <div className="p-8 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl border border-slate-600 backdrop-blur-sm">
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">1000+</div>
                <div className="text-slate-400">Colleges Participating</div>
              </div>
            </div>
            <div className="p-8 bg-gradient-to-br from-pink-500/20 to-orange-500/20 rounded-xl border border-slate-600 backdrop-blur-sm">
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">50+</div>
                <div className="text-slate-400">Countries Represented</div>
              </div>
            </div>
            <div className="p-8 bg-gradient-to-br from-orange-500/20 to-blue-500/20 rounded-xl border border-slate-600 backdrop-blur-sm">
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">₹2Cr+</div>
                <div className="text-slate-400">Total Prize Money</div>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center mb-12 text-white">Our Journey</h3>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-500 to-purple-500"></div>
            
            <div className="space-y-12">
              {[
                { year: '1998', title: 'Foundation', desc: 'Techfest was established as IIT Bombay\'s annual tech festival' },
                { year: '2005', title: 'National Recognition', desc: 'Became the largest tech festival in India' },
                { year: '2010', title: 'International Expansion', desc: 'First international participants and global recognition' },
                { year: '2015', title: 'Digital Revolution', desc: 'Embraced digital platforms and virtual participation' },
                { year: '2025', title: 'Future Forward', desc: 'Leading the way in emerging technologies and innovation' }
              ].map((item, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className="flex-1 md:text-right md:pr-8">
                    <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-600 hover:border-blue-500 transition-all duration-300">
                      <div className="text-2xl font-bold text-blue-400 mb-2">{item.year}</div>
                      <h4 className="text-xl font-semibold text-white mb-2">{item.title}</h4>
                      <p className="text-slate-400">{item.desc}</p>
                    </div>
                  </div>
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-slate-900 flex-shrink-0 mx-4"></div>
                  <div className="flex-1 md:pl-8"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;