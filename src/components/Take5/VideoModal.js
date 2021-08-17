import ReactDOM from 'react-dom';
import { useContext, useRef } from 'react';
import styled from 'styled-components';
import { ModalVideoContext } from '../../context/Take5/ModalVideoProvider';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import VideoControls from './VideoControls';

const ROOT = document.getElementById('take5-modal-root');

const VideoModal = ({ children }) => {
  const modalRef = useRef(null);
  const { showModal, setShowModal } = useContext(ModalVideoContext);

  if (!showModal) return null;

  return ReactDOM.createPortal(
    <ModalContainer
      ref={modalRef}
      onClick={(e) => e.target === modalRef.current && setShowModal(false)}
    >
      <CloseIcon onClick={() => setShowModal(false)} />
      <VideoControls />
      {children}
    </ModalContainer>,
    ROOT
  );
};

export default VideoModal;

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: flex-end;

  @media (orientation: landscape) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const CloseIcon = styled(AiOutlineCloseCircle)`
  position: absolute;
  top: 20px;
  right: 20px;
  height: 60px;
  width: 60px;
  color: lightgrey;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.5);
  }
`;
