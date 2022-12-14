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
        <div className="book-details-page__book-btn">
          <a
            href="https://www.fresha.com/a/beauty-et-al-toronto-86-yorkville-avenue-lw9w7mpl/booking?menu=true&dppub=true"
            target="_blank"
          >
            <Button text={'BOOK NOW'} size={'regular'} color={'pink'} />
          </a>
        </div>
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
