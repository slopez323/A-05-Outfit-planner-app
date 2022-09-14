import Styles from "./components/Styles";
import Outfit from "./components/Outfit";
import clothing from "./data";
import { useState } from "react";

const App = () => {
  const [data, setData] = useState([...clothing]);
  const [top, setTop] = useState();
  const [bottom, setBottom] = useState();
  const [shoes, setShoes] = useState();
  const [style, setStyle] = useState();

  return (
    <div className="main">
      <h1>Outfit Planner</h1>
      <h5>FIND WHAT TO WEAR</h5>
      <Styles setStyle={setStyle} />
      <Outfit />
    </div>
  );
};

export default App;
