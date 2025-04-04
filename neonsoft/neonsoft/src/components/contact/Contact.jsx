function Contact() {
    return (
      <div className="p-10 text-center">
        <h1 className="text-4xl font-bold text-blue-500">Contact Us</h1>
        <p className="mt-4">Get in touch with us for more information.</p>
        <form className="mt-6 max-w-md mx-auto">
          <input type="text" placeholder="Your Name" className="w-full p-2 border rounded mb-4" />
          <input type="email" placeholder="Your Email" className="w-full p-2 border rounded mb-4" />
          <textarea placeholder="Your Message" className="w-full p-2 border rounded mb-4"></textarea>
          <button className="w-full bg-blue-500 text-white py-2 rounded">Send Message</button>
        </form>
      </div>
    );
  }
    export default Contact;