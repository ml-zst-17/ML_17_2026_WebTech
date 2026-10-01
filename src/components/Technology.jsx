function Technology({ name, category, hours }) {
  return (
    <section>
      <h2>{name}</h2>
      <p>Kategoria: {category}</p>
      <p>Liczba godzin: {hours}h</p>
    </section>
  );
}

export default Technology;