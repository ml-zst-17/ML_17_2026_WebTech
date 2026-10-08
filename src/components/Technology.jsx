function Technology({ name, img, category, hours }) {
  return (
    <div className="card">
      <img src={`/images/${img}`} alt={name} />
      <h3>{name}</h3>
      <p>{category}</p>
      <p>Liczba godzin: {hours}h</p>
    </div>
  );
}

export default Technology;