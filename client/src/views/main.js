import React, {useState, useEffect} from 'react';
import Productform from '../components/productForm';
import ProductsList from '../components/ProductsList';
import axios from 'axios';

const Main = () => {
    const [products, setProducts] = useState([])
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(res=>{
                setProducts(res.data);
                setLoaded(true);
            });
    },[])

    const removeFromDom = productId => {
        setProducts(products.filter(product => product._id != productId));
    }

    return(
        <div>
        {loaded && <ProductsList products={products} removeFromDom={removeFromDom}/>}
        </div>
    )
}

export default Main;