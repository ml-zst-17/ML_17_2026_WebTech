function Product({ name, price, onSelect }) {
    return (
        <article>
            <h2>{name}</h2>
            <p>Cena: {price}</p>

            <button onClick={() => onSelect(name)}>
                Pokaż produkt
            </button>
        </article>
    );
}

export default Product;