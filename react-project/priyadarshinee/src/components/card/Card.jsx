
import artboard from '../../assets/artboard.png'
import artboardd from '../../assets/artboardd.png'
function Card(){
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="grid grid-cols-2 gap-6">
          
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img className="rounded-t-lg mx-auto p-4" src="/assets/ecommerce.png" alt="eCommerce" />
            </a>
            <div className="p-5">
              <a href="#">
                <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  eCommerce Development
                </h3>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Specializing in eCommerce solutions, we help businesses increase online sales with store design, payment integration, and security optimization.
              </p>
            </div>
          </div>
  
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img className="rounded-t-lg mx-auto p-4" src="/assets/game.png" alt="Game Development" />
            </a>
            <div className="p-5">
              <a href="#">
                <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Game Development
                </h3>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                We provide high-quality game development services for mobile, desktop, and web platforms using cutting-edge technology.
              </p>
            </div>
          </div>
  
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img className="rounded-t-lg mx-auto p-4" src="/assets/analytics.png" alt="Analytics" />
            </a>
            <div className="p-5">
              <a href="#">
                <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Analytics
                </h3>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Providing advanced analytics solutions to help businesses make data-driven decisions with real-time insights.
              </p>
            </div>
          </div>
  
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img className="rounded-t-lg mx-auto p-4" src="/assets/support.png" alt="Support" />
            </a>
            <div className="p-5">
              <a href="#">
                <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Support & Maintenance
                </h3>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Reliable support and maintenance services to keep your digital solutions running smoothly.
              </p>
            </div>
          </div>
  
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img className="rounded-t-lg mx-auto p-4" src="/assets/cloud.png" alt="Cloud Solutions" />
            </a>
            <div className="p-5">
              <a href="#">
                <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Cloud Solutions
                </h3>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Secure and scalable cloud solutions to enhance business agility.
              </p>
            </div>
          </div>
  
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img className="rounded-t-lg mx-auto p-4" src="/assets/ai.png" alt="AI & Automation" />
            </a>
            <div className="p-5">
              <a href="#">
                <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  AI & Automation
                </h3>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Implement AI and automation to optimize workflows and enhance efficiency.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  export default Card;