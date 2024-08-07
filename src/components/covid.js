import React, {useEffect, useState} from 'react'
// import React, {useEffect, useState} from 'react'

import '../components/covid.css';

const Covid = () => {

    const [data, setData] = useState([])
    const getCovidData = async()=> {
        //store this link in the res variable data
        //either the fetch data will accepted or rejected it will shown later
        try {
            const res = await fetch('https://data.covid19india.org/data.json')
            const actualData = await res.json()
            setData(actualData.statewise.slice(0,39))
        } catch (error) {
            console.log(error);
        }
    }

  
    // use useEffect hook
    useEffect(() => {
        getCovidData()
    }, [])

  return (
    <section>
  <div>
    <h1>🔴 Live</h1>
    <h1>Live COVID 19 CORONA VIRUS TRACKER</h1>
    {data.map((item, index)=>(
      <div key={index}>
        <h1>INDEX {index + 1}</h1>
    <div className="content">
      <div className="one">
        <h4>OUR</h4>
        <h3>COUNTRY</h3>
        <h1 className='text'>PAKISTAN</h1>
      </div>
      <div className="two">
        <h4>TOTAL</h4>
        <h3>RECOVERED</h3>
        <h1 className='text'>{item.recovered}</h1>
      </div>
      <div className="three">
        <h4>TOTAL</h4>
        <h3>CONFIRMED</h3>
        <h1 className='text'>{item.confirmed}</h1>
      </div>
      <div className="four">
        <h4>TOTAL</h4>
        <h3>DEATH</h3>
        <h1 className='text'>{item.deaths}</h1>
      </div>
      <div className="five">
        <h4>TOTAL</h4>
        <h3>ACTIVE</h3>
        <h1 className='text'>{item.active}</h1>
      </div>
      <div className="six">
        <h4>LAST</h4>
        <h3>UPDATED</h3>
        <h1 className='text'>{item.lastupdatedtime}</h1>
      </div>
      <div className="seven">
        <h4>TOTAL</h4>
        <h3>DELTA CONFIRMED</h3>
        <h1 className='text'>{item.deltaconfirmed}</h1>
      </div>
      <div className="eight">
        <h4>TOTAL</h4>
        <h3>DELTA DEATHS</h3>
        <h1 className='text'>{item.deltadeaths}</h1>
      </div>
      <div className="nine">
        <h4>TOTAL</h4>
        <h3>DELTA RECOVERED</h3>
        <h1 className='text'>{item.deltarecovered}</h1>
      </div>
      <div className="ten">
        <h4>TOTAL</h4>
        <h3>MIGRATED OTHER</h3>
        <h1 className='text'>{item.migratedother}</h1>
      </div>
      <div className="eleven">
        <h4>TOTAL</h4>
        <h3>STATE</h3>
        <h1 className='text'>{item.state}</h1>
      </div>
      <div className="twelve">
        <h4>TOTAL</h4>
        <h3>STATE CODE</h3>
        <h1 className='text'>{item.statecode}</h1>
      </div>
    </div>
    </div>
    ))}

    
  </div>
  
</section>
  )
}

export default Covid
