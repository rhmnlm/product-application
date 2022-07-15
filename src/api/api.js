import axios from 'axios';

const BASE_PRODUCT_API = "http://localhost:8118/api/products";

class APIService {
    
    getProductsPaged(pageNumber, pageSizes){
        return axios.get(BASE_PRODUCT_API,
            {
                  params: {
                              pageNum: pageNumber,
                              pageSize: pageSizes
                        }
            });
    }

    getProductByCode(code){
      return axios.get(BASE_PRODUCT_API + "/" + code);
    }

    addNewProduct(product){
      return axios.post(BASE_PRODUCT_API,
        product
      )
    }

    updateProduct(product){
      return axios.put(BASE_PRODUCT_API + "/" + product.code,
        product
      )
    }
    

}

export default new APIService();
