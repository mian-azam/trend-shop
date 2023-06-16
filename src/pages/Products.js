import { useState, useEffect } from "react";
import axios from 'axios';

const api = 'http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline';

function Products() {
    const [product, getProduct] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get(`${api}`);
                getProduct(response.data);
                console.log(response.data)
            } catch (error) {
                console.log(error.message);
            }
        }
        getData();
    }, []);

    return (
        <div className='movies-container'>
            {product.map((p) => (
                <div key={p.id} className='movie'>
                    <h3>{p.name}</h3>
                    <img src={p.image_link} alt={`Poster for ${p.title}`} />
                </div>
            ))}
        </div>
    )
}

export default Products