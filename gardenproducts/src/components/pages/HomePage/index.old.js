import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories } from "../../API/index.js";
import { getAllDiscounts } from "../../API/index.js";
import { useEffect } from "react";
import styles from "./index.module.css";
import CategoriesPage from "../CategoriesPage/index.js";

function HomePage() {
  // const navigate = useNavigate();
  const categoryState = useSelector((store) => store.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCategories());
    dispatch(getAllDiscounts());
  }, [dispatch]);

  return (
    <div className={styles.home_container}>
      <div className={styles.banner}>
        <h1>Amazing Discounts on Garden Products!</h1>
        <button onClick={() => dispatch(getAllDiscounts())}>Check out</button>
      </div>
      <div className={styles.categories}>
        <h2>Categories</h2>
        {categoryState.map((el) => (
          <CategoriesPage key={el.id} {...el} />
        ))}
      </div>
      <div>
        <h2>5% off on the first order</h2>
        <img src="your_image_url_here" alt="Discount" />
        <form>{/* Add form fields here */}</form>
        <button>Get a discount</button>
      </div>
      <div>
        <h2>Sale</h2>
        {/* Add sale items here */}
      </div>
    </div>
  );
}

export default HomePage;
