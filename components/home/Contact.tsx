export default function Contact() {
  return (
    <section className="py-20 bg-zinc-800" id="contact">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-xl mx-auto mb-16">
          <h2 className="text-sm font-medium tracking-wider text-amber-500 uppercase mb-2">Contact Us</h2>
          <h3 className="text-4xl font-serif text-white mb-4">Visit Our Shop</h3>
          <div className="w-20 h-1 bg-amber-600 mx-auto mb-6"></div>
          <p className="text-white/80">
            Drop by our shop or get in touch with us to schedule an appointment or ask any questions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 bg-zinc-900 p-8">
            <h4 className="text-2xl font-serif text-white mb-6">Get In Touch</h4>
            
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white/80 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 text-white outline-none focus:border-amber-600"
                  placeholder="Your Name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-white/80 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 text-white outline-none focus:border-amber-600"
                  placeholder="Your Email"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-white/80 mb-2">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 text-white outline-none focus:border-amber-600 resize-none"
                  placeholder="Your Message"
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 px-6 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
          
          <div className="lg:col-span-3 h-[400px] md:h-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4951.954035699205!2d-0.07060352246909499!3d51.64194597184426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761f1e369517b1%3A0x4aeb8102ff61891d!2sThe%20Shave%20Cave!5e0!3m2!1sen!2spl!4v1748776700273!5m2!1sen!2spl"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Our location"
            />
            
          </div>
        </div>
      </div>
    </section>
  );
}