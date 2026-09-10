// Github: https://github.com/ml-zst-17/ML_17_2026_WebTech

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

  const student = {
    name: "Michele",
    surname: "Łaba",
    className: "4P",
    specialization: "technik programista",
  };

  const course = {
    name: "Zaawansowane Aplikacje Webowe",
    teacher: "Rafał Taraszka",
    hours: 160,
    completed: false,
  }

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

      <h2>Uczeń: {student.name} {student.surname}</h2>
      <p>Klasa: {student.className}</p>
      <p>Kierunek: {student.specialization}</p>

      <section>
        <h2>Kurs: {course.name}</h2>
        <p>Nauczyciel: {course.teacher}</p>
        <p>Ile trwa: {course.hours / 24}d</p>
        <p>Skończony: <span className='big-red'>{course.completed.toString()}</span></p>
      </section>
    </div>
  );
}

export default App
