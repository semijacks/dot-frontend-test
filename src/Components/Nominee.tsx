import React from 'react';
import { Votes } from './Ballot/Ballot';

interface NomineeProps {
  categoryTitle: string;
  title: string;
  photoUrL: string;
  id: string;
  votes: Votes;
  setVotes: React.Dispatch<React.SetStateAction<{}>>;
}

const Nominee = ({
  categoryTitle,
  title,
  photoUrL,
  id,
  votes,
  setVotes,
}: NomineeProps) => {
  const handleClick = () => {
    const newVotes = { ...votes, [categoryTitle]: title };
    setVotes(newVotes);
    console.log(votes);
  };

  return (
    <div className='nominee-card'>
      <p className='nominee-card-heading'>{title}</p>
      <img
        className='nominee-card-img'
        src={`${photoUrL}`}
        alt={`${title}-img`}
      />
      <button className='nominee-card-btn' onClick={handleClick}>
        Select
      </button>
    </div>
  );
};

export default Nominee;
