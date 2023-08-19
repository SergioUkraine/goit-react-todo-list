import React, { Component } from 'react';
import { Backdrop, ModalContent } from './Modal.styled';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');
let keyEvent = null;

class Modal extends Component {
  componentDidMount() {
    keyEvent = e => {
      if (e.code === 'Escape') {
        console.log('call');
        this.props.onEscPress();
      }
    };
    window.addEventListener('keydown', keyEvent);
  }
  //   componentDidUpdate() {}
  componentWillUnmount() {
    // window.removeEventListener('keydown', keyEvent);
  }
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
