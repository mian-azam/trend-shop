import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import axios from "axios";

function Details() {
    const [product, setProduct] = useState('');
    const { id } = useParams();

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get(`http://makeup-api.herokuapp.com/api/v1/products/${id}.json`);
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
        <div>
            <img src={product.image_link} alt={`Poster for ${product.title}`} />
        </div>
    )
}

export default Details