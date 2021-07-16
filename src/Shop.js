import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import './App.css';

function Shop() {
  useEffect(() =>{
    fetchItems();
  },[]);

  const [items, setItems] = useState([]);

  const fetchItems = async () =>{
    const data = await fetch("https://fakestoreapi.com/products?limit=7");
    const  item = await data.json();
    console.log(item);
    setItems(item);
  }
  return (
    <div className="">
      <h1>Shop fuck you</h1>
      {
        //display all items got from api request
        items.map(item=>(
            <h1 key={item.id}>
              <Link to={"/shop/" + item.id} >{item.title}</Link>
            </h1>
          )
        )
      }
    </div>
  );
}

export default Shop;
