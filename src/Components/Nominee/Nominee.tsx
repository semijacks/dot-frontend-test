import React from 'react';
import { Votes } from '../Ballot/Ballot';
import './Nominee.css';

interface NomineeProps {
  categoryTitle: string;
  nomineeTitle: string;
  nomineePhotoUrL: string;
  nomineeId: string;
  votes: Votes;
  setVotes: React.Dispatch<React.SetStateAction<{}>>;
}

const Nominee = ({
  categoryTitle,
  nomineeTitle,
  nomineePhotoUrL,
  nomineeId,
  votes,
  setVotes,
}: NomineeProps) => {
  const handleClick = () => {
    const newVotes = { ...votes, [categoryTitle]: nomineeTitle };
    setVotes(newVotes);
  };

  const addActiveClass = (title: string): string | null => {
    const isActive = votes[categoryTitle] === title ? 'active' : null;
    return isActive;
  };

  const isButtonActive = (title: string): boolean => {
    const isActive = votes[categoryTitle] !== title ? false : true;
    return isActive;
  };

  return (
    <div className={`nominee-card ${addActiveClass(nomineeTitle)}`}>
      <p className='nominee-card-heading'>{nomineeTitle}</p>
      <img
        className='nominee-card-img'
        src={`${nomineePhotoUrL}`}
        alt={`${nomineeTitle}-img`}
      />
      <button
        className='nominee-card-btn'
        onClick={handleClick}
        disabled={isButtonActive(nomineeTitle)}
      >
        Select
      </button>
    </div>
  );
};

export default Nominee;
