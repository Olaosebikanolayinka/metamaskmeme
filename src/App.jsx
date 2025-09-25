import { useState, useEffect } from 'react';
import './App.css';
import './index.css';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import About from './components/About';
import Tokenomic from './components/Tokenomic';
import RoadMap from './components/RoadMap';
import HowToBuy from './components/HowToBuy';
import Footer from './components/Footer';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // simulate loading for 2s
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Navbar />
      <About />
      <HowToBuy />
      <div className="min-h-screen bg-black flex items-center justify-center">
        <Tokenomic />
      </div>
      <RoadMap />
      <Footer />
    </>
  );
}

export default App;
