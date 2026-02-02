import { Building2, MapPin, Phone, Mail, Globe } from 'lucide-react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';

export function Management() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Page Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl mb-6 shadow-lg">
          <Building2 className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-4xl font-bold text-slate-800 mb-4">Property Management</h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Your dedicated property management team is here to serve the Union Station South community
        </p>
      </div>

      {/* Management Info Card */}
      <div className="max-w-4xl mx-auto mb-12">
        <Card className="p-8 bg-white border-slate-200 shadow-xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-slate-800 mb-2">Robson Property Management</h2>
            <p className="text-slate-600">Professional HOA Management Services</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Mailing Address */}
            <div className="flex items-start space-x-4 p-4 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-md">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-800 mb-2">Mailing Address</h3>
                <p className="text-slate-600 text-sm">
                  901 N Forest Ridge Blvd<br />
                  Broken Arrow, OK 74014
                </p>
              </div>
            </div>

            {/* Office Phone */}
            <div className="flex items-start space-x-4 p-4 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-md">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-800 mb-2">Office Phone</h3>
                <a 
                  href="tel:918-994-6562" 
                  className="text-blue-600 hover:text-blue-700 transition-colors text-sm font-medium"
                >
                  918-994-6562
                </a>
              </div>
            </div>

            {/* Community Manager */}
            <div className="flex items-start space-x-4 p-4 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-md">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-800 mb-2">Community Manager</h3>
                <p className="text-slate-700 text-sm font-medium mb-1">Kelly Sloan</p>
                <a 
                  href="mailto:k.sloan@rp-management.com" 
                  className="text-blue-600 hover:text-blue-700 transition-colors text-sm"
                >
                  k.sloan@rp-management.com
                </a>
              </div>
            </div>

            {/* Website */}
            <div className="flex items-start space-x-4 p-4 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-md">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-800 mb-2">Website</h3>
                <a 
                  href="https://www.rp-management.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 transition-colors text-sm"
                >
                  www.rp-management.com
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-slate-200 text-center">
            <p className="text-slate-600 mb-6">
              Have questions or concerns? Our property management team is here to help.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:918-994-6562">
                <Button className="bg-blue-500 hover:bg-blue-600 text-white">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Us
                </Button>
              </a>
              <a href="mailto:k.sloan@rp-management.com">
                <Button variant="outline" className="border-slate-300 hover:bg-slate-100">
                  <Mail className="w-4 h-4 mr-2" />
                  Send Email
                </Button>
              </a>
            </div>
          </div>
        </Card>
      </div>

      {/* Services Info */}
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">Management Services</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-6 text-center bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
            <div className="text-4xl mb-3">🏡</div>
            <h3 className="font-semibold text-slate-800 mb-2">Property Maintenance</h3>
            <p className="text-sm text-slate-600">Ensuring our community stays beautiful and well-maintained</p>
          </Card>
          <Card className="p-6 text-center bg-gradient-to-br from-emerald-50 to-emerald-100 border-emerald-200">
            <div className="text-4xl mb-3">📋</div>
            <h3 className="font-semibold text-slate-800 mb-2">HOA Administration</h3>
            <p className="text-sm text-slate-600">Professional management of HOA operations and finances</p>
          </Card>
          <Card className="p-6 text-center bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
            <div className="text-4xl mb-3">💬</div>
            <h3 className="font-semibold text-slate-800 mb-2">Resident Support</h3>
            <p className="text-sm text-slate-600">Dedicated assistance for all community members</p>
          </Card>
        </div>
      </div>
    </div>
  );
}
