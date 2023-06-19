import { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';


const api = 'https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline';

function Products() {
    const [product, getProduct] = useState([]);
    const [sort, setSort] = useState(null);

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

    const handleSort = () => {
        let sortedProducts;
        let newSort;

        if (sort === "rating") {
            sortedProducts = [...product].sort((a, b) => b.price - a.price);
            newSort = "price";
        } else {
            sortedProducts = [...product].sort((a, b) => b.rating - a.rating);
            newSort = "rating";
        }

        getProduct(sortedProducts);
        setSort(newSort);
    };

    return (
        <div className="container">
            <div className="buttons">
                <button onClick={handleSort} className="sortBtn">Sort by {sort === "rating" ? "Price" : "Rating"}</button>
                <Link to={`/form`}>
                    <button className="addBtn">Customize Product</button>
                </Link>
            </div>
            <div className='products-container'>
                {product.map((p) => (
                    <div key={p.id} className='product'>

                        <Link to={`/products/${p.id}`}>
                            <img src={p.image_link} alt={`Poster for ${p.title}`} />
                        </Link>
                        <h3>{p.name}</h3>
                        <p>Rating: {p.rating}</p>
                        <p>Price: ${p.price}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Products