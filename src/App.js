import "./styles.css";
function Square({value}) {
  return (
    <div className="Square" >
      {value}
    </div>
  );
}
function BigBox({data,type}){
  return(
    <div className={type}>
      <h1>{type}</h1>
      {data}
    </div>
  );
}

function Screen({ info }) {
 
  let Countries=[];
  let Capitals=[];

  info.forEach((element) => {
    if (Countries.indexOf(element.country) === -1) {
      Countries.push(
        <Square
          value={element.country}
          key={element.country}
        />);
        Capitals.push(
        <Square
          value={element.capital}
          key={element.capital}
        />
      );
      Capitals=shuffleArray(Capitals);
    }
  });
  return(
  <div className="flex-container">
  {<BigBox data={Countries} type="Country"/>}
  {<BigBox data={Capitals} type="Capital"/>}

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
