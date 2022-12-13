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
          Cancel for free up to{' '}
          <span className="book-details-page__bolded">12 hours</span> ahead,
          otherwise you will be charged{' '}
          <span className="book-details-page__bolded">30% </span>of the service
          price for late cancellation or{' '}
          <span className="book-details-page__bolded">50%</span> for not showing
          up.
        </p>
        <Button text={'BOOK NOW'} size={'regular'} />
      </div>

      <div className="book-details-page__media-list">
        {mediaPlayers.map((media) => {
          return <MediaCard key={media.thumbnailUrl} {...media} />;
        })}
      </div>
    </div>
  );
}

export default BookDetails;
