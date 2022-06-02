import React from 'react';

interface NomineeProps {
  title: string;
  photoUrL: string;
  id: string;
}

const Nominee = ({ title, photoUrL, id }: NomineeProps) => {
  return (
    <div className='nominee-card'>
      <p className='nominee-card-heading'>{title}</p>
      <img
        className='nominee-card-img'
        src={`${photoUrL}`}
        alt={`${title}-img`}
      />
      <button className='nominee-card-btn'>Select</button>
    </div>
  );
};

export default Nominee;
