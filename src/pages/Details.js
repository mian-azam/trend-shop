import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import axios from "axios";

function Details() {
    const [product, setProduct] = useState('');
    const { id } = useParams();

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get(`https://makeup-api.herokuapp.com/api/v1/products/${id}.json`);
                setProduct(response.data);
                console.log(response.data)
                setProduct(response.data);
            } catch (error) {
                console.log(error.message);
            }
        }
        getData();
    }, [id]);

    return (
        <div className="detailPage">
            <Helmet>
                <title>Product details</title>
            </Helmet>
            <div className="productDetail container">
                <div className="img">
                    <img src={product.image_link} alt={`Poster for ${product.title}`} />
                </div>
                <div>
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    <h3>Type:</h3>
                    <p>{product.product_type}</p>
                    <h3>Rating:</h3>
                    <p>{product.rating} / 5</p>
                    <h3>Price:</h3>
                    <p>${product.price}</p>
                    <ul>
                        <Link to={product.product_link} target="blank">
                        <button className="buyBtn">Buy</button>
                        </Link>
                    </ul>
                </div>

            </div>
        </div>

    )
}

export default Details