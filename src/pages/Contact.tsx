import { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
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
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/make-server-018b3a43/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Unable to submit contact form');
      }

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
    } catch (error) {
      console.error('Failed to submit contact form', error);
      toast.error('Unable to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Contact Form */}
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
              disabled={isSubmitting}
            >
              <Send className="w-4 h-4 mr-2" />
              {isSubmitting ? 'Sending...' : 'Send Message'}
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
  );
}
