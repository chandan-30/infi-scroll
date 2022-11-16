import React, { useEffect } from 'react'
import {useContext, useState} from 'react'
import { UserContext } from './UserContext'

function Home() {
  let {user,setUser} = useContext(UserContext);
  let [state, setState] = useState([])
  let [title, setTitle] = useState({})
  let [page, setPage] = useState(1)

  
  useEffect(() => {
    fetch('https://dummyjson.com/products/'+page)
    .then(res => res.json())
    .then(json => {
      setState([...state,...json.images])
      let obj = {}
      obj['title'] = json.title;
      obj['price'] = '$'+json.price.toString()
      obj['stock'] = json.stock
      obj['brand'] = json.brand
      obj['category'] = json.category
      setTitle({...title,...obj})
    })
    console.log(state)
  }, [page])

  let scrollToEnd = () => {
    setPage(page + 1)
  }
  
  window.onscroll = function () {
      
    if (
        Math.abs(Math.trunc(window.innerHeight + document.documentElement.scrollTop) - document.documentElement.offsetHeight) < 10 
    ){
      
      scrollToEnd()
    }
  }
  return (
    <>

    
    <main style={{ padding: "1rem 0" }}>
      { user?
        <h2>welcome home {user}</h2>:''
        
      }
    </main>
    { user?
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-4'>
            <div className='vc'>
              <p>{title.title}</p>
              <p>price: {title.price}</p>
              <p>{title.brand}</p>
              <p>stock: {title.stock}</p>
              <p>{title.category}</p>

            </div>
        </div>
        <div className='col-8 cont'>
            <h3>{}</h3>
          {
            state.length && state.map((img, index) => {
              return <img key={index} src={img} /> 
            })
          }
        </div>
        
      </div>

    </div>:''
    }
    </>
  )
}

export default Home