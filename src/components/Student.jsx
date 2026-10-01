function Student({ name, className, age, specialization }) {
    return (
        <section>
            <h2>Uczeń: {name}</h2>
            <p>Klasa: {className}</p>
            <p>Wiek: {age}</p>
            <p>Specjalizacja: {specialization}</p>
        </section>
    );
}

export default Student;