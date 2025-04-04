import about from "../../assets/about.jpg";

function About() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-blue-50 p-10">
            <h1 className="text-5xl font-bold text-blue-600 mb-6">About Us</h1>

            {/* Hero Section */}
            <div className="max-w-5xl text-center">
                <img src={about} alt="About" className="mx-auto rounded-lg shadow-lg w-full max-w-4xl h-auto" />
                <p className="mt-6 text-lg text-gray-800 leading-relaxed">
                    We are a passionate team dedicated to delivering top-notch solutions tailored for you. 
                    With years of experience, our goal is to bring innovative ideas to life and exceed customer expectations.
                </p>
            </div>

            {/* Our Mission */}
            <div className="mt-16 max-w-4xl text-center">
                <h2 className="text-3xl font-semibold text-blue-600 mb-4">Our Mission</h2>
                <p className="text-gray-800 text-lg leading-relaxed">
                    Our mission is to empower businesses and individuals with cutting-edge technology solutions. 
                    We strive to create user-friendly, scalable, and future-ready applications that make a difference.
                </p>
            </div>
        </div> 
    );
}

export default About;

 