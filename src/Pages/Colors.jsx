import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../Styles/Colors.css'



const Colors = () => {
  const [colors,setColors]=useState([]);

  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/photos')
    .then((res)=>{setColors(res.data);
  })
  .catch((error)=>{
    console.error('Error fetching colors:',error);
  });
  },[]);

  return (
    <div className="container">
      <div className="row">
        {colors.map((image,index)=>(
          <div className='col-lg-3 col-md-6 col-sm-12 mb-4' key={index}>
            <div className="card">
              <img src={image.url} className='card-img-top' width={200} height={200}/>
              <div className='title'>{image.title}</div>
              </div>
              </div>
        ))}
      </div>
    </div>
  )
}

export default Colors