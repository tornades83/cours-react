import React, {useEffect, useState} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const UseEffectCompa = () => {
    const [data, setData] = useState();
useEffect(() => {

    axios.get('https://catch-me-if-you-can--3c240d.appdrag.site/api/getAlArticles', {
  params: {
    "AD_PageNbr" : "1",
    "AD_PageSize" : "500"
  }
}).then(function(response){
    console.log(response.data.Table);
  setData(response.data.Table)
});
}, []);
  return (
    <div className='container'>
        <h1>bienvenue dans le monde du code </h1>
        {
          data?.map((row)=>(
            <Link to={`/article/${row.id}`} >
                <div key={row.id} className='bg-secondary shadow-lg rounded m-3 p-3'>
                   <h2>{row.title}</h2>
                   <p>{row.article}</p>
                   <img src={row.image} className='img-fluid' alt='jkhkjhkj'/>
                   <p>{row.auteur}</p>
                   <button className='btn btn-danger' style={{ borderRadius: "50px"}}>alert</button>
            <button className='btn btn-info'>info</button>
            <button className='btn btn-success'>valide</button>
            <button className='btn btn-warning'>warning</button>
            </div>
              </Link>
            ))
        }
    </div>
  )
}

export default UseEffectCompa