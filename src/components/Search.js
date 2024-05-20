import React , {useEffect, useState} from 'react'


const URL ="https://api.spoonacular.com/recipes/complexSearch"
const API_KEY="48845d35318a4d67a1e1ecf4333e6d14"

//
const data=[
    {
      "title": "The Hitchhiker's Guide to the Galaxy",
      "author": "Douglas Adams",
      "genre": "Science Fiction",
      "year": 1979
    },
    {
      "title": "To Kill a Mockingbird",
      "author": "Harper Lee",
      "genre": "Fiction",
      "year": 1960
    },
    {
      "title": "Pride and Prejudice",
      "author": "Jane Austen",
    "genre": "Romance",
      "year": 1813
    },
    {
      "title": "The Lord of the Rings",
      "author": "J. R. R. Tolkien",
      "genre": "Fantasy",
      "year": 1954
    },
    {
      "title": "One Hundred Years of Solitude",
      "author": "Gabriel García Márquez",
      "genre": "Magical Realism",
      "year": 1967
    },
    // ... (25 more entries)
    {
      "title": "The Martian",
      "author": "Andy Weir",
      "genre": "Science Fiction",
      "year": 2011
    },
    {
      "title": "Dune",
      "author": "Frank Herbert",
      "genre": "Science Fiction",
      "year": 1965
    },
    {
      "title": "Fahrenheit 451",
      "author": "Ray Bradbury",
      "genre": "Dystopian Fiction",
      "year": 1953
    },
    {
      "title": "The Handmaid's Tale",
      "author": "Margaret Atwood",
      "genre": "Dystopian Fiction",
      "year": 1985
    },
    {
      "title": "Animal Farm",
      "author": "George Orwell",
      "genre": "Satire",
      "year": 1945
    }
  ]
  
function Search({FoodData,setFoodData}) {

const [search,setSearch]=useState("pizza")

useEffect(
    ()=>{
        async function fetchData(){
// const res = await fetch(`${URL}?query=${search}&apiKey=${API_KEY}`)
// const data = await res.json()


  
console.log(data)
setFoodData(data)
// console.log(data.results)
// setFoodData(data.results)
        }
        fetchData()
    },[search]
)

  return (
    <div>
      <input value={search} onChange={(e)=>setSearch(e.target.value)} type="text" />
      {data.map((food)=>{
        <h1>{food.title}</h1>
      })}

    </div>
  )
}

export default Search
