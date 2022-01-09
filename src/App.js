import React, { useEffect, useState } from 'react';
import './App.css';
import Axios from 'axios'

function App() {

  const [city, setCity] = useState('');
  const [cityList, setCityList] = useState([]);

  useEffect(()=> {
    Axios.get('https://nodejs-react-mysql.herokuapp.com/api/get').then((response)=> {
      setCityList(response.data);
    })
  }, [])

  const addCity = () =>{
     Axios.post('https://nodejs-react-mysql.herokuapp.com/api/insert', {
       city: city
      })
        setCityList([
          ...cityList, 
          {city: city}
        ])
     
  }


  return (
    <div className="App">
     <h2>Cities</h2>
     <div className="form">
     <input type="text" name="city"
     onChange={(e)=>{
       setCity(e.target.value);
     }} />

     <button onClick={addCity}>ADD</button>
     <hr/>
     {cityList.map((val)=>{
        return (
        <div className='card'> 
        <p>{val.city}</p>
        </div>
        )
     })}
     </div>
    </div>
  );
}

export default App;
