import "./styles.css";
import {useState} from 'react';

function Square({value,match,matchFn}) {
  return (
    <div className="Square" 
    onClick={
      (e)=>{
        matchFn(e,match)
      }} >
      {value}
    </div>
  );
}
function BigBox({info,type}){
  let entries=[];

  let matchFn=(e,val)=>{
    alert(`${val} clicked`);
     let preClicked=document.getElementsByClassName("Clicked")[0];
     if(preClicked!=null){
       preClicked.classList.remove("Clicked");
     }
     e.target.classList.add("Clicked");
  }
  info.forEach(entry => {
    if (entries.indexOf(entry.country) === -1) {
      entries.push(
        <Square 
          value={(type==="country")?entry.country:entry.capital}
          key={entry.country}
          match={entry.country}
          matchFn={(e,value)=>matchFn(e,value) }
        />
      );
    }
  });
  entries=shuffleArray(entries);
  return(
    <div className={type}>
      <h1>{type}</h1>
      <div>{entries}</div>
    </div>
  );
}

function Screen({ info }) {
  return(
    <div className="flex-container">
    <BigBox info={info} type="country"/>
    <BigBox info={info} type="capital"/>
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