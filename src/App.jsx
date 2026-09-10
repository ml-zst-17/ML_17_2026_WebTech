import './App.css'

function App() {
  const app = {
    name: "WebTech",
    version: "1.0",
    author: "Michele Łaba",
    technologiesCount: 3,
  };

  const technology = {
    name: "React",
    category: "Frontend",
    hours: 30,
    active: true,
  };

  return (
    <div>
      <h1>{app.name}</h1>
      <p>Wersja: {app.version}</p>
      <p>Autor: {app.author}</p>
      <p>
        Liczba technologii: {app.technologiesCount}
      </p>

      <h2>Technologia użyta: {technology.name}</h2>
      <p>Kategoria: {technology.category}</p>
      <p>Liczba godzin: {technology.hours}</p>
    </div>
  );
}

export default App
