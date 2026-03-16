import { Outlet, Link, useLocation } from 'react-router';
import { Toaster } from './ui/sonner';
import logo from 'figma:asset/fda62cdf1d6e93801191e9dde364ae8c2a8bd3b0.png';

export function Layout() {
  const location = useLocation();
  
  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/management', label: 'Management' },
    { path: '/covenants', label: 'Covenants' },
    { path: '/resources', label: 'Resources' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="flex items-center space-x-3">
              <img 
                src={logo} 
                alt="Union Station South Logo" 
                className="w-12 h-12 object-contain"
              />
              <div>
                <h1 className="text-xl font-semibold text-slate-800">Union Station South</h1>
                <p className="text-xs text-slate-500">Homeowners Association</p>
              </div>
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-1">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                      isActive
                        ? 'bg-blue-500 text-white shadow-md'
                        : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                    }`}
                  >
                    <span className="text-sm font-medium">{item.label}</span>
                  </Link>
                );
              })}
            </nav>
          </div>
          
          {/* Mobile Navigation */}
          <nav className="md:hidden pb-4 flex flex-wrap gap-2">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-3 py-2 rounded-lg transition-all duration-200 text-sm ${
                    isActive
                      ? 'bg-blue-500 text-white shadow-md'
                      : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900 bg-white'
                  }`}
                >
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

      <Toaster />

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