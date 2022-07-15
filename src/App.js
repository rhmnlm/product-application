import './App.css';
import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container } from 'react-bootstrap';
import APIService from "./api/api";
import Pagination from './component/Pagination';
import ProductModal from './component/ProductModal';
import CustomAlert from './component/Alert';

function App() {

      const [data, setData] = useState(null);

      const [product, setProduct] = useState({});

      const [page, setPage] = useState({
            pageNum: 0,
            pageSize: 5
            })

      const [modalShow, setModalShow] = useState(false);

      const [alertShow, setAlertShow] = useState(false);

      const [alertContent, setAlertContent] = useState({
            title: "",
            type: "",
            message: ""
      })

      const alertState = {
            alertContent, setAlertContent, alertShow, setAlertShow
      }

      //1. Create 2. Edit
      const [productModalState, setProductModalState] = useState("Create");

      useEffect(() => {
            APIService.getProductsPaged(page.pageNum, page.pageSize).then((response)=>{
                  setData(response.data)
                  console.log(response)
            })
      }, [page]);

      function onClickItem(products){
            setProduct(products)
            setModalShow(true)
            setProductModalState("Edit")
      }

      function onAddNewItem(e){
            setProduct()
            setModalShow(true)
            setProductModalState("Create")
      }

  if(!data) return <>Error!</>;

  return (
    <div className="App">
        <Container>
            <div className="mb3">
                  <Button variant='primary' onClick={() => onAddNewItem()} style={{display:"flex", justifyContent:"left", marginBottom:"5pt", marginTop: "5pt"}}>Create New Product</Button>
            </div>
            <Table striped bordered hover>
                  <thead>
                        <tr>
                              <th>
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
                                                            <a href="# " onClick={() => onClickItem(products)}>
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
        <ProductModal alertState={alertState} show={modalShow} onHide={() => setModalShow(false)} product={product} setProduct={setProduct} productModalState={productModalState}/>
        <CustomAlert alertState={alertState} onHide={()=> setAlertShow(false)}/>
    </div>
  );
}

export default App;
