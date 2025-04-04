import homepage from '../..//assets/homepage.jpeg'; 
function Home() {
    return (
      <>
      <div className="p-10 text-center">
      <h1 className="text-4xl font-bold text-blue-500">Welcome to Our Website</h1>
      <p className="mt-4">Discover the best solutions tailored for you.</p>
      <img src={homepage} alt="Homepage" className="mx-auto mt-6 rounded-lg shadow-lg w-3/4 h-auto" />


    </div>
    </>
    );
  }
  export default Home