import Styles from "./components/Styles";
import Outfit from "./components/Outfit";
import clothing from "./data";
import { useState } from "react";

const App = () => {
  const [top, setTop] = useState();
  const [bottom, setBottom] = useState();
  const [shoes, setShoes] = useState();

  const getNewOutfit = (style) => {
    const filteredTops = clothing.filter(
      (item) => item.dressCode === style && item.type === "top"
    );
    const filteredBottoms = clothing.filter(
      (item) => item.dressCode === style && item.type === "bottom"
    );
    const filteredShoes = clothing.filter(
      (item) => item.dressCode === style && item.type === "shoes"
    );

    const randomTop =
      filteredTops[Math.floor(Math.random() * filteredTops.length)];
    const randomBottom =
      filteredBottoms[Math.floor(Math.random() * filteredBottoms.length)];
    const randomShoes =
      filteredShoes[Math.floor(Math.random() * filteredShoes.length)];

    setTop(randomTop);
    setBottom(randomBottom);
    setShoes(randomShoes);
  };

  return (
    <div className="main">
      <h1>Outfit Planner</h1>
      <h5>FIND WHAT TO WEAR</h5>
      <Styles getNewOutfit={getNewOutfit} />
      <Outfit top={top} bottom={bottom} shoes={shoes} />
    </div>
  );
};

export default App;
