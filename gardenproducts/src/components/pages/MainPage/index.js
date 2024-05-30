import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { getAllCategories } from "../API/index.js";
import { useEffect } from "react";


function HomePage() {

    const users = useSelector((store) => store.users.users)
    const dispatch = useDispatch()

    useEffect(()=> {     
      dispatch(getAllCategories(data.data))
    }, [])


   
  return (
    <div>
 
      <div>
        <button onClick={() => dispatch(deleteAction())}>Delete User</button>
        <button onClick={() => dispatch(filterByAgeAction())}>
          Filter users by age
        </button>
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
      </ul>
    </div>
  );
}

export default HomePage;
