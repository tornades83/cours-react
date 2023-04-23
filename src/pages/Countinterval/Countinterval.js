import React, {useEffect, useState} from 'react'

const Countinterval = () => {


const [time, setTime] = useState(0);


useEffect(() => {
    const setIntervalId = setInterval(() => {
        setTime((prevstate) => (prevstate +1))
        
    
    
    }, 1000)
    return () => clearInterval(setIntervalId)
}, []);
  return (
    <h1>mon compteur tourne depuis : {time}</h1>
  )
}

export default Countinterval