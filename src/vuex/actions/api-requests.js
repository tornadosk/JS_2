// Coudn't figure the way rather then modify data to add into db. So to use side api data we have to add on the way and modify after receiving. 
// Migration of db doesnt seem like a solution since all rendering is based on curent structure/

import axios from "axios";

export default {
  GET_PRODUCTS_FROM_API({commit}) {
    return axios('http://localhost:3000/products', {
      method: "GET"
    })
      .then((products) => {
        commit('SET_PRODUCTS_TO_STATE', products.data);
        return products;
      })
      .catch((error) => {
        console.log(error)
        return error;
      })
  },
  
}
//
// http://localhost:3000/products
// async function axiosTest() {
//   const response = await axios.get('https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/catalogData.json')
//   console.log(response);
//   return response.data 
// }
