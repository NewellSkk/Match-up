import "./styles.css";
import { useState } from "react";
function Square({ type, value, match }) {
  return (
    <div className="Square" onClick={() => match()}>
      <div className={type}>{value}</div>
    </div>
  );
}

function Screen({ info }) {
  let [Nat, setNat] = useState(" ");
  let [Cap, setCap] = useState(" ");
  let match = (value, type) => {
    alert(`clicked value:${value}`);
    if (type === "Capital") {
      e.target.className="Clicked";
      setCap(value);
      alert(`Clicked cap:${Cap}`);
    }
    if (type === "Country") {
      setNat(value);
      alert(`Clicked country:${Cap}`);
    }
    if (Cap === Nat) {
      alert(`Match ${Nat}`);
    } else {
      alert(`Nat:${Nat} Cap:${Cap}`);
    }
  };
  let bigBox = [];

  info.forEach((element) => {
    if (bigBox.indexOf(element.country) === -1) {
      bigBox.push(
        <Square
          type="Country"
          value={element.country}
          key={element.country}
          match={() => match(element.country, "Country")}
        />,
        <Square
          type="Capital"
          value={element.capital}
          key={element.capital}
          match={() => match(element.country, "Capital")}
        />
      );
    }
  });
  return <>{bigBox}</>;
}

// const shuffleArray = (array) => {
//   for (var i = array.length - 1; i > 0; i--) {
//     var j = Math.floor(Math.random() * (i + 1));

//     var temp = array[i];
//     array[i] = array[j];
//     array[j] = temp;
//   }

//   return array;
// };
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
