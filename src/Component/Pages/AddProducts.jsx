import React, { useState } from 'react'
import '../../assets/Styles/addproducts.css'

const AddProducts = () => {
    let[formdata,setFormData]=useState({
        title:"",
        price:"",
        description:"",
        category:"",
        image:"",
        rating:{
            rate:"",
            count:""
        }
    })

    let handleinput=(e)=>{
        let key=e.target.name 
        let val=e.target.value

        if(key==="rate" || key==="count"){
          setFormData({
            ...formdata,
            rating:{
              ...formdata.rating,
              [key]:val
            }
          })
        } else{
           setFormData({
        ...formdata,
        [key]:val
       })
        }
    }

    let handleSubmit=(e)=>{
        e.preventDefault()
        fetch(`http://localhost:4000/products`,
           {
            method:'POST',
            headers:{'content-type':'application/json'},
            body:JSON.stringify(formdata)
           }
        )
        alert('product is added')
    }


  return (
    <>
      <div className="addproducts">
        <div className="header">
           <h1> Add Products</h1>
        </div>
        <div className="formbox">
            <form onSubmit={handleSubmit}>
                <input 
                  type="text"
                  placeholder='Enter Title' 
                  onChange={handleinput} 
                  name='title' 
                  value={formdata.title}
                 />
                <input 
                    type="text" 
                    placeholder='Enter Price' 
                    onChange={handleinput} 
                    name='price' 
                    value={formdata.price} 
                />
                <input 
                    type="text" 
                    placeholder='Enter Description' 
                    onChange={handleinput} 
                    name='description' 
                    value={formdata.description}
                />
                <select name='category' onChange={handleinput} >
                    <option value="">-----Select Category------</option>
                    <option value="men's clothing" >men's clothing</option>
                    <option value="jewelery">jewelery</option>
                    <option value="women's clothing" >women's clothing</option>
                    <option value="electronics" >electronics</option>
                </select >
                <input 
                    type="text" 
                    placeholder='Insert Image Path' 
                    onChange={handleinput} 
                    name='image' 
                    value={formdata.image}
                />
                <input 
                    type="text" 
                    placeholder='Enter Rate' 
                    onChange={handleinput} 
                    name='rate' 
                    value={formdata.rating.rate}
                />
                <input 
                    type="text" 
                    placeholder='Enter Count' 
                    onChange={handleinput} 
                    name='count' 
                    value={formdata.rating.count}
                />
                <button>Submit</button>
            
            </form>
        </div>
      </div>
    </>
  )
}

export default AddProducts