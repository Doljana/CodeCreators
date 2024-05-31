import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories } from "../API/index.js";
import { useEffect } from "react";
import styles from "./index.module.css"

function HomePage() {

    const categories = useSelector((store) => store.categories);
    const dispatch = useDispatch()

    useEffect(()=> {     
      dispatch(getAllCategories(data.categories))
    }, [])


   
  return (
    <div className={styles.home_container}>
      <div className={styles.banner}>
        <h1>Amazing Discounts on Garden Products!</h1>
        <button onClick={() => dispatch(getAllDiscounts())}>Check out</button>
      </div>
      <div>
        <h2>Categories</h2>
      </div>
      <div>
        <h2>5% off on the first order</h2>
        <img></img>
        <form></form>
        <button>Get a discount</button>
      </div>
      <div>
        <h2>Sale</h2>
        
      </div>
      {/* <div>
        <button onClick={() => dispatch(getAllUsers())}>
          User list (async)
        </button>
      </div>
      <ul>
        {users.map((elem) => (
          <li onClick={() => dispatch(deleteAction(userId))} key={elem.id}>
            {elem.firstName}
          </li>
        ))}
      </ul> */}
    </div>
  );
}

export default HomePage;
