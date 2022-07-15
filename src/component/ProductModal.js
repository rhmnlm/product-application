import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import APIService from "../api/api";
import { useState } from 'react';

function ProductModal(props){

      const {product, setProduct, onHide, show, productModalState, alertState} = props;

      const {alertContent, setAlertContent, alertShow, setAlertShow} = alertState;

      const [formValidation , setFormValidation] = useState({
            code: true,
            name: true,
            category: true
      })

      function onSaveClick(product){

            //validation
            
            //let validated = validate(product)
            let validated = true

            if(validated === true){
                  productModalState === "Create" ?
                        APIService.addNewProduct(product)
                        .then(()=>{
                              setAlertContent({
                                    ...alertContent,
                                    title: "Success",
                                    type: "Success",
                                    message: "Successfully added a product"
                              })

                              setAlertShow(true)
                        })
                        .catch((error)=>{
                              setAlertContent({
                                    ...alertContent,
                                    title: "Error",
                                    type: "Fail",
                                    message: "There's something wrong in the server"
                              })

                              setAlertShow(true)
                        })
                        :
                        APIService.updateProduct(product)
                        .then(()=>{
                              setAlertContent({
                                    ...alertContent,
                                    title: "Success",
                                    type: "Success",
                                    message: "Successfully update the product"
                              })
                              setAlertShow(true)
                        })
                        .catch((error)=>{
                              setAlertContent({
                                    ...alertContent,
                                    title: "Error",
                                    type: "Fail",
                                    message: "There's something wrong in the server"
                              })

                              setAlertShow(true)
                        })
                  onHide();
            }
            
      }

      function onInputChange(e){
            //e.target.value && e.target.id
            setProduct({
                  ...product,
                  [e.target.id]: e.target.value
            })
      }

      //TODO
      function validate(product){

            product && product.code? product.code === '' ? 
                  setFormValidation({...formValidation, code:false}) : setFormValidation({...formValidation, code:true})
                  : setFormValidation({...formValidation, code:false});

            
            product && product.name? product.name === '' ? 
                  setFormValidation({...formValidation, name:false}) : setFormValidation({...formValidation, name:true})
                  : setFormValidation({...formValidation, name:false});
            
            product && product.category? product.category === '' ? 
                  setFormValidation({...formValidation, category:false}) : setFormValidation({...formValidation, category:true})
                  : setFormValidation({...formValidation, category:false});
            
            // if(product && product.category !== '' && product && product.name !== '' && product && product.code !== '')
            //       return true;
            
            return false;
      }

      return(
            <Modal
                  onHide={onHide}
                  show={show}
                  size="lg"
                  aria-labelledby="contained-modal-title-vcenter"
                  centered
                  backdrop="static"
                  keyboard={false}
            >
                  <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                        {productModalState? productModalState : 'undefined'} Product
                        </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                        <div className="mb-3">
                              <label className="form-label" htmlFor="code">Code*</label>
                              <input placeholder={product? product.code : 'Enter Code'} type="text" id="code" className="form-control" onChange={(e)=>onInputChange(e)}/>
                              <small className="form-text" style={{display:`${formValidation.code? 'none': ''}`,color:'red'}}>Code cannot be empty</small>
                        </div>
                        <div className="mb-3">
                              <label className="form-label" htmlFor="name">Name*</label>
                              <input placeholder={product? product.name : 'Enter Name'} type="text" id="name" className="form-control" onChange={(e)=>onInputChange(e)}/>
                              <small className=" form-text" style={{display:`${formValidation.name? 'none': ''}`, color:'red'}}>Name cannot be empty</small>
                        </div>
                        <div className="mb-3">
                              <label className="form-label" htmlFor="category">Category*</label>
                              <input placeholder={product? product.category : 'Enter Category'} type="text" id="category" className="form-control" onChange={(e)=>onInputChange(e)}/>
                              <small className=" form-text" style={{display:`${formValidation.category? 'none': ''}`, color:'red'}}>Category cannot be empty</small>
                        </div>
                        <div className="mb-3">
                              <label className="form-label" htmlFor="brand">Brand</label>
                              <input placeholder={product? product.brand : 'Enter Brand'} type="text" id="brand" className="form-control" onChange={(e)=>onInputChange(e)}/>
                        </div>
                        <div className="mb-3">
                              <label className="form-label" htmlFor="type">Type</label>
                              <input placeholder={product? product.type : 'Enter Type'} type="text" id="type" className="form-control" onChange={(e)=>onInputChange(e)}/>
                        </div>
                        <div className="mb-3">
                              <label className="form-label" htmlFor="description">Description</label>
                              <textarea rows={5} placeholder={product? product.description : 'Enter Description'} type="text" id="description" className="form-control" onChange={(e)=>onInputChange(e)}/>
                        </div>
                  </Modal.Body>
                  <Modal.Footer>
                  <Button onClick={()=>onSaveClick(product)}>Save</Button>
                  </Modal.Footer>
            </Modal>
      )
}

export default ProductModal