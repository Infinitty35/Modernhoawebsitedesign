import { Link } from 'react-router';
import { Building2, FileText, ExternalLink, Mail, Home as HomeIcon } from 'lucide-react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';

export function Home() {
  const quickLinks = [
    {
      title: 'Property Management',
      description: 'Contact Robson Property Management for assistance',
      icon: Building2,
      link: '/management',
      color: 'from-blue-500 to-blue-600',
    },
    {
      title: 'HOA Covenants',
      description: 'Download and review our community covenants',
      icon: FileText,
      link: '/covenants',
      color: 'from-emerald-500 to-emerald-600',
    },
    {
      title: 'Resources',
      description: 'Access city services and helpful links',
      icon: ExternalLink,
      link: '/resources',
      color: 'from-purple-500 to-purple-600',
    },
    {
      title: 'Contact Us',
      description: 'Get in touch with our community team',
      icon: Mail,
      link: '/contact',
      color: 'from-orange-500 to-orange-600',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-slate-600/10" />
        <div 
          className="relative h-[500px] bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.85)), url(https://images.unsplash.com/photo-1768774422251-935952ce7ed4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzdWJ1cmJhbiUyMGhvbWVzJTIwbmVpZ2hib3Job29kfGVufDF8fHx8MTc3MDA1NTg3N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral)`
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <div className="max-w-2xl">
              <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-6">
                <HomeIcon className="w-4 h-4" />
                <span className="text-sm font-medium">Welcome to Union Station South</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-6">
                Beautiful Place to Live
              </h1>
              <p className="text-xl text-slate-600 mb-8">
                Union Station South is recognized for its attractive homes and serene environment
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/management">
                  <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white shadow-lg">
                    Contact Management
                  </Button>
                </Link>
                <Link to="/resources">
                  <Button size="lg" variant="outline" className="border-slate-300 hover:bg-slate-100">
                    View Resources
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">Quick Access</h2>
          <p className="text-slate-600">Everything you need to know about our community</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickLinks.map((item) => {
            const Icon = item.icon;
            return (
              <Link key={item.title} to={item.link}>
                <Card className="p-6 hover:shadow-xl transition-all duration-300 border-slate-200 bg-white h-full group cursor-pointer">
                  <div className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600">{item.description}</p>
                </Card>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Welcome Section */}
      <section className="bg-white border-y border-slate-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-6">Welcome to Our Community</h2>
              <p className="text-slate-600 mb-4">
                Union Station South is a vibrant homeowners association located in Broken Arrow, Oklahoma. 
                Our community is known for its well-maintained properties, friendly neighbors, and commitment 
                to maintaining a high quality of life for all residents.
              </p>
              <p className="text-slate-600 mb-6">
                Whether you're a new resident or have been part of our community for years, we're here to 
                support you. Our property management team and HOA board work together to ensure our 
                neighborhood remains a beautiful place to call home.
              </p>
              <Link to="/contact">
                <Button className="bg-blue-500 hover:bg-blue-600 text-white">
                  Get in Touch
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-6 text-center bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
                <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
                <div className="text-sm text-slate-600">Management Support</div>
              </Card>
              <Card className="p-6 text-center bg-gradient-to-br from-emerald-50 to-emerald-100 border-emerald-200">
                <div className="text-3xl font-bold text-emerald-600 mb-2">100%</div>
                <div className="text-sm text-slate-600">Committed to Quality</div>
              </Card>
              <Card className="p-6 text-center bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
                <div className="text-3xl font-bold text-purple-600 mb-2">Expert</div>
                <div className="text-sm text-slate-600">Property Management</div>
              </Card>
              <Card className="p-6 text-center bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200">
                <div className="text-3xl font-bold text-orange-600 mb-2">Local</div>
                <div className="text-sm text-slate-600">Broken Arrow Community</div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
