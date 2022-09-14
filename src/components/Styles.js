const Styles = ({ setStyle }) => {
  return (
    <div>
      <h3>Fashion Styles / Dress Code</h3>
      <button onClick={() => setStyle("casual")}>Casual</button>
      <button onClick={() => setStyle("sport")}>Sport</button>
      <button onClick={() => setStyle("formal")}>Formal</button>
    </div>
  );
};

export default Styles;
