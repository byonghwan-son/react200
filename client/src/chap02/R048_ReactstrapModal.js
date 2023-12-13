import React, {useState} from 'react';
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";

function R048_ReactstrapModal(props) {

  const [modal, setModal] = useState(false)

  let toggle = () => {
    setModal(!modal)
  }

  return (
    <>
      <Button color={`warning`} onClick={toggle}>Modal 버튼</Button>
      <Modal isOpen={modal} fade={true} toggle={toggle}>
        <ModalHeader toggle={toggle}>Modal Header</ModalHeader>
        <ModalBody>
          The generated Lorem ipsum dolor sit amet.
        </ModalBody>
        <ModalFooter>
          <Button color={`primary`} onClick={toggle}>확인</Button>
          <Button color={`secondary`} onClick={toggle}>닫기</Button>
        </ModalFooter>
      </Modal>
    </>
  );
}

export default R048_ReactstrapModal;