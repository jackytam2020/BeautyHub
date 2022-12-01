import React from 'react';
import './MediaSection.scss';
import MediaCard from '../MediaCard/MediaCard';
import { mediaPlayers } from '../../data/media';

function MediaSection(props) {
  return (
    <section className="media-section">
      <h1 className="media-section__header">
        Follow our journey @yorkville.beauty
      </h1>
      <div className="media-section__media-list">
        {mediaPlayers.map((media) => {
          return <MediaCard key={media.thumbnailUrl} {...media} />;
        })}
      </div>
    </section>
  );
}

export default MediaSection;
