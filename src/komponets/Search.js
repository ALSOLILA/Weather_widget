import React from 'react'

function Search({getSearch}) {

    const handleSearch = (e)=> {
        e.preventDefault()
        getSearch(e.target.value)
    }

  return (
    <div className="search">
        <h2> Weather Widget</h2>
       <input type="search" onKeyUp={handleSearch} placeholder='Enter location' /> 

    </div>
  )
}

export default Search