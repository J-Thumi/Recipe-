import React , {useEffect, useState} from 'react'


const URL ="https://api.spoonacular.com/recipes/complexSearch"
const API_KEY="48845d35318a4d67a1e1ecf4333e6d14"

//

function Search() {

const [search,setSearch]=useState("pizza")

useEffect(
    ()=>{
        async function fetchData(){
const res = await fetch(`${URL}?query=${search}&apiKey=${API_KEY}`)
const data = await res.json()
console.log(data.results)
        }
        fetchData()
    },[search]
)

  return (
    <div>
      <input value={search} onChange={(e)=>setSearch(e.target.value)} type="text" />


    </div>
  )
}

export default Search
