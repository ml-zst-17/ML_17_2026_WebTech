import Technology from "./Technology";

function Technologies({ technologies }) {
    return (
        <>
            {
                technologies.map(technology => (
                    <Technology
                        key={technology.id}
                        name={technology.name}
                        category={technology.category}
                        hours={technology.hours}
                    />
                ))
            }
        </>
    )
}

export default Technologies;