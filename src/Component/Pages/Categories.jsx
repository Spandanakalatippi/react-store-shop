import React, { useEffect, useState } from 'react'
import '../../assets/styles/products.css'
import axios from 'axios'



const Categories = () => {
    let [products, setProducts] = useState([])
    let [proname, setProName] = useState('')
    let [category, setCategory] = useState([])

    let fetchapi = async () => {
        let resp = await fetch(`http://localhost:4000/products`)
        let apidata = await resp.json()
        setProducts(apidata)
    }

    useEffect(() => {
        fetchapi()
    }, [])

    //To check category we use
    //   products.map((elem)=>{
    //     console.log(elem.category)
    // })

    let handleClick = (e) => {
        let listvalue = e.target.innerText
        let filtareData = products.filter((elem) => {
            return elem.category === listvalue
        })
        setCategory(filtareData)
    }

    let deleteProduct = async (id) => {
        let bool = window.confirm('do you want to delete this item')
        if (bool) {
            await axios.delete(`http://localhost:4000/products/${id}`)
            alert('Product item is  Deleted')
        }
        else {
            alert('Product item is not Deleted')
        }
    }
    let addcart = async (id) => {
        //   let x=await axios.get(`http://localhost:4000/products/${id}`)
        //   console.log(x.data)

        let cartdata = products.filter((elem) => {
            return elem.id === id
        })
        //  console.log(...cartdata)


        let bool = window.confirm(`Do you want to add the products to cart...?`)
        if (bool) {
            fetch('http://localhost:4000/cartitems', {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(...cartdata)

            })
            alert("Products is Added to cart")
        }
        else {
            alert("Products Item is Not added")
        }
    }





    return (
        <>


            <div className="category">
                <div className="category-list">
                    <ul>
                        <li onClick={handleClick}>men's clothing</li>
                        <li onClick={handleClick}>jewelery</li>
                        <li onClick={handleClick}>electronics</li>
                        <li onClick={handleClick}>women's clothing</li>
                    </ul>
                </div>
                <div className="category-result">
                    {category.map((elem, index) => {
                        let { id, title, price, description, category, image, rating } = elem
                        return (
                            <div className="card" key={index}>
                                <div className="catago">{category}</div>
                                <div className="image"><img src={image} alt="" /></div>
                                <div className="title">{title}</div>
                                <div className="car">
                                    <div className="rating"><button>3.5 .*</button>(1,300)</div>
                                    <div className="price">{price}/-</div>
                                </div>
                                <div className="desc">{description}</div>
                                <div className="cart">
                                    <button className='cart' onClick={() => addcart(id)}>Add to cart</button>
                                    <button
                                        className="delet"
                                        onClick={() => deleteProduct(id)}
                                    >
                                        Delete
                                    </button>

                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            {/* showing filtered products */}

        </>
    )
}



export default Categories

