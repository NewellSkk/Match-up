import React, { useEffect, useState } from 'react';
import './styles.css'

const REGIONS = [
  { country: "Kenya", capital: "Nairobi" },
  { country: "Uganda", capital: "Kampala" },
  { country: "Egypt", capital: "Cairo" },
  { country: "Ghana", capital: "Accra" },
  { country: "Nigeria", capital: "Lagos" }
];

const App = () => {

  const [countries, setCountries] = useState(REGIONS.map(each => each.country));
  const [capitals, setCapitals] = useState(REGIONS.map(each => each.capital));

  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedCapital, setSelectedCapital] = useState('');

  useEffect(() => {
    if (selectedCountry && selectedCapital) {
      const foundRegion = REGIONS.find(each => each.country === selectedCountry);
      if (foundRegion) {
        if (selectedCapital === foundRegion.capital) {
          setCountries(prev => prev.filter(each => each !== selectedCountry))
          setCapitals(prev => prev.filter(each => each !== selectedCapital));
          setSelectedCapital('');
          setSelectedCountry('');
        } else {
          setSelectedCapital('');
          setSelectedCountry('');
        }
      }
    }
  }, [selectedCountry, selectedCapital]);

  return (
    <div className='overall'>
      <ul>
        {countries.map((each, index) => {
          return (
            <li className={selectedCountry === each && 'selected'} onClick={() => { setSelectedCountry(each) }} key={index}>{each}</li>
          )
        })}
      </ul>
      <ul>
        {capitals.map((each, index) => {
          return (
            <li className={selectedCapital === each && 'selected'} onClick={() => { setSelectedCapital(each) }} key={index}>{each}</li>
          )
        })}
      </ul>
    </div>
  )
}

export default App
