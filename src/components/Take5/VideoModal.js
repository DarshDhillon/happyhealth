import ReactDOM from 'react-dom';
import styled from 'styled-components';

const ROOT = document.getElementById('take5-modal-root');

const VideoModal = ({ children }) => {
  return ReactDOM.createPortal(
    <ModalContainer>{children}</ModalContainer>,
    ROOT
  );
};

export default VideoModal;

const ModalContainer = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.7);
`;
