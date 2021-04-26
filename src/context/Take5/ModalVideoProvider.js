import { createContext, useState } from 'react';

export const ModalVideoContext = createContext();

const ModalVideoProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false);

  const [chosenVideo, setChosenVideo] = useState('');

  const handleImageClick = (e) => {
    setChosenVideo(e.target.name);
    setShowModal(true);
  };

  return (
    <ModalVideoContext.Provider
      value={{ handleImageClick, setShowModal, showModal, chosenVideo }}
    >
      {children}
    </ModalVideoContext.Provider>
  );
};

export default ModalVideoProvider;
