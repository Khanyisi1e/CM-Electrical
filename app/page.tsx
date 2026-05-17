import { MapPin, Phone, Truck, Wrench, Package, Clock, ShieldCheck, CreditCard, Accessibility, BadgeCheck, Star, Users, Car } from "lucide-react";
import * as motion from "motion/react-client";
import Image from "next/image";

export default function Home() {
  const reviews = [
    {
      name: "Riad Davids",
      time: "a month ago",
      text: "Very knowledgeable Staff. Efficient and helpful. Able to source anything you need that is not in stock.",
      ownerReply: null
    },
    {
      name: "Nazlie Hendricks",
      time: "a year ago",
      text: "",
      ownerReply: "Thanks so much for your feedback !"
    },
    {
      name: "Naeem kippie",
      time: "a year ago",
      text: "",
      ownerReply: "Thanks so much for your feedback ! x"
    },
    {
      name: "Nathan Thyssen",
      time: "2 years ago",
      text: "",
      ownerReply: "Thank you so much for your feedback !"
    },
    {
      name: "Sylvia Cuthill",
      time: "2 years ago",
      text: "The widest range of electric parts you will ever need. They also cut keys and basically Clive and the team do anything, including cheering your day up. Keep up the good work Clive. You are a blessing.",
      ownerReply: "Hi there David + Sylvia !\n\nThank you so much for your review , it warms our hearts to read. It gives us more drive to carry on.\n\nWe hope to see and hear from you soon again"
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 font-sans selection:bg-yellow-400 selection:text-neutral-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 group cursor-pointer">
            <div className="w-8 h-8 bg-yellow-500 group-hover:bg-yellow-400 transition-colors rounded flex items-center justify-center font-bold text-neutral-900 text-lg">
              CM
            </div>
            <span className="font-bold text-xl tracking-tight">Electrical</span>
          </a>
          <div className="hidden sm:flex items-center gap-6 text-sm font-medium">
            <a href="#services" className="text-neutral-600 hover:text-neutral-900 transition-colors">Services</a>
            <a href="#reviews" className="text-neutral-600 hover:text-neutral-900 transition-colors">Reviews</a>
            <a href="#hours" className="text-neutral-600 hover:text-neutral-900 transition-colors">Hours</a>
            <a href="#location" className="text-neutral-600 hover:text-neutral-900 transition-colors">Location</a>
          </div>
          <a
            href="tel:+27215108824"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 bg-neutral-900 text-white px-4 py-2 rounded-md font-medium text-sm hover:bg-neutral-800 transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span className="hidden sm:inline">021 510 8824</span>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white border-b border-neutral-200">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-yellow-100/50 via-white to-white pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <a
              href="https://maps.google.com/?q=111+Voortrekker+Rd,+Maitland,+Cape+Town,+7405"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-100 hover:bg-yellow-200 transition-colors text-yellow-800 text-sm font-medium mb-6 cursor-pointer"
            >
              <MapPin className="w-4 h-4" />
              111 Voortrekker Rd, Maitland, Cape Town
            </a>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight mb-6 text-neutral-900">
              Cape Town&apos;s Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-amber-600">Electrical Wholesaler</span>
            </h1>
            <p className="text-lg md:text-xl text-neutral-600 mb-8 max-w-2xl leading-relaxed">
              We supply top-quality electrical products to contractors and the public. Enjoy fast delivery, easy pick-up, and expert general repairs and installations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://maps.google.com/?q=111+Voortrekker+Rd,+Maitland,+Cape+Town,+7405"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 bg-yellow-500 text-neutral-900 px-6 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors shadow-sm"
              >
                <MapPin className="w-5 h-5" />
                Get Directions
              </a>
              <a
                href="tel:+27215108824"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 bg-white border-2 border-neutral-200 text-neutral-900 px-6 py-3 rounded-lg font-bold text-lg hover:border-neutral-300 hover:bg-neutral-50 transition-colors shadow-sm"
              >
                <Phone className="w-5 h-5" />
                021 510 8824
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 mb-4">Everything You Need, In One Place</h2>
            <p className="text-neutral-600 text-lg">Whether you are stocking up on standard supplies, need a fast delivery, or require an expert installation, we have got you covered.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Package, title: "Wholesale Products", desc: "Bulk supplies and premium electrical components for all projects." },
              { icon: Truck, title: "Fast Delivery", desc: "Reliable delivery across the local area to keep your site moving." },
              { icon: Clock, title: "Easy Pick-Up", desc: "Order ahead and grab your supplies quickly from our Maitlands store." },
              { icon: Wrench, title: "Repairs & Install", desc: "General electrical repairs and professional installation services." }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white p-6 rounded-2xl border border-neutral-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-yellow-100 text-yellow-600 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-xl mb-2 text-neutral-900">{feature.title}</h3>
                <p className="text-neutral-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-100 text-yellow-800 text-sm font-medium mb-4">
               <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
               4.5 out of 5 rating
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 mb-4">What Our Customers Say</h2>
            <p className="text-neutral-600 text-lg">Real reviews from our amazing clients and tradespeople.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-neutral-50 p-6 rounded-2xl border border-neutral-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                    ))}
                  </div>
                  {review.text && <p className="text-neutral-700 italic mb-6">&quot;{review.text}&quot;</p>}
                  {review.ownerReply && (
                    <div className="bg-white p-4 rounded-xl border border-neutral-100 mb-6 shadow-sm">
                      <div className="text-xs font-bold text-neutral-900 mb-2">CM Electrical (owner)</div>
                      <p className="text-sm text-neutral-600 whitespace-pre-line">{review.ownerReply}</p>
                    </div>
                  )}
                </div>
                <div className="flex items-center justify-between border-t border-neutral-200 pt-4 mt-auto">
                   <div className="font-bold text-neutral-900">{review.name}</div>
                   <div className="text-xs text-neutral-500">{review.time}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Operating Hours */}
      <section id="hours" className="py-20 bg-neutral-50 border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 mb-4">Operating Hours</h2>
            <p className="text-neutral-600 text-lg">Detailed schedules for our storefront, delivery, and pick-up services.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Store Hours */}
            <div className="bg-neutral-50 rounded-2xl p-8 border border-neutral-200">
              <div className="flex items-center gap-3 mb-6">
                <BadgeCheck className="w-6 h-6 text-yellow-500" />
                <h3 className="text-xl font-bold text-neutral-900">Store Hours</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex justify-between text-neutral-600"><span className="font-medium">Monday - Thursday</span> <span>8:00 am – 5:00 pm</span></li>
                <li className="flex justify-between text-neutral-600"><span className="font-medium">Friday</span> <span>8:00 am – 4:30 pm</span></li>
                <li className="flex justify-between text-neutral-400"><span className="font-medium">Saturday & Sunday</span> <span>Closed</span></li>
              </ul>
            </div>

            {/* Delivery Hours */}
            <div className="bg-neutral-50 rounded-2xl p-8 border border-neutral-200">
              <div className="flex items-center gap-3 mb-6">
                <Truck className="w-6 h-6 text-yellow-500" />
                <h3 className="text-xl font-bold text-neutral-900">Delivery</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex justify-between text-neutral-600"><span className="font-medium">Monday - Thursday</span> <span>9:00 am – 4:00 pm</span></li>
                <li className="flex justify-between text-neutral-600"><span className="font-medium">Friday</span> <span>9:00 am – 3:30 pm</span></li>
                <li className="flex justify-between text-neutral-400"><span className="font-medium">Saturday & Sunday</span> <span>Closed</span></li>
              </ul>
            </div>

            {/* Pick-up Hours */}
            <div className="bg-neutral-50 rounded-2xl p-8 border border-neutral-200">
              <div className="flex items-center gap-3 mb-6">
                <Package className="w-6 h-6 text-yellow-500" />
                <h3 className="text-xl font-bold text-neutral-900">Order Pick-up</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex justify-between text-neutral-600"><span className="font-medium">Monday - Friday</span> <span>9:00 am – 5:00 pm</span></li>
                <li className="flex justify-between text-neutral-400"><span className="font-medium">Saturday & Sunday</span> <span>Closed</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Info Section */}
      <section id="location" className="py-20 bg-neutral-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-8">Visit CM Electrical</h2>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-yellow-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Address</h4>
                    <a 
                      href="https://maps.google.com/?q=111+Voortrekker+Rd,+Maitland,+Cape+Town,+7405"
                      target="_blank"
                      rel="noreferrer"
                      className="text-neutral-400 hover:text-white transition-colors leading-relaxed block cursor-pointer"
                    >
                      111 Voortrekker Rd<br />
                      Maitland<br />
                      Cape Town, 7405
                    </a>
                  </div>
                </div>

                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="bg-neutral-800/50 p-4 rounded-xl border border-neutral-700/50 hover:bg-neutral-800 transition-colors">
                    <Accessibility className="w-6 h-6 text-yellow-500 mb-3" />
                    <h4 className="font-bold text-sm mb-2 text-white">Accessibility</h4>
                    <ul className="text-xs text-neutral-400 space-y-1.5">
                      <li>• Wheelchair-accessible seating</li>
                      <li>• Wheelchair-accessible toilet</li>
                    </ul>
                  </div>
                  
                  <div className="bg-neutral-800/50 p-4 rounded-xl border border-neutral-700/50 hover:bg-neutral-800 transition-colors">
                    <Users className="w-6 h-6 text-yellow-500 mb-3" />
                    <h4 className="font-bold text-sm mb-2 text-white">Crowd & Amenities</h4>
                    <ul className="text-xs text-neutral-400 space-y-1.5">
                      <li>• LGBTQ+ friendly</li>
                      <li>• Transgender safe space</li>
                      <li>• Gender-neutral toilets</li>
                    </ul>
                  </div>

                  <div className="bg-neutral-800/50 p-4 rounded-xl border border-neutral-700/50 hover:bg-neutral-800 transition-colors">
                    <CreditCard className="w-6 h-6 text-yellow-500 mb-3" />
                    <h4 className="font-bold text-sm mb-2 text-white">Payments</h4>
                    <ul className="text-xs text-neutral-400 space-y-1.5">
                      <li>• Credit & Debit cards</li>
                      <li>• Mastercard, VISA</li>
                    </ul>
                  </div>

                  <div className="bg-neutral-800/50 p-4 rounded-xl border border-neutral-700/50 hover:bg-neutral-800 transition-colors">
                    <Car className="w-6 h-6 text-yellow-500 mb-3" />
                    <h4 className="font-bold text-sm mb-2 text-white">Parking</h4>
                    <ul className="text-xs text-neutral-400 space-y-1.5">
                      <li>• Free of charge street parking</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <a
                  href="https://maps.google.com/?q=111+Voortrekker+Rd,+Maitland,+Cape+Town,+7405"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-yellow-500 text-neutral-900 px-6 py-3 rounded-lg font-bold hover:bg-yellow-400 transition-colors"
                >
                  <MapPin className="w-5 h-5" />
                  Open in Google Maps
                </a>
              </div>
            </div>
            
            {/* Map Placeholder */}
            <div className="relative h-full min-h-[400px] rounded-2xl overflow-hidden bg-neutral-800 border-2 border-neutral-800">
              <div className="absolute inset-0 bg-neutral-800 flex flex-col items-center justify-center text-neutral-500 p-6 text-center">
                <MapPin className="w-16 h-16 text-neutral-700 mb-4" />
                <p className="font-medium text-lg text-neutral-400 mb-2">111 Voortrekker Rd, Maitland</p>
                <p className="text-sm">Click &quot;Open in Google Maps&quot; for active navigation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12 border-t border-neutral-800 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <a href="#" className="inline-flex items-center justify-center gap-2 mb-6 group cursor-pointer">
            <div className="w-6 h-6 bg-yellow-500 group-hover:bg-yellow-400 transition-colors rounded flex items-center justify-center font-bold text-black text-xs">
              CM
            </div>
            <span className="font-bold text-lg tracking-tight text-white group-hover:text-neutral-200 transition-colors">Electrical</span>
          </a>
          <p className="text-neutral-500 text-sm mb-6 max-w-md mx-auto">
            Cape Town&apos;s trusted source for electrical products, reliable delivery, and professional installation services.
          </p>
          <div className="text-neutral-600 text-sm flex flex-col sm:flex-row justify-center gap-4">
            <span>&copy; {new Date().getFullYear()} CM Electrical. All rights reserved.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
