import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { renderCategoriesAction } from "../../../store/categoriesReducer.js"
import { getAllCategories } from "../../../API/getAllCategories.js";
import { ROOT_URL } from "../../../API/index.js";
import styles from "./index.module.css";
import getAllDiscounts from "../../../API/getAllDiscounts.js";
import { renderDiscountAction } from "../../../store/discountReducer.js";


function HomePage() {

  const categoryState = useSelector((store) => store.categories);
   const discountState = useSelector((store) => store.discounts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCategories());
    dispatch(getAllDiscounts());
  }, []);


  return (
    <div className={styles.home_container}>
      <div className={styles.banner}>
        <h1>Amazing Discounts on Garden Products!</h1>
        <button onClick={() => dispatch(renderDiscountAction())}>
          Check out
        </button>
      </div>
      <div className={styles.categories} src={ROOT_URL + "categories/all"}>
        <h2>Categories {categoryState.categories}</h2>
        {/* {categoryState.categories.map((home) => (
          <div>test {home.name}</div>
        ))} */}

        {/* {categoryState.categories.forEach((el) => {
          <CategoriesPage key={el.id} {...el} />;
        })} */}
      </div>
      <div>
        <h2>5% off on the first order</h2>
        <img src="your_image_url_here" alt="Discount" />
        <form>{/* Add form fields here */}</form>
        <button>Get a discount</button>
      </div>
      <div>
        <h2>Sale </h2>
        {/* {discountState.map((products) => (
          <div key={products.id}>{products.title}</div>
        ))} */}
      </div>
    </div>
  );
}

export default HomePage;
