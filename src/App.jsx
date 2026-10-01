// Github: https://github.com/ml-zst-17/ML_17_2026_WebTech

import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';
import Technologies from './components/Technologies';
import Technology from './components/Technology';
import Product from './components/Product';

function App() {
  const technologies = [
    {
      id: 1,
      name: "React",
      category: "Frontend",
      hours: 30
    },
    {
      id: 2,
      name: "Node.js",
      category: "Backend",
      hours: 40
    },
    {
      id: 3,
      name: "MySQL",
      category: "Baza danych",
      hours: 20
    },
    {
      id: 4,
      name: "Express",
      category: "Backend",
      hours: 25
    },
    {
      id: 5,
      name: "MongoDB",
      category: "Baza danych",
      hours: 20
    },
  ];

  function selectTechnology(name) {
    console.log(`Wybrano: ${name}`);
  }

  function selectProduct(name) {
    console.log(`Wybrany produkt: ${name}`);
  }

  return (
    <>
      <Header />

      <main>
        {
          technologies.map(technology => (
            <Technology
              key={technology.id}
              name={technology.name}
              category={technology.category}
              hours={technology.hours}
              onSelect={selectTechnology}
            />
          ))
        }

        <Product
          name={"Pomidor (kg)"}
          price={"5zł"}
          onSelect={selectProduct}
        />
      </main>
      
      <Footer />
    </>
  );
}

export default App;
