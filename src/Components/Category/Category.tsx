import React from 'react';
import { Votes } from '../Ballot/Ballot';
import Nominee from '../Nominee/Nominee';
import './Category.css';

interface CategoryProps {
  categoryTitle: string;
  categoryId: string;
  categoryItems: {
    title: string;
    id: string;
    photoUrL: string;
  }[];
  votes: Votes;
  setVotes: React.Dispatch<React.SetStateAction<{}>>;
}

const Category = ({
  categoryTitle,
  categoryId,
  categoryItems,
  votes,
  setVotes,
}: CategoryProps) => {
  return (
    <div className='category'>
      <div className='category-heading'>
        <h3>{categoryTitle}</h3>
      </div>
      <div className='nominees'>
        {categoryItems.map(({ id, photoUrL, title }) => (
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
