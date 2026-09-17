function Technologies() {
    const technologies = [
        {
            'id': 0,
            'name': 'JavaScript',
            'category': 'Interpretowany język programowania',
        },
        {
            'id': 1,
            'name': 'Rust',
            'category': 'Kompilowany język programowania',
        },
        {
            'id': 2,
            'name': 'React.js',
            'category': 'Biblioteka frontendowa',
        },
    ];

    const contents = [];

    for (const i in technologies) {
        contents.push(
            <>
                <h2>Nazwa technologii: {technologies[i].name}</h2>
                <p>Kategoria: {technologies[i].category}</p>
                <p>ID: {technologies[i].id}</p>
            </>
        );
    }

    return (
        <>
            {contents}
        </>
    )
}

export default Technologies;