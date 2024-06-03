import { ROOT_URL } from ".";
import { renderCategoriesAction } from "../store/categoriesReducer";

export function getAllCategories() {
  return function (dispatch) {
    fetch(ROOT_URL + "categories/all")
      .then((res) => res.json())
      .then((data) => dispatch(renderCategoriesAction(data.categories)))
      .catch((error) => console.error(error));
  };
}
export default getAllCategories;