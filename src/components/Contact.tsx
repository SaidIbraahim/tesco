import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <form className="space-y-6">
              <div>
                <Input type="text" placeholder="Your Name" />
              </div>
              <div>
                <Input type="email" placeholder="Your Email" />
              </div>
              <div>
                <Input type="tel" placeholder="Phone Number" />
              </div>
              <div>
                <Textarea placeholder="Your Message" className="h-32" />
              </div>
              <Button className="w-full bg-tesco-red hover:bg-red-600 text-white">
                Send Message
              </Button>
            </form>
          </div>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <MapPin className="w-6 h-6 text-tesco-red flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-1">Address</h3>
                <p className="text-gray-600">
                  123 Construction Avenue, Engineering District, 12345
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Phone className="w-6 h-6 text-tesco-red flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-1">Phone</h3>
                <p className="text-gray-600">+1 (234) 567-8900</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Mail className="w-6 h-6 text-tesco-red flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-1">Email</h3>
                <p className="text-gray-600">contact@tescoengineering.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;