import React from 'react';
import './BookDetails.scss';

import Button from '../../components/atoms/Button/Button';
import MediaCard from '../../components/MediaCard/MediaCard';
import { mediaPlayers } from '../../data/media';

function BookDetails(props) {
  return (
    <div className="book-details-page">
      <div className="book-details-page__header-copy">
        <h1 className="book-details-page__header">Booking Policy:</h1>
        <p className="book-details-page__disclaimer">
          Cancel for free up to 12 hours ahead, otherwise you will be charged
          30% of the service price for late cancellation or 50% for not showing
          up.
        </p>
        <Button text={'BOOK NOW'} size={'regular'} />
      </div>

      <div className="book-details-page__media-list">
        {mediaPlayers.map((media) => {
          return (
            <MediaCard key={media.thumbnailUrl} {...media} size={'large'} />
          );
        })}
      </div>
    </div>
  );
}

export default BookDetails;
