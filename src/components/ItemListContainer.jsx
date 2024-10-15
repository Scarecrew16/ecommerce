import { useEffect, useState } from "react";
import data from "../mocks/data.json";

const ItemListContainer= () => {

    const [products, setProducts] = useState([])

    const getItems= () => {
        return new Promise((resolve, reject)=>{
            resolve(data);
            
        })
    }

    useEffect(()=>{
        getItems().then((res)=>{ 
            setProducts(res);
            
        })
    }, [])
    

  return (
    <div>
        { products.length > 0 &&
        <div>
            <img src={products[0].imagen} alt="" />
            <h2>{products[0].titulo}</h2>
            <p>{products[0].descripcion}</p>
        </div>
        }
    </div>
  )
}

export default ItemListContainer