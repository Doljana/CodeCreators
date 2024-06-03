import { ROOT_URL } from ".";
import { renderDiscountAction } from "../store/discountReducer";

export function getAllDiscounts() {
  return function (dispatch) {
    fetch(ROOT_URL + "products/all")
      .then((res) => res.json())
      .then((data) => dispatch(renderDiscountAction(data.products)))
      .catch((error) => console.error(error));
  };
}
export default getAllDiscounts;
