import { useState } from 'react';
import { Mail, Send, CheckCircle2, Phone, MapPin } from 'lucide-react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { toast } from 'sonner@2.0.3';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would submit to a backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    toast.success('Message sent successfully!');
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
      setIsSubmitted(false);
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Page Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl mb-6 shadow-lg">
          <Mail className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-4xl font-bold text-slate-800 mb-4">Contact Us</h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Have a question or concern? We're here to help. Fill out the form below or use the contact information provided.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Contact Form */}
        <div className="lg:col-span-2">
          <Card className="p-8 bg-white border-slate-200 shadow-xl">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit}>
                <h2 className="text-2xl font-bold text-slate-800 mb-6">Send us a Message</h2>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <Label htmlFor="name" className="text-slate-700 mb-2 block">
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="border-slate-300"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-slate-700 mb-2 block">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="border-slate-300"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <Label htmlFor="phone" className="text-slate-700 mb-2 block">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="border-slate-300"
                      placeholder="(918) 555-0123"
                    />
                  </div>
                  <div>
                    <Label htmlFor="subject" className="text-slate-700 mb-2 block">
                      Subject *
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="border-slate-300"
                      placeholder="How can we help?"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <Label htmlFor="message" className="text-slate-700 mb-2 block">
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="border-slate-300 min-h-[150px]"
                    placeholder="Please provide details about your inquiry..."
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white"
                  size="lg"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            ) : (
              <div className="text-center py-12">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
                  <CheckCircle2 className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Message Sent!</h3>
                <p className="text-slate-600">
                  Thank you for contacting us. We'll get back to you as soon as possible.
                </p>
              </div>
            )}
          </Card>
        </div>

        {/* Contact Information */}
        <div className="space-y-6">
          <Card className="p-6 bg-white border-slate-200 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4 shadow-md">
              <Phone className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold text-slate-800 mb-2">Phone</h3>
            <a 
              href="tel:918-994-6562" 
              className="text-blue-600 hover:text-blue-700 transition-colors"
            >
              918-994-6562
            </a>
            <p className="text-sm text-slate-500 mt-2">Mon-Fri: 9AM - 5PM</p>
          </Card>

          <Card className="p-6 bg-white border-slate-200 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 shadow-md">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold text-slate-800 mb-2">Email</h3>
            <a 
              href="mailto:k.sloan@rp-management.com" 
              className="text-blue-600 hover:text-blue-700 transition-colors text-sm break-all"
            >
              k.sloan@rp-management.com
            </a>
            <p className="text-sm text-slate-700 mt-3 font-medium">Kelly Sloan</p>
            <p className="text-sm text-slate-500">Community Manager</p>
          </Card>

          <Card className="p-6 bg-white border-slate-200 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center mb-4 shadow-md">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold text-slate-800 mb-2">Mailing Address</h3>
            <p className="text-sm text-slate-600">
              Robson Property Management<br />
              901 N Forest Ridge Blvd<br />
              Broken Arrow, OK 74014
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}
