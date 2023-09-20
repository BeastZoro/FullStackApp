import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../Context/Context";

const ProductView = () => {

    const {id} = useParams()

    const {products} = useContext(ProductContext)

    console.log(products)
    const FilteredProd = products.find((ele) => ele.id === Number(id))
    console.log(FilteredProd,id, "prodview")
  return (
    <section>
        <div>
    <p>Name : {id}</p>
        </div>
        <div>
            <p>Nmae</p>
        </div>
    </section>
  );
};

export default ProductView;
