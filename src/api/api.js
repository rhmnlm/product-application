import axios from 'axios';

const PRODUCT_LIST_PAGED = "http://localhost:8118/api/products";
const PRODUCT_BY_CODE = "http://localhost:8118/api/products/{code}";

class APIService {
    
    getProductsPaged(pageNumber, pageSizes){
        return axios.get(PRODUCT_LIST_PAGED,
            {
                  params: {
                              pageNum: pageNumber,
                              pageSize: pageSizes
                        }
            });
    }

    getProductByCode(){
      return axios.get();
    }

}

export default new APIService();
