import "./Card.css";

export default function Card({
  product_id,
  name,
  original_price,
  sale_price,
  rating,
  rewiew,
}) {
  return (
    <div className="card">
      <h3> {name}</h3>
      <p>original price: {original_price} $</p>
      <p>sale: {sale_price} $</p>
      <p>{rating}</p>
      <p>{rewiew}</p>
    </div>
  );
}
