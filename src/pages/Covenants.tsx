import { FileText, Download, BookOpen, Shield } from 'lucide-react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';

export function Covenants() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Page Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl mb-6 shadow-lg">
          <FileText className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-4xl font-bold text-slate-800 mb-4">HOA Covenants</h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Review and download our community covenants and guidelines
        </p>
      </div>

      {/* Download Card */}
      <div className="max-w-3xl mx-auto mb-12">
        <Card className="p-8 bg-gradient-to-br from-emerald-50 to-blue-50 border-emerald-200 shadow-xl">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-2xl mb-6 shadow-md">
              <Download className="w-10 h-10 text-emerald-600" />
            </div>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Download HOA Covenants</h2>
            <p className="text-slate-600 mb-6">
              Access the complete set of covenants, conditions, and restrictions for Union Station South. 
              These documents outline the rules and regulations that help maintain our community standards.
            </p>
            <Button 
              size="lg" 
              className="bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg"
              onClick={() => window.alert('Download link would be configured here. Please contact management for the covenant documents.')}
            >
              <Download className="w-5 h-5 mr-2" />
              Download Covenants (PDF)
            </Button>
          </div>
        </Card>
      </div>

      {/* Information Cards */}
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold text-slate-800 mb-8 text-center">About Our Covenants</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-6 bg-white border-slate-200 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4 shadow-md">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold text-slate-800 mb-3">Property Protection</h3>
            <p className="text-sm text-slate-600">
              Our covenants help protect property values by maintaining consistent community standards and appearance.
            </p>
          </Card>

          <Card className="p-6 bg-white border-slate-200 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center mb-4 shadow-md">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold text-slate-800 mb-3">Clear Guidelines</h3>
            <p className="text-sm text-slate-600">
              Easy-to-understand rules covering landscaping, architectural modifications, and community conduct.
            </p>
          </Card>

          <Card className="p-6 bg-white border-slate-200 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 shadow-md">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold text-slate-800 mb-3">Legal Framework</h3>
            <p className="text-sm text-slate-600">
              Legally binding documents that govern the rights and responsibilities of all homeowners in our community.
            </p>
          </Card>
        </div>
      </div>

      {/* Important Information */}
      <div className="max-w-3xl mx-auto mt-12">
        <Card className="p-8 bg-blue-50 border-blue-200">
          <h3 className="text-xl font-semibold text-slate-800 mb-4">Important Information</h3>
          <ul className="space-y-3 text-slate-700">
            <li className="flex items-start">
              <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span>All homeowners are required to comply with the HOA covenants</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span>Please review the covenants carefully before making any modifications to your property</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span>Contact Robson Property Management if you have questions about covenant interpretation</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span>Architectural approval may be required for exterior changes to your home</span>
            </li>
          </ul>
        </Card>
      </div>
    </div>
  );
}
