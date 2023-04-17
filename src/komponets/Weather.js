import React from 'react'

function Weather({data}) {
  return (
    <div className="weather">
        <h3>{data.location.name}</h3>
        
          <p>{data.current.condition.text}</p>
          <img src={data.current.condition.icon} alt={data.location.name} />
      
        <p>{data.current.temp_c} <span>&#8451;</span></p>
        <p>{data.current.is_day ? 'Day': 'Night'}</p>
    </div>
  )
}

export default Weather