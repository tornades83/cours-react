import React, {useEffect, useState} from 'react'
import axios from 'axios';
import { useLocation } from 'react-router-dom';


const Article = () => {

    const [data, setData] = useState();
let location = useLocation()
console.log("location", location.pathname.slice(9))
   useEffect(() => {
    axios.get('https://catch-me-if-you-can--3c240d.appdrag.site/api/getApiId', {
        params: {
          "id" : location?.pathname?.slice(9),
          "AD_PageNbr" : "1",
          "AD_PageSize" : "500"
        }
      }).then(function(response){
        console.log(response.data);
        setData(response.data.Table[0])
      });

   }, []);
  return (
    <div className='container bg-secondary'>
        <div className='row'>
            <div className='col-10 bg-light shadow rounded-3'>
                {data &&
                <>
                <div>{data.id}</div>
                <h1 className='text-center'>{data.title}</h1>
                <p className='p my-4'>{data.article}</p>
                <img src={data.image} alt=""/>
                <p>
                    auteur : {data.auteur}
                    </p>

                </>
                }
            </div>
        </div>

    </div>
  )
}

export default Article