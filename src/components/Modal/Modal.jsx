import React, { Component } from 'react';
import { Backdrop, ModalContent } from './Modal.styled';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  //   componentDidMount() {}
  //   componentDidUpdate() {}
  //   componentWillUnmount() {}
  render() {
    return createPortal(
      <Backdrop>
        <ModalContent>{this.props.children}</ModalContent>
      </Backdrop>,
      modalRoot
    );
  }
}

export default Modal;
