import React from 'react';
import { Votes } from '../Ballot/Ballot';
import Nominee from '../Nominee/Nominee';
import './Category.css';

interface CategoryProps {
  categoryTitle: string;
  categoryId: string;
  nomineeItems: {
    title: string;
    id: string;
    photoUrL: string;
  }[];
  votes: Votes;
  setVotes: React.Dispatch<React.SetStateAction<{}>>;
}

const Category = ({
  categoryTitle,
  nomineeItems,
  votes,
  setVotes,
}: CategoryProps) => {
  return (
    <div className='category'>
      <div className='category-heading'>
        <h3>{categoryTitle}</h3>
      </div>

      {/* nominees */}
      <div className='nominees'>
        {nomineeItems.map(({ id, photoUrL, title }) => (
          //renders each nominee card
          <Nominee
            key={id}
            nomineeId={id}
            nomineePhotoUrL={photoUrL}
            nomineeTitle={title}
            votes={votes}
            setVotes={setVotes}
            categoryTitle={categoryTitle}
          />
        ))}
      </div>
    </div>
  );
};

export default Category;
