import Price from "./price";
import "./product.css";

function Product({ tittle, idx }) {
  let oldpr = ["12495", "11900", "1599", "599"];
  let newpr = ["8999", "8599", "1129", "492"];
  let discription = [
    ["8000 dpi", "programmable button"],
    ["intuitive surface", "designed for ipad pro"],
    ["gold metal", "best polished"],
    ["wireless", "optical operation"],
  ];

  return (
    <div className="product">
      <h4>{tittle}</h4>
      <p>{discription[idx][0]}</p>
      <p>{discription[idx][1]}</p>
      <Price oldprice={oldpr[idx]} newprice={newpr[idx]} />
    </div>
  );
}

export default Product;

// price - phir product - phir producttab - phir App.jsx dekho
