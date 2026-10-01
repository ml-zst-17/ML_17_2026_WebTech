// Github: https://github.com/ml-zst-17/ML_17_2026_WebTech

import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Technologies from './components/Technologies';
import Student from './components/Student';
import Book from './components/Book';

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

  const students = [
    {
      id: 1,
      name: "Anna",
      className: "4P",
      age: 17,
      specialization: "Front-end",
    },
    {
      id: 2,
      name: "Jan",
      className: "4P",
      age: 18,
      specialization: "Back-end",
    },
    {
      id: 3,
      name: "Adam",
      className: "4P",
      age: 18,
      specialization: "Cyber security",
    },
    {
      id: 4,
      name: "Maciej",
      className: "4P",
      age: 17,
      specialization: "Embedded programming",
    },
  ];

  const books = [
    { id: 1, title: "Wiedźmin", author: "Andrzej Sapkowski" },
    { id: 2, title: "Hobbit", author: "J.R.R. Tolkien" },
    { id: 3, title: "Lalka", author: "Bolesław Prus" },
  ];

  return (
    <>
      <Header />

      <main>
        <Technologies technologies={technologies} />

        {
          students.map(student => (
            <Student
              key={student.id}
              name={student.name}
              className={student.className}
              age={student.age}
              specialization={student.specialization}
            />
          ))
        }

        {
          books.map(book => (
            <Book
              key={book.id}
              title={book.title}
              author={book.author}
            />
          ))
        }

        {
          books.map(book => {
            return (
              <Book
                key={book.id}
                title={book.title}
                author={book.author}
              />
            );
          })
        }
      </main>
      
      <Footer />
    </>
  );
}

export default App;
