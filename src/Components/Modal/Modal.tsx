import React from 'react';
import { Votes } from '../Ballot/Ballot';
import './Modal.css';

interface ModalProps {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  votes: Votes;
}

function Modal({ votes, isModalOpen, setIsModalOpen }: ModalProps) {
  const voteKeys = Object.keys(votes);

  return (
    <div className='modal-background'>
      <div className='modal-container'>
        <div className='modal-header'>
          <h3>Results</h3>
          <button
            className='modal-close-btn'
            onClick={() => setIsModalOpen(false)}
          >
            X
          </button>
        </div>
        <div className='modal-body'>
          {voteKeys.map((voteKey) => (
            <p key={voteKey}>{`${voteKey} => ${votes[voteKey]}`}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Modal;
