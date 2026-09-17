// Github: https://github.com/ml-zst-17/ML_17_2026_WebTech

import './App.css'
import Header from './components/Header';
import Technology from './components/Technology';
import Footer from './components/Footer';
import Student from './components/Student';
import InfoBox from './components/InfoBox';
import Navigation from './components/Navigation';
import Technologies from './components/Technologies';
import CourseCard from './components/CourseCard';

function App() {
  return (
    <>
      <Header />

      <Navigation />

      <main>
        <Technologies />

        <CourseCard />

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
