function Student() {
    const studentData = {
        'name': 'Michele Łaba',
        'className': '4P',
        'specialization': 'Programista',
    };

    return (
        <div>
            <h3>Student: {studentData.name}</h3>
            <p>Klasa: {studentData.className}</p>
            <p>Specjalizacja: {studentData.specialization}</p>
        </div>
    );
}

export default Student;