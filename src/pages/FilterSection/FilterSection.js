import React, {useState} from 'react'

const object = [
    { id: 1, name: 'Produit 1', price: 10 },
    { id: 2, name: 'Produit 2', price: 20 },
    { id: 3, name: 'Produit 3', price: 30 },
    { id: 4, name: 'Produit 4', price: 40 },
    { id: 5, name: 'Produit 5', price: 50 }
]

const FilterSection = () => {
    const [data, setData] = useState(object);
const [inputValue, setInputValue] = useState(0);

console.log("imputValue", inputValue)

const handleFilter= () => {
    console.log("mas fonction est declencher")
    const FilterProducts = data.filter(product => product.price <= inputValue)
    console.log("FilterProducts", FilterProducts)
    setData(FilterProducts)
}
  return (
    <div className='container m-5'>

        <h2>List des produit</h2>
        <input type="number" value={inputValue}onChange={(e)=>setInputValue(e.target.value)} />
       <button onClick={()=> handleFilter()}>Filtrer les produit</button>
        {data?.map((product)=>(
           
           <div key={product.id}>{product.id}-{product.name}-{product.price}</div>
        ))

        }
    </div>
  )
}

export default FilterSection