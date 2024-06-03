import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { renderCategoriesAction } from "../../../store/categoriesReducer.js"
import { getAllCategories } from "../../../API/getAllCategories.js";
import { ROOT_URL } from "../../../API/index.js";
import styles from "./index.module.css";
import getAllDiscounts from "../../../API/getAllDiscounts.js";
import { renderDiscountAction } from "../../../store/discountReducer.js";
import products  from "../../../assets/images/order.form/products.svg";

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
        <h1>Amazing Discounts on Garden Products! </h1>
        <button
          className={styles.checkBtn}
          onClick={() => dispatch(renderDiscountAction())}
        >
          Check out
        </button>
      </div>
      <div className={styles.categories} src={ROOT_URL + "categories/all"}>
        <h2>Categories {categoryState.categories}</h2>
      </div>

      <div className={styles.getDiscount}>
        <div className={styles.wrapper}>
          <h2>5% off on the first order</h2>
          <img src={products} alt="Discount" />
          <form
            // onSubmit={handleSubmit(getDiscount)}
            className={styles.formWrapper}
          >
            <input
              type="text"
              placeholder="Name"
          />
        
    
            <input
              type="text"
              placeholder="Phone Number"
            />
         
            <input
              type="text"
              placeholder="Email"
           
            />
           
            {/* {!type ? (
              <button className={classes.getDiscountBtn} type="submit">
                Get a discount
              </button>
            ) : (
              <p className={classes.requestSubmited}>Request Submitted</p>
            )} */}
          </form>
          <button>Get a discount</button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
