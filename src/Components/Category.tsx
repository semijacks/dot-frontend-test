import React from 'react';
import Nominee from './Nominee';

interface CategoryProps {
  title: string;
  id: string;
  items: {
    title: string;
    id: string;
    photoUrL: string;
  }[];
}

const Category = ({ title, id, items }: CategoryProps) => {
  return (
    <div className='category'>
      <div className='category-heading'>
        <h3>{title}</h3>
      </div>
      <div className='nominees'>
        {items.map(({ id, photoUrL, title }) => (
          <Nominee key={id} id={id} photoUrL={photoUrL} title={title} />
        ))}
      </div>
    </div>
  );
};

export default Category;
