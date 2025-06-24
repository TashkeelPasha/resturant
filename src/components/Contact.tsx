import { MapPin, Phone, Mail, Clock } from "lucide-react";

interface ContactProps {
  whatsappLink: string;
  restaurantInfo: {
    address: string;
    phone: string;
  };
}

const Contact: React.FC<ContactProps> = ({ whatsappLink, restaurantInfo }) => {
  return (
    <div>
      {/* Contact Info Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in">
              <MapPin className="w-8 h-8 mx-auto mb-4 text-orange-400" />
              <h3 className="text-lg font-bold mb-2">Location</h3>
              <p className="text-gray-300 text-sm">{restaurantInfo.address}</p>
            </div>

            <div className="animate-fade-in">
              <Phone className="w-8 h-8 mx-auto mb-4 text-orange-400" />
              <h3 className="text-lg font-bold mb-2">Phone</h3>
              <p className="text-gray-300 text-sm">{restaurantInfo.phone}</p>
            </div>

            <div className="animate-fade-in">
              <Mail className="w-8 h-8 mx-auto mb-4 text-orange-400" />
              <h3 className="text-lg font-bold mb-2">Email</h3>
              <p className="text-gray-300 text-sm">info@company.com</p>
            </div>

            <div className="animate-fade-in">
              <Clock className="w-8 h-8 mx-auto mb-4 text-orange-400" />
              <h3 className="text-lg font-bold mb-2">Working Hours</h3>
              <p className="text-gray-300 text-sm">
                Tue-Sun
                <br />
                10 AM - 11 PM
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section
        className="py-20 bg-cover bg-center relative"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1544025162-d76694265947')",
        }}
      >
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-8">
            <span className="text-2xl">"</span>
          </div>
          <blockquote className="text-xl md:text-2xl italic mb-6 leading-relaxed">
            "The best BBQ I've ever tasted! The flavors are incredible, and the
            meat is always perfectly cooked. A must-visit for any BBQ lover!"
          </blockquote>
          <cite className="text-orange-400 font-semibold">Wade Warren</cite>
        </div>
      </section>

      {/* Why Us & Reserve Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <img
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0"
                alt="Restaurant interior"
                className="rounded-lg w-full h-96 object-cover"
              />
            </div>

            <div className="animate-fade-in">
              <h4 className="text-orange-400 text-lg mb-2">Why Us</h4>
              <h2 className="text-4xl font-bold mb-6">
                We Offer The Best BBQ In All of Texas
              </h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Experience the true taste of Texas BBQ right here! Our
                commitment to quality ingredients and authentic smoking
                techniques ensures every bite is a delight.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <span className="w-2 h-2 bg-orange-600 rounded-full mr-3"></span>
                  High Quality Menu
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="w-2 h-2 bg-orange-600 rounded-full mr-3"></span>
                  Organic Meat and Ingredients
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="w-2 h-2 bg-orange-600 rounded-full mr-3"></span>
                  Best Service in Town
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section
        className="py-20 bg-cover bg-center relative"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('https://images.unsplash.com/photo-1544025162-d76694265947')",
        }}
      >
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-4xl font-bold mb-6 animate-fade-in-up">
            Reserve Your Table for an Unforgettable BBQ Experience!
          </h2>
          <p className="text-xl mb-8 text-gray-300 animate-fade-in-up animate-delay-300">
            Ready to indulge in the most delicious BBQ in town? Book your table
            now and let us treat you to an unforgettable dining experience!
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 text-lg transition-all duration-300 hover:scale-105 rounded-none inline-block"
          >
            Contact Now
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;
