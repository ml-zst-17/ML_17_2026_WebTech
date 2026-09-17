function CourseCard() {
    const course = {
        'name': 'Zaawansowane Aplikacje Webowe',
        'teacher': 'Rafał Taraszka',
        'hours': 200,
    };

    return (
        <section>
            <h2>Kurs {course.name}</h2>
            <p>Nauczyciel: {course.teacher}</p>
            <p>Czas trwania: {course.hours}h ({course.hours * 60} min)</p>
        </section>
    );
}

export default CourseCard;