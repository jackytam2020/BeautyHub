import React, { useState, useEffect } from 'react';
import './MediaCard.scss';

import Modal from 'react-modal';
import VideoModal from '../VideoModal/VideoModal';
import PlayIcon from '../../assets/icons/play-icon.svg';

function MediaCard(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

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
    <div
      className="media-card__container"
      onClick={() => {
        setModalIsOpen(true);
      }}
    >
      <div className="media-card__modal">
        <VideoModal
          videoSrc={props.reelUrl}
          modalIsOpen={modalIsOpen}
          setModalIsOpen={setModalIsOpen}
        />
      </div>
      <img src={PlayIcon} className="media-card__play-icon" alt="play-icon" />
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
    <div className="media-card">
      {props.type === 'picture' ? imgCard : videoCard}
    </div>
  );
}

export default MediaCard;
