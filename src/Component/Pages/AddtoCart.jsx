import axios from 'axios'
import React, { useEffect, useState } from 'react'
import '../../assets/Styles/addtocart.css'

const Addtocart = () => {
    let [product, setProducts] = useState([])

    let fetchdata = async () => {
        let x = await fetch(`http://localhost:4000/cartitems`)
        let data = await x.json()
        setProducts(data)
    }

    useEffect(() => {
        fetchdata()
    }, [])

    let removeproduct = async (id) => {
        let bool = window.confirm('Do u want to remove')
        if (bool) {
            await axios.delete(`http://localhost:4000/cartitems/${id}`)

            setProducts(product.filter(item => item.id !== id))
        }
    }

    let total = product.reduce((sum, item) => {
        return sum + Number(item.price)
    }, 0)

    return (
        <>

            <div className="maincon">

                <table border={1}>
                    <thead>
                        <tr>
                            <th>Sl.No</th>
                            <th>Title</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Image</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {product.map((elem, index) => {
                            let { id, title, price, category, image } = elem
                            return (
                                <tr key={id}>
                                    <td>{index + 1}</td>
                                    <td>{title}</td>
                                    <td>{category}</td>
                                    <td>{price}</td>
                                    <td>
                                        <img src={image} alt="" style={{ height: '100px' }} />
                                    </td>
                                    <td>
                                        <button onClick={() => removeproduct(id)}>Remove</button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>


                <h2>Total Cost: ₹{total}</h2>
            </div>
        </>
    )
}

export default Addtocart
