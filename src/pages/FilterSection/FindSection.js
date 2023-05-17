import React, { useState, useEffect} from 'react'

const FindSection = () => {
    const [utilisateurs] = useState([
        { id: 1, nom: 'Alice', metier: "devloppeuse" },
        { id: 2, nom: 'Bob', metier: "camionneur" },
        { id: 3, nom: 'Charlie', metier: "agent de securite" },
        { id: 4, nom: 'David', metier: "animateur" },
        { id: 5, nom: 'Eve', metier: "formateur" },
        { id: 6, nom: 'Eva', metier: "cuisto" }
    ]);
    const [idRecherche, setIdRecherche] = useState("");
    const [userTrouver, setUserTrouver] = useState();
  const handleInputChange = (e) =>{
    console.log("fonction active", e.target.value)
    setIdRecherche(e.target.value)
  }
  const searchUser = () => {
    console.log( "searchUser open")
    const utilisateur  = utilisateurs.find(user => user.id === parseInt(idRecherche)    )
    console.log( "utilisateur", utilisateur)
    if(utilisateur){
        setUserTrouver(utilisateur)
    }else{
        setUserTrouver(null)
    }
  }
  

  return (
    <div className='container m-5'>
      <h1>FindSection</h1> 
      {utilisateurs.map((element, index) =>(
        <div className='bg-primary rounded-4 text-light m-3 p-5' key={index}>
            id : {element.id}
            <br />
            nom : {element.nom}
            <br />
            metier : {element.metier}
        </div>
      ))} 

        <input type="text" value={idRecherche} onChange={handleInputChange} />
        <button className='btn btn-info' onClick={() => searchUser()}>rechercher par id</button>
        {userTrouver ? (
            <div className='text-success'>utilisateur trouver : {userTrouver.nom} et son metier est : {userTrouver.metier}</div>
        )
        :
        (
           <h1 className='text-danger'>aucun utilisateur trouver!!</h1> 
        )
    }
    </div>
  )
}

export default FindSection