import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import './App.css';

function Items({match}) {
  useEffect(() =>{
    fetchItems();
  },[]);
	// state array containing data from api request
  const [items, setItems] = useState([]);

	//api link																				 take id data from app.js
	const api = "https://fakestoreapi.com/products/" + match.params.id;

  const fetchItems = async () =>{
    const data = await fetch(api);
    const  item = await data.json();
    console.log(api);
    setItems(item);

  }
  return (
    <div className="">
			<h1>{items.category}</h1>
			<h2>{items.title}</h2>
			<img src={items.image} width="30%" height="30%"/>
      <p>{items.description}</p>
			<p>price = {items.price}$</p>
    </div>
  );
}

export default Items;
