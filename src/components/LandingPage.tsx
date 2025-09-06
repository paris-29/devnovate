import React from 'react';
import { ArrowRight, Sparkles, Zap, Users, Trophy, Rocket, Shield } from 'lucide-react';

interface LandingPageProps {
  frameImage: string;
}

const LandingPage: React.FC<LandingPageProps> = ({ frameImage }) => {
  const productShowcases = [
    {
      title: "DevCraft Pro",
      description: "Build stunning applications with AI-powered development tools",
      color: "from-purple-400 to-purple-600",
      delay: "0s"
    },
    {
      title: "LaunchPad",
      description: "From idea to MVP in record time with guided frameworks",
      color: "from-indigo-400 to-indigo-600",
      delay: "0.2s"
    },
    {
      title: "ScaleForge",
      description: "Enterprise-grade solutions that grow with your business",
      color: "from-violet-400 to-violet-600",
      delay: "0.4s"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white overflow-hidden">
      {/* Header */}
      <header className="relative z-50">
        <nav className="bg-gray-900 rounded-full mx-6 mt-6 px-8 py-4 shadow-2xl slide-in-up">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Sparkles className="h-8 w-8 text-purple-400" />
              <span className="text-white font-bold text-xl">Devnovate</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Services</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Process</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Portfolio</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Pricing</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Case Studies</a>
            </div>
            
            <button className="bg-white text-purple-600 px-6 py-3 rounded-full font-semibold button-hover flex items-center space-x-2">
              <span>Free Consultation</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="relative">
        <div className="container mx-auto px-6 pt-20 pb-16">
          <div className="text-center fade-in-up">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="text-gray-900">Idea to Launch in </span>
              <span className="text-gradient">30 days</span>
              <span className="text-gray-900">,</span>
              <br />
              <span className="text-gradient">Alongside expert developers.</span>
            </h1>
            
            <div className="mb-8 slide-in-up" style={{ animationDelay: '0.3s' }}>
              <p className="text-xl text-gray-600 mb-2">
                <span className="font-bold text-purple-600">80% Faster</span> & <span className="font-bold text-purple-600">60% More Efficient</span>
              </p>
              <p className="text-purple-500 font-medium">Limited spots available for Q1 2025.</p>
            </div>
            
            <button className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold button-hover pulse-animation flex items-center space-x-2 mx-auto">
              <Rocket className="h-5 w-5" />
              <span>Start Your Project</span>
            </button>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-1/4 left-10 floating-1">
          <div className="bg-white p-4 rounded-2xl shadow-lg">
            <Users className="h-8 w-8 text-purple-500" />
          </div>
        </div>
        
        <div className="absolute top-1/3 right-10 floating-2">
          <div className="bg-gradient-to-r from-purple-400 to-purple-600 p-4 rounded-2xl shadow-lg">
            <Zap className="h-8 w-8 text-white" />
          </div>
        </div>

        {/* Hanging Product Showcases */}
        <div className="container mx-auto px-6 hanging-cards-container">
          <div className="hanging-rope">
            <div className="rope-segment rope-segment-1"></div>
            <div className="rope-segment rope-segment-2"></div>
            <div className="rope-segment rope-segment-3"></div>
          </div>
          <div className="hanging-cards-grid">
            {productShowcases.map((product, index) => (
              <div 
                key={index}
                className="hanging-card p-6 slide-in-up"
                style={{ animationDelay: product.delay }}
              >
                <div className="hanging-pin"></div>
                <div className="hanging-clip"></div>
                <div className={`w-full h-48 bg-gradient-to-br ${product.color} rounded-2xl mb-4 relative overflow-hidden`}>
                  <img 
                    src={frameImage} 
                    alt="Product preview"
                    className="w-full h-full object-cover opacity-20"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white text-center">
                      <Trophy className="h-12 w-12 mx-auto mb-2" />
                      <p className="font-bold">{product.title}</p>
                    </div>
                  </div>
                </div>
                <h3 className="font-bold text-lg text-gray-800 mb-2">{product.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{product.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Features Section */}
        <div className="container mx-auto px-6 mt-32 mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 fade-in-up">
              Why Choose <span className="text-gradient">Devnovate</span>?
            </h2>
            <p className="text-xl text-gray-600 fade-in-up" style={{ animationDelay: '0.2s' }}>
              We deliver exceptional results through innovative technology and expert craftsmanship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Rocket className="h-12 w-12 text-purple-500" />,
                title: "Lightning Fast Delivery",
                description: "From concept to deployment in 30 days or less"
              },
              {
                icon: <Shield className="h-12 w-12 text-purple-500" />,
                title: "Enterprise Security",
                description: "Bank-grade security built into every solution"
              },
              {
                icon: <Users className="h-12 w-12 text-purple-500" />,
                title: "Expert Team",
                description: "Work directly with senior developers and architects"
              }
            ].map((feature, index) => (
              <div key={index} className="text-center fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="bg-purple-50 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="gradient-bg py-20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-white mb-6 fade-in-up">
              Ready to Transform Your Idea?
            </h2>
            <p className="text-purple-100 text-xl mb-8 fade-in-up" style={{ animationDelay: '0.2s' }}>
              Join hundreds of successful startups who chose Devnovate
            </p>
            <button className="bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-semibold button-hover fade-in-up flex items-center space-x-2 mx-auto" style={{ animationDelay: '0.4s' }}>
              <span>Get Started Today</span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;