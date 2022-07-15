//TODO

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function CustomAlert(props){

    const {product, setProduct, onHide, show, productModalState} = props;
    const [title, setTitle] = useState("Success")

    return(
        <>
            <Modal
                  onHide={onHide}
                  show={show}
                  size="sm"
                  aria-labelledby="contained-modal-title-vcenter"
                  keyboard={false}
                  className={"customModalAlert"}
            >
                  <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                        {title}
                        </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    Something went wrong in the server.
                  </Modal.Body>
            </Modal>

        </>
    )
}

export default CustomAlert;