import React from 'react';
import { Votes } from './Ballot/Ballot';
import Nominee from './Nominee';

interface CategoryProps {
  title: string;
  id: string;
  items: {
    title: string;
    id: string;
    photoUrL: string;
  }[];
  votes: Votes;
  setVotes: React.Dispatch<React.SetStateAction<{}>>;
}

const Category = ({
  title: categoryTitle,
  id,
  items,
  votes,
  setVotes,
}: CategoryProps) => {
  return (
    <div className='category'>
      <div className='category-heading'>
        <h3>{categoryTitle}</h3>
      </div>
      <div className='nominees'>
        {items.map(({ id, photoUrL, title }) => (
          <Nominee
            key={id}
            id={id}
            photoUrL={photoUrL}
            title={title}
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
