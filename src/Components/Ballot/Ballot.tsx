import { useEffect, useState } from 'react';
import { fetchData } from '../../utils/fetchData';
import Category from '../Category/Category';
import Modal from '../Modal/Modal';
import './Ballot.css';

export interface Votes {
  [key: string]: string;
}

const Ballot = () => {
  const [ballotData, setBallotData] = useState([]);
  const [votes, setVotes] = useState({} as Votes);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const url = 'http://localhost:8080/api/getBallotData';

    //fetches ballot data from backend
    fetchData(url, setBallotData);
  }, []);

  //handles modal opening and closing
  const openModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      <div className='ballot'>
        {/* categories */}
        {ballotData.map(({ title, id, items }) => (
          //renders each vote category
          <Category
            key={id}
            categoryTitle={title}
            categoryId={id}
            nomineeItems={items}
            votes={votes}
            setVotes={setVotes}
          />
        ))}

        {/* submit button */}
        <div className='submit'>
          <button className='submit-btn' onClick={openModal}>
            submit
          </button>
        </div>
      </div>

      {/* modal */}
      {isModalOpen && (
        //renders result modal
        <Modal
          votes={votes}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      )}
    </div>
  );
};

export default Ballot;
