import './App.css';
import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import APIService from "./api/api";
import Pagination from './component/Pagination';
import ProductModal from './component/ProductModal';

function App() {

      const [data, setData] = useState(null);

      const [page, setPage] = useState({
            pageNum: 0,
            pageSize: 5
            })

      const [modalShow, setModalShow] = useState(false);

      useEffect(() => {
            APIService.getProductsPaged(page.pageNum, page.pageSize).then((response)=>{
                  setData(response.data)
                  // setPage(
                  //       {
                  //             ...page,
                  //             lastPage: response.data.totalPages -1
                  //       }
                  // )
                  console.log(response)
            })
      }, [page]);

  if(!data) return null;

  return (
    <div className="App">
        <Container>
            <Table striped bordered hover>
                  <thead>
                        <tr>
                              <th><button onClick={() => setModalShow(true)}>show table data</button>
                                    ID</th> <th>Code</th> <th>Name</th> <th>Category</th> <th>Brand</th> <th>Type</th> <th>Description</th>
                        </tr>
                  </thead>
            <tbody>
                  {data.content ?
                        <>
                              {data.content.map(products=>{
                                    return(
                                          <>
                                                <tr key={products.id}>
                                                      <td>{products.id}</td>
                                                      <td>
                                                            <a href="# ">
                                                            {products.code}
                                                            </a>
                                                      </td>
                                                      <td>{products.name}</td>
                                                      <td>{products.category}</td>
                                                      <td>{products.brand}</td>
                                                      <td>{products.type}</td>
                                                      <td>{products.description}</td>
                                                </tr>
                                          </>
                                    )
                              })}
                        </>
                        :
                        <></>
                  }
            </tbody>
          </Table>
          <Pagination page={page} setPage={setPage} lastPage={data.totalPages}/> 
        </Container>
        <ProductModal show={modalShow} onHide={() => setModalShow(false)}/>
    </div>
  );
}

export default App;
