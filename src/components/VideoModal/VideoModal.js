import React from 'react';
import './VideoModal.scss';
import Modal from 'react-modal';

function VideoModal({ modalIsOpen, videoSrc }) {
  return (
    <div className="video-modal">
      <Modal
        isOpen={modalIsOpen}
        ariaHideApp={false}
        className="video-modal__modal-container"
        overlayClassName="video-modal__overlay"
      >
        <iframe width="100%" height="800px" src={videoSrc}></iframe>
      </Modal>
    </div>
  );
}

export default VideoModal;
