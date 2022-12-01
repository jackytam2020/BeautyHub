import React, { useState, useRef, useEffect } from 'react';
import './MediaCard.scss';
import Modal from 'react-modal';
import VideoModal from '../VideoModal/VideoModal';

function MediaCard(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const refOne = useRef(null);

  const openModal = () => {
    setModalIsOpen(true);
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
  }, []);

  const handleClickOutside = (e) => {
    setModalIsOpen(false);
  };

  const videoCard = (
    <div className="media-card__container">
      <div className="media-card__modal">
        <VideoModal
          videoSrc={props.reelUrl}
          modalIsOpen={modalIsOpen}
          setModalIsOpen={setModalIsOpen}
        />
      </div>
      <button onClick={openModal}>play</button>
      <img
        src={props.thumbnailUrl}
        className="media-card__thumbnail"
        alt={props.alt}
      />
    </div>
  );

  const imgCard = (
    <div className="media-card__container">
      <a target="_blank" href={props.reelUrl}>
        <img
          src={props.thumbnailUrl}
          className="media-card__thumbnail"
          alt={props.alt}
        />
      </a>
    </div>
  );
  return (
    <div
      className={props.size === 'large' ? 'media-card--large' : 'media-card'}
    >
      {props.type === 'picture' ? imgCard : videoCard}
    </div>
  );
}

export default MediaCard;
