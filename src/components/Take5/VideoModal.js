import ReactDOM from 'react-dom';
import { useContext } from 'react';
import styled from 'styled-components';
import { ModalVideoContext } from '../../context/Take5/ModalVideoProvider';
import { AiOutlineCloseCircle } from 'react-icons/ai';

const ROOT = document.getElementById('take5-modal-root');

const VideoModal = ({ children }) => {
  const { showModal, setShowModal } = useContext(ModalVideoContext);

  if (!showModal) return null;

  return ReactDOM.createPortal(
    <ModalContainer>
      <CloseIcon onClick={() => setShowModal(false)} />
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
`;

const CloseIcon = styled(AiOutlineCloseCircle)`
  position: absolute;
  top: 50px;
  right: 50px;
  height: 40px;
  width: 40px;
  color: lightgrey;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.5);
  }
`;
