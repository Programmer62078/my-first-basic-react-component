import Product from "./product.jsx";

function Producttab() {
  let styles = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div style={styles}>
      <Product tittle="logitech mx master" idx={0} />
      <Product tittle="apple pencil" idx={1} />
      <Product tittle="zebronix zeb transfor" idx={2} />
      <Product tittle="petronix to do 23" idx={3} />
    </div>
  );
}

export default Producttab;
// price - phir product - phir producttab - phir App.jsx dekho
