import './App.css';
import Carousel from './components/Carousel/Carousel';
import Category from './components/Category/Category';
// import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import RecentNews from './components/RecentNews/RecentNews';
import TNews from './components/TNews/TNews';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Hero /> */}
      <Category />
      <TNews />
      <Carousel />
      <RecentNews />
    </div>
  );
}

export default App;
