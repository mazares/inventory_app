import "./Main.css";

import { useState, useEffect } from "react";

import axios from "axios";

import Card from "../card/Card";

export default function Main({
  product_id,
  name,
  original_price,
  sale_price,
  rating,
  rewiew,
}) {
  const url = "http://localhost:3001";

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <main className="main">
      {data.map((item) => (
        <Card
          key={item.product_id}
          product_id={item.product_id}
          name={item.name}
          original_price={item.original_price}
          sale_price={item.sale_price}
          rating={item.rating}
          rewiew={item.rewiew}
        />
      ))}
    </main>
  );
}
