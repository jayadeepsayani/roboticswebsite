import Joinftc from './top/Joinftc.js';
import Navbar from './navbar/Navbar.js';
import Hero from './hero/Hero.js';
import Teampositives from './teamstrengths/Teampositives.js';
import Sponsors from './sponsors/Sponsors.js';
import Meettheteam from './meettheteam/Meettheteam.js';
import Footer from './footer/Footer.js';

function App() {
  return (
    <div className="App">
      <Joinftc />
      <Navbar />
      <Hero />
      <Sponsors />
      <Teampositives />
      <Meettheteam />
      <Footer />
    </div>
  );
}

export default App;
