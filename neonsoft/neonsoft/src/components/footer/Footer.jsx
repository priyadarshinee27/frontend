
function Footer(){
    return(
        <>
        <div>
        <footer className="bg-gray-800 text-white py-10">
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                
                {/* Company Info */}
                <div>
                    <h2 className="text-2xl font-bold">Our Company</h2>
                    <p className="mt-2 text-gray-200">
                        We provide top-notch services tailored to your needs. Innovation, efficiency, and quality define us.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h2 className="text-2xl font-bold">Quick Links</h2>
                    <ul className="mt-2 space-y-2">
                        <li><a href="/" className="hover:underline">Home</a></li>
                        <li><a href="/about" className="hover:underline">About</a></li>
                        <li><a href="/services" className="hover:underline">Services</a></li>
                        <li><a href="/pricing" className="hover:underline">Pricing</a></li>
                        <li><a href="/contact" className="hover:underline">Contact</a></li>
                    </ul>
                </div>

                {/* Social Media */}
                <div>
                    <h2 className="text-2xl font-bold">Follow Us</h2>
                    <div className="mt-2 flex justify-center md:justify-start space-x-4">
                        <a href="#" className="hover:text-gray-300">
                            <i className="fab fa-facebook-f text-xl"></i>
                        </a>
                        <a href="#" className="hover:text-gray-300">
                            <i className="fab fa-twitter text-xl"></i>
                        </a>
                        <a href="#" className="hover:text-gray-300">
                            <i className="fab fa-instagram text-xl"></i>
                        </a>
                        <a href="#" className="hover:text-gray-300">
                            <i className="fab fa-linkedin-in text-xl"></i>
                        </a>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="mt-10 text-center text-gray-200 border-t border-gray-400 pt-4">
                © {new Date().getFullYear()} YourCompany. All rights reserved.
            </div>
        </footer>
        </div>
        </>
    )
} 

export default Footer