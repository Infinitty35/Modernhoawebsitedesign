import { Link } from 'react-router';
import { Building2, FileText, FolderOpen, Mail, Home as HomeIcon } from 'lucide-react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import entranceImage1 from 'figma:asset/376f32aeec7b5c0cf62d74fc0d6bc0f8edf607b3.png';
import entranceImage2 from 'figma:asset/0f2b25ff6d89d16812bdeaebd7152e4da888fd7f.png';

export function Home() {
  const quickLinks = [
    {
      title: 'Management',
      description: 'Contact property management team',
      icon: Building2,
      link: '/management',
      color: 'from-blue-500 to-blue-600',
    },
    {
      title: 'Covenants',
      description: 'Review HOA rules and regulations',
      icon: FileText,
      link: '/covenants',
      color: 'from-emerald-500 to-emerald-600',
    },
    {
      title: 'Resources',
      description: 'Access city services and helpful links',
      icon: FolderOpen,
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
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.6)), url(${entranceImage1})`
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <div className="max-w-2xl">
              <h1 className="text-5xl md:text-6xl font-light text-slate-800 mb-6 tracking-wide">
                A Beautiful Place to Live
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

      {/* Welcome Section */}
      <section className="bg-white border-y border-slate-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-800 mb-12 text-center">Welcome to Our Community</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-slate-600 mb-4">
                Union Station South is a vibrant homeowners association located in Broken Arrow, Oklahoma. 
                Our community is known for its well-maintained properties, friendly neighbors, and commitment 
                to maintaining a high quality of life for all residents.
              </p>
              <p className="text-slate-600">
                Whether you're a new resident or have been part of our community for years, we're here to 
                support you. Our property management team and HOA board work together to ensure our 
                neighborhood remains a beautiful place to call home.
              </p>
            </div>
            <div>
              <img 
                src={entranceImage2} 
                alt="Union Station South Entrance" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
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
    </div>
  );
}