import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'



export default function Detail() {
  const {id} = useParams()
  const [products, setProducts] = useState([]);
  // const navigate = useNavigate();
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
    .then((res)=>res.json())
    .then((json)=>setProducts(json))
    // console.log(products);
  }, []);
  // console.log(id);
  
  return (
    <div>
      {/* <h1>{products.title}</h1> */}
    </div>
  )
}

