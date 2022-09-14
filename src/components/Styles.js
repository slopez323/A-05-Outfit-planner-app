const Styles = ({ getNewOutfit }) => {
  return (
    <div className="styles">
      <h3>Fashion Styles / Dress Code</h3>
      <button onClick={() => getNewOutfit("casual")}>Casual</button>
      <button onClick={() => getNewOutfit("sport")}>Sport</button>
      <button onClick={() => getNewOutfit("formal")}>Formal</button>
    </div>
  );
};

export default Styles;
