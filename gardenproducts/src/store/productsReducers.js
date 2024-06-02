const defaultState = {
  count: 0,
};

 export const productsReducer = (state = defaultState, action) => {
   switch (action.type) {
     case ROOT_URL + "categories/all":
       return { count: state.count + action.payload };

     default:
       return state;
   }
 };

 export default productsReducer