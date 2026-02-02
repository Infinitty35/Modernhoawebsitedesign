import { Outlet, Link, useLocation } from 'react-router';
import { Home, Building2, FileText, ExternalLink, Mail } from 'lucide-react';

export function Layout() {
  const location = useLocation();
  
  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/management', label: 'Management', icon: Building2 },
    { path: '/covenants', label: 'Covenants', icon: FileText },
    { path: '/resources', label: 'Resources', icon: ExternalLink },
    { path: '/contact', label: 'Contact', icon: Mail },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center shadow-md">
                <Home className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-semibold text-slate-800">Union Station South</h1>
                <p className="text-xs text-slate-500">Homeowners Association</p>
              </div>
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                      isActive
                        ? 'bg-blue-500 text-white shadow-md'
                        : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="text-sm font-medium">{item.label}</span>
                  </Link>
                );
              })}
            </nav>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          
          {/* Mobile Navigation */}
          <nav className="md:hidden pb-4 flex flex-wrap gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200 text-sm ${
                    isActive
                      ? 'bg-blue-500 text-white shadow-md'
                      : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900 bg-white'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="font-medium">{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold text-slate-800 mb-3">Union Station South</h3>
              <p className="text-sm text-slate-600">
                A beautiful community in Broken Arrow, Oklahoma, recognized for its attractive homes and serene environment.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 mb-3">Quick Links</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li><Link to="/management" className="hover:text-blue-500 transition-colors">Property Management</Link></li>
                <li><Link to="/covenants" className="hover:text-blue-500 transition-colors">HOA Covenants</Link></li>
                <li><Link to="/resources" className="hover:text-blue-500 transition-colors">Outside Resources</Link></li>
                <li><Link to="/contact" className="hover:text-blue-500 transition-colors">Contact Us</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 mb-3">Contact</h3>
              <p className="text-sm text-slate-600">
                Robson Property Management<br />
                901 N Forest Ridge Blvd<br />
                Broken Arrow, OK 74014<br />
                <a href="tel:918-994-6562" className="hover:text-blue-500 transition-colors">918-994-6562</a>
              </p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-slate-200 text-center text-sm text-slate-500">
            <p>&copy; {new Date().getFullYear()} Union Station South HOA. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
