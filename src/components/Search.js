import React , {useEffect, useState} from 'react'

function Search() {

const [search,setSearch]=useState("haa")

useEffect(
    ()=>{},[search]
)

  return (
    <div>
      <input value={search} onChange={(e)=>setSearch(e.target.value)} type="text" />


    </div>
  )
}

export default Search
