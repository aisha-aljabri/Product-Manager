import React from 'react'
import { Link, navigate } from '@reach/router';
import axios from 'axios';
import "../styles/productlist.css"
export default props => {

    const { removeFromDom } = props;
    const deleteproduct = (productId) => {
        
        axios.delete('http://localhost:8000/api/products/' + productId)
            .then(res => {
                removeFromDom(productId)
            })
    }

    return (
        <div id="productList">
            <h1>All Products</h1>
            <table>
                <tr>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Description</th>
                    <th>Action</th>
                </tr>
                {props.products.map((product, id)=>{
                return(
                    <tr>
                        <td><Link key={id} to = {`/api/products/${product._id}`}>{product.title}</Link></td>
                        <td>{product.price}</td>
                        <td>{product.description}</td>
                        <td>
                            <button onClick={(e)=>{deleteproduct(product._id)}}> Delete </button> 
                            <button onClick={(e)=>navigate("/api/products/"+product._id+"/edit")}> Edit </button>
                        </td>
                    </tr>)
                
                
            })}
            </table>
            <button onClick={e => navigate("/products/new")}>Add Product</button>
            
        </div>
    )
}