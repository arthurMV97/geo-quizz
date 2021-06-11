import { useEffect, useState} from "react";
import QuizzBox from "../QuizzBox/QuizzBox";
import axios from 'axios';
import './App.scss'

const API = "https://restcountries.eu/rest/v2/all"
function App() {

  const [countriesArray, setCountriesArray] = useState([])

  useEffect(() => {
    const getData = async () => {
      const res  = await axios.get(API)
      setCountriesArray(res.data)
    }
    getData()
  })
  return (
    <div className="app-container">
      <h1 data-test="title">Geo Quizz</h1>
      {countriesArray.length > 0 && <QuizzBox countries={countriesArray} data-test="quizzbox-component"/>}
    <p className="infos" data-test="infos-footer" >Arthur Morin - 2021</p>
    </div>
  );
}

export default App;
