import React, { useState } from 'react';
import axios from 'axios'
import { navigate } from "@reach/router";


const Productform = () => {
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
    
    const handleform = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/products/new', {
            title,
            price,
            description
        })
        .then(res => console.log(res))
        .catch(err => console.log(err))
        navigate("/")
}

    return (
        <>
        <h1>new Product</h1>
        <form onSubmit={handleform}>
        <p>
            <label>Title </label>
            <input type="text" onChange={(e) => setTitle(e.target.value)} />
        </p>

        <p>
            <label>Price </label>
            <input type="text" onChange={(e) => setPrice(e.target.value)} />
        </p>
        <p>
            <label>Description </label>
            <input type="text" onChange={(e) => setDescription(e.target.value)} />
        </p>
        <input type="submit" value="Add"/>
        </form>
        </>
        
    
    )
    
}

export default Productform;