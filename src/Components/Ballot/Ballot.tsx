import React, { useEffect, useState } from 'react';
import Category from '../Category';

const Ballot = () => {
  const [ballotData, setBallotData] = useState([]);

  useEffect(() => {
    const url = 'http://localhost:8080/api/getBallotData';
    //fetches ballot data from backend
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        await setBallotData(data.items);
      } catch (error) {
        console.log('error', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className='ballot'>
      {ballotData.map(({ title, id, items }) => (
        <Category key={id} title={title} id={id} items={items} />
      ))}
      <div className='submit'>
        <button className='submit-btn'>SUBMIT</button>
      </div>
    </div>
  );
};

export default Ballot;
