import './App.css'

function App() {
  const app = {
    name: "WebTech",
    version: "1.0",
    author: "Michele Łaba",
    technologiesCount: 3,
  };

  return (
    <div>
      <h1>{app.name}</h1>
      <p>Wersja: {app.version}</p>
      <p>Autor: {app.author}</p>
      <p>
        Liczba technologii: {app.technologiesCount}
      </p>
    </div>
  );
}

export default App
