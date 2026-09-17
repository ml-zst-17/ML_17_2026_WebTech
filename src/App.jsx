// Github: https://github.com/ml-zst-17/ML_17_2026_WebTech

import './App.css'
import Header from './components/Header';
import Technology from './components/Technology';
import Footer from './components/Footer';
import Student from './components/Student';
import InfoBox from './components/InfoBox';

function App() {
  return (
    <>
      <Header />

      <main>
        <Technology />
        <Technology />
        <Technology />

        <Student />

        <InfoBox />
      </main>
      
      <Footer />
    </>
  );
}

export default App;
