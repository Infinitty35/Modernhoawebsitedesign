import { ExternalLink, MapPin, Shield, Smartphone, FolderOpen, Facebook } from 'lucide-react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';

export function Resources() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-slate-800 mb-4">Outside Resources</h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Quick access to important city services and local resources
        </p>
      </div>

      {/* Resources Grid */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 mb-12">
        {/* Code Violation Section */}
        <Card className="p-8 bg-gradient-to-br from-emerald-50 to-blue-50 border-emerald-200 shadow-xl">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-2xl mb-4 shadow-md">
              <Smartphone className="w-8 h-8 text-emerald-600" />
            </div>
            <h2 className="text-2xl font-bold text-slate-800 mb-3">Code Violation Reporting</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Report code violations directly to the City of Broken Arrow using the Broken Arrow mobile app
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="https://apps.apple.com/us/app/my-broken-arrow-action-center/id1640359308"
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-1 max-w-xs mx-auto sm:mx-0"
            >
              <Button 
                variant="outline" 
                className="w-full h-14 border-slate-300 hover:bg-white hover:shadow-md transition-all"
              >
                <div className="flex items-center justify-center">
                  <svg className="w-6 h-6 mr-3" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-xs text-slate-500">Download on the</div>
                    <div className="text-sm font-semibold">App Store</div>
                  </div>
                </div>
              </Button>
            </a>

            <a 
              href="https://play.google.com/store/apps/details?id=com.civicapps.brokenarrowok&pcampaignid=web_share"
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-1 max-w-xs mx-auto sm:mx-0"
            >
              <Button 
                variant="outline" 
                className="w-full h-14 border-slate-300 hover:bg-white hover:shadow-md transition-all"
              >
                <div className="flex items-center justify-center">
                  <svg className="w-6 h-6 mr-3" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-xs text-slate-500">GET IT ON</div>
                    <div className="text-sm font-semibold">Google Play</div>
                  </div>
                </div>
              </Button>
            </a>
          </div>
        </Card>

        {/* Facebook Neighborhood Group */}
        <Card className="p-8 bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200 shadow-xl">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-2xl mb-4 shadow-md">
              <Facebook className="w-8 h-8 text-blue-600" />
            </div>
            <h2 className="text-2xl font-bold text-slate-800 mb-3">Facebook Neighborhood Group</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Join our official neighborhood group to connect with neighbors and stay updated on community events
            </p>
          </div>

          <a 
            href="https://www.facebook.com/share/g/1GZpZYZTru"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white h-14">
              <Facebook className="w-5 h-5 mr-2" />
              Join Facebook Group
            </Button>
          </a>
        </Card>

        {/* City of Broken Arrow */}
        <Card className="p-8 bg-white border-slate-200 hover:shadow-xl transition-all duration-300">
          <div className="flex items-start space-x-4 mb-6">
            <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
              <MapPin className="w-7 h-7 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-800 mb-2">City of Broken Arrow</h2>
              <p className="text-slate-600">
                Access city services, permits, utilities, and general information about Broken Arrow
              </p>
            </div>
          </div>
          <a 
            href="https://www.brokenarrowok.gov" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">
              <ExternalLink className="w-4 h-4 mr-2" />
              Visit City Website
            </Button>
          </a>
        </Card>

        {/* Broken Arrow Police Department */}
        <Card className="p-8 bg-white border-slate-200 hover:shadow-xl transition-all duration-300">
          <div className="flex items-start space-x-4 mb-6">
            <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
              <Shield className="w-7 h-7 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-800 mb-2">Broken Arrow Police Department</h2>
              <p className="text-slate-600">
                Contact local police for non-emergency services, reports, and community safety information
              </p>
            </div>
          </div>
          <a 
            href="https://www.brokenarrowok.gov/police" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button className="w-full bg-red-500 hover:bg-red-600 text-white">
              <ExternalLink className="w-4 h-4 mr-2" />
              Visit Police Department
            </Button>
          </a>
        </Card>
      </div>

      {/* Emergency Contact Info */}
      <div className="max-w-5xl mx-auto mt-12">
        <Card className="p-8 bg-red-50 border-red-200">
          <h3 className="text-xl font-semibold text-slate-800 mb-4 text-center">Emergency Contacts</h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-red-600 mb-2">911</div>
              <div className="text-sm text-slate-600">Emergency Services</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">311</div>
              <div className="text-sm text-slate-600">City Services</div>
            </div>
            <div>
              <div className="text-lg font-bold text-slate-700 mb-2">918-251-5000</div>
              <div className="text-sm text-slate-600">Police Non-Emergency</div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}