import React from 'react';
import { Code, Cpu, Zap, Globe, Smartphone, Gamepad2, Trophy, Users, Calendar, ArrowRight } from 'lucide-react';

const Events: React.FC = () => {
  const eventCategories = [
    {
      icon: Code,
      title: 'Programming',
      description: 'Coding competitions and hackathons',
      events: ['Code.Fun.Do', 'Debugging', 'Algorithm Design', 'Web Development'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Cpu,
      title: 'Robotics',
      description: 'Robot building and automation challenges',
      events: ['Robowars', 'Line Following', 'Drone Racing', 'Autonomous Robots'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Zap,
      title: 'Electronics',
      description: 'Circuit design and hardware innovation',
      events: ['Circuit Masters', 'IoT Challenge', 'Embedded Systems', 'PCB Design'],
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Globe,
      title: 'AI & ML',
      description: 'Artificial intelligence and machine learning',
      events: ['Data Science', 'Neural Networks', 'Computer Vision', 'NLP Challenge'],
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: Smartphone,
      title: 'Mobile Dev',
      description: 'App development and mobile innovation',
      events: ['Android Challenge', 'iOS Development', 'Cross-platform', 'UI/UX Design'],
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Gamepad2,
      title: 'Gaming',
      description: 'Game development and esports',
      events: ['Game Development', 'Unity Challenge', 'Esports Tournament', 'AR/VR Games'],
      color: 'from-pink-500 to-rose-500'
    }
  ];

  return (
    <section id="events" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Events & Competitions
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Participate in over 100 exciting events across multiple domains and compete with the best minds from around the world.
          </p>
        </div>

        {/* Event Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {eventCategories.map((category, index) => (
            <div
              key={index}
              className="group p-8 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-transparent hover:bg-slate-800/80 transition-all duration-300 hover:scale-105"
            >
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <category.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4">{category.title}</h3>
              <p className="text-slate-400 mb-6">{category.description}</p>
              
              <div className="space-y-2">
                {category.events.map((event, eventIndex) => (
                  <div key={eventIndex} className="flex items-center text-sm text-slate-300 hover:text-white transition-colors">
                    <ArrowRight className="w-4 h-4 mr-2 opacity-50" />
                    {event}
                  </div>
                ))}
              </div>
              
              <button className="mt-6 w-full bg-gradient-to-r from-slate-700 to-slate-600 text-white py-3 rounded-lg font-semibold hover:from-slate-600 hover:to-slate-500 transition-all duration-300">
                View Events
              </button>
            </div>
          ))}
        </div>

        {/* Event Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-8 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl border border-slate-600 backdrop-blur-sm">
            <Trophy className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
            <div className="text-4xl font-bold text-white mb-2">₹50L+</div>
            <div className="text-slate-400">Total Prize Money</div>
          </div>
          <div className="text-center p-8 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl border border-slate-600 backdrop-blur-sm">
            <Users className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <div className="text-4xl font-bold text-white mb-2">100+</div>
            <div className="text-slate-400">Events</div>
          </div>
          <div className="text-center p-8 bg-gradient-to-r from-pink-500/20 to-orange-500/20 rounded-xl border border-slate-600 backdrop-blur-sm">
            <Calendar className="w-12 h-12 text-purple-400 mx-auto mb-4" />
            <div className="text-4xl font-bold text-white mb-2">4</div>
            <div className="text-slate-400">Days of Competition</div>
          </div>
        </div>

        {/* Registration CTA */}
        <div className="text-center p-12 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl border border-slate-600 backdrop-blur-sm">
          <h3 className="text-3xl font-bold text-white mb-4">Ready to Compete?</h3>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Join thousands of participants from around the world and showcase your skills in cutting-edge technology competitions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105">
              Register Now
            </button>
            <button className="border-2 border-slate-500 text-slate-300 px-8 py-4 rounded-lg font-semibold hover:border-blue-500 hover:text-blue-400 transition-all duration-300 hover:bg-slate-800">
              View Schedule
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;