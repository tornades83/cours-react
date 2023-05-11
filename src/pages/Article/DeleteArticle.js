import React, {useRef, useState} from 'react'
import axios from "axios";

const DeleteArticle = () => {
  const inputRef = useRef(null);
  const [messageError, setMesageError] = useState(false);
  const [messageSuccess, setMessageSuccess] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    console.log(inputRef.current.value);
    console.log(inputRef.current.style.backgroundColor ='red');
   
   
    axios.get('https://crud-webscoll-98c465.appdrag.site/api/checkToken', {
      params: {
        token: localStorage.getItem("tokenPorteFolio"),
        "AD_PageNbr" : "1",
        "AD_PageSize" : "500"
      }
    }).then(function(response){
      if (response.data.table.length > 0) {
        axios.delete('https://crud-webscoll-98c465.appdrag.site/api/DeleteArticleprep', {
          params: {
            "id": inputRef.current.value
          }
        }).them(function (response){
          console.log(response.data);
          if (response.data.affectedRows > 0) {
            setMessageSuccess(true);
            setMesageError(false);
          }else{
            setMesageError(true);
            setMessageSuccess(false);
          }
        });
      
    }else{
      setMesageError(true);
    }
  });
};
  return (
   
    <form onSubmit={handleSubmit}>
      <h1>DeleteArticle</h1>
      <label>id of article : 
      <input type="text" ref={inputRef} />
       </label>
       <button type='submit'>envoyer</button>
       {messageError && <h1 className='text-danger'>Rien n'a ete suprimer</h1>  }
       {messageSuccess && <h1 className='text-sucess'>La supression a fonctionne</h1> }
       </form>
  )
}

export default DeleteArticle
