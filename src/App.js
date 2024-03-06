import './App.css';
import Category from './components/Category/Category';
// import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Hero /> */}
      <Category />
    </div>
  );
}

export default App;
