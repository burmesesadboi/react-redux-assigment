import axios from "axios";

export const getProducts = () => {
  const apiURL = "http://localhost:8080/products";
  return async (dispatch) => {
    try {
      await axios.get(apiURL).then((e) =>
        dispatch({
          type: "GET_PRODUCTS",
          payload: e.data,
        })
      );
    } catch (err) {
      console.log("ERROR WHILE FETCHING DATA:", err);
    }
  };
};
