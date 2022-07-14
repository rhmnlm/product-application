import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ProductModal(props){
      return(
            <Modal
                  {...props}
                  size="lg"
                  aria-labelledby="contained-modal-title-vcenter"
                  centered
                  backdrop="static"
                  keyboard={false}
            >
                  <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                        Create Product
                        </Modal.Title>
                        <p>
                              <Button onClick={props.onHide}>Back to listing</Button>
                        </p>
                  </Modal.Header>
                  <Modal.Body>
                  <h4>Centered Modal</h4>
                  <p>
                  Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                  dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                  consectetur ac, vestibulum at eros.
                  </p>
                  </Modal.Body>
                  <Modal.Footer>
                  <Button onClick={props.onHide}>Save</Button>
                  </Modal.Footer>
            </Modal>
      )
}

export default ProductModal