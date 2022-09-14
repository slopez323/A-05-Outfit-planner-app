const Outfit = ({ top, bottom, shoes }) => {
  return (
    <div className="outfit">
      {top && bottom && shoes && (
        <>
          <h4>TOP</h4>
          <img src={top.imageUrl}></img>
          <p>{top.description}</p>
          <h4>BOTTOM</h4>
          <img src={bottom.imageUrl}></img>
          <p>{bottom.description}</p>
          <h4>SHOES</h4>
          <img src={shoes.imageUrl}></img>
          <p>{shoes.description}</p>
        </>
      )}
    </div>
  );
};

export default Outfit;
