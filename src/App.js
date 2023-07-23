import "./styles.css";
import {useState} from 'react';

function Square({value,match,clickFn}) {
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
function BigBox({info,type,select,setSelect}){

  let entries=[];
  let clickFn=(e,val)=>{
    setSelect(prev=>{
      if(type==="country"){
        return{...prev,country:val}
      }else{
        return{...prev,capital:val}
      } 
    })
    console.log(select)
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
          clickFn={(e,value)=>clickFn(e,value) }
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
  let [select,setSelect]=useState({country:"",capital:""});
  
  return(
    <div className="flex-container">
    <BigBox info={info} type="country" select={select} setSelect={setSelect}/>
    <BigBox info={info} type="capital"select={select} setSelect={setSelect}/>
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