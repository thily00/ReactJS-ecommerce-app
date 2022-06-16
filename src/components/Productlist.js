import "../App.scss";
import { useState, useEffect } from "react";

function Productlist() {
  const [data, setData] = useState(null);
  const url = "https://otakod.es/hetic/ecommerce-api";

  useEffect(() => {
    fetch(`${url}/products?limit=20`)
      .then((response) => response.json())
      .then((response) => handleProducts(response));
  }, []);

  function handleProducts(response) {
    console.log(response.products);
    setData(response.products);
  }

  return (
    <>ok</>
    // <>
    //   {data &&
    //     data.map((product) => {
    //       return (
    //         <div key={product.id}>
    //           <p>{product.title}</p>
    //           <img soure={product.images.photos[0]} />
    //         </div>
    //       );
    //     })}
    // </>
  );
}

export default Productlist;
