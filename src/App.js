import "./styles.css";

function Square({type,value}) {
  return (
    <div className="Square">
      <div className={type}>{value}</div>
    </div>
  );
}

function Screen({info}){
  let bigBox=[];
  info.forEach(element => {
    if(bigBox.indexOf(element.country)===-1){
      bigBox.push(
        <Square type='Country' value={element.country} key={element.country}/>,
        <Square type='Capital' value={element.capital} key={element.capital}/>,
      )
    }
  
  });
  return(
    <>
      {bigBox}
    </>
  );  

}
let INFO = [
  { country: "Kenya", capital: "Nairobi" },
  { country: "Uganda", capital: "Kampala" },
  { country: "Egypt", capital: "Cairo" },
  { country: "Ghana", capital: "Accra" }
];
export default function App() {
  return (
    <>
      <Screen info={INFO} />
    </>
  );
}
