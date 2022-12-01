import React from 'react';
import './VideoModal.scss';
import Modal from 'react-modal';

function VideoModal(props) {
  return (
    <div className="video-modal">
      <Modal
        isOpen={props.modalIsOpen}
        ariaHideApp={false}
        className="video-modal__modal-container"
        overlayClassName="video-modal__overlay"
      >
        <iframe width="100%" height="800px" src={props.videoSrc}></iframe>
      </Modal>
    </div>
  );
}

export default VideoModal;
