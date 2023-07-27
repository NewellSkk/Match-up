import "./styles.css";
import {useEffect, useState} from 'react';

function Square({value,match,clickFn,select}) {
  return (
    <div className="Square" 
    onClick={
      (e)=>{
        clickFn(e,match)
      }} >
      {value}
    </div>
  );
}

function BigBox({arr,type,select,setSelect,highlight}){

  let clickFn=(e,val)=>{
    setSelect(val);
    let preClicked=document.getElementsByClassName("Clicked")[0];
    if(preClicked!=null){
       preClicked.classList.remove("Clicked");
     }
     e.target.classList.add("Clicked");
  }
 
  let entries=arr.map((element,index)=>{
    return(
      <Square 
      value={element}
      key={index}
      match={element}
      clickFn={(e,value)=>clickFn(e,value) }
    />
    );
  })

  entries=shuffleArray(entries);
  return(
    <div className={type}>
      <h1>{type}</h1>
      <div>{entries}</div>
    </div>
  );
}

function Screen({ info }) {
  
  const [countries, setCountries] = useState(INFO.map(each => each.country));
  const [capitals, setCapitals] = useState(INFO.map(each => each.capital));
  let [selectCountry,setSelectCountry]=useState('');
  let [selectCapital,setSelectCapital]=useState('');

  

  useEffect(() => {
    if (selectCountry && selectCapital) {
      const foundRegion = INFO.find(each => each.country === selectCountry);
      if (foundRegion) {
        if (selectCapital === foundRegion.capital) {
          setCountries(prev => prev.filter(each => each !== selectCountry))
          setCapitals(prev => prev.filter(each => each !== selectCapital));
          document.getElementsByClassName('Clicked')[0].classList.remove('Clicked')
          setSelectCapital('');
          setSelectCountry('');
      
        } else {
          document.getElementsByClassName('Clicked')[0].classList.remove('Clicked')
          setSelectCapital('');
          setSelectCountry('');
        }
      }
    }
  }, [selectCountry, selectCapital]);
  
  return(
    <div className="flex-container">
    <BigBox arr={countries} type="country" select={selectCountry} setSelect={setSelectCountry} />
    <BigBox arr={capitals} type="capital"select={selectCapital} setSelect={setSelectCapital} />
    </div>
  );
}


const shuffleArray = (array) => {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));

    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  return array;
};
let INFO = [
  { country: "Kenya", capital: "Nairobi" },
  { country: "Uganda", capital: "Kampala" },
  { country: "Egypt", capital: "Cairo" },
  { country: "Ghana", capital: "Accra" },
  { country: "Nigeria", capital: "Lagos" }
];
export default function App() {
  return (
    <>
      <Screen info={INFO} />
    </>
  );
}