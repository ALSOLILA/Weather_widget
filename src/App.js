import { useEffect, useState } from 'react';
import Search from "./komponets/Search";
import Weather from "./komponets/Weather";
import axios from 'axios';
import React from 'react';

function App() {
  const [search,setSearch] =useState()
  const [data,setData] =useState()

  useEffect(() => { 
    axios
      .get(`https://api.weatherapi.com/v1/current.json?key=52811879075747f98ca201629231404&q=${search}&aqi=yes`)
      .then(response => setData(response.data))
      .catch(e => console.log(e))
  },[search])

  const getSearch = (str) => {
    setSearch(str)
  }

  return (
    <div className="content">
      <Search getSearch={getSearch} />
      {data && <Weather data={data} />}
    </div>
  );
}

export default App;
