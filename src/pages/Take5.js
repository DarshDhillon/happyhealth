import Main from '../components/Take5/Main';
import VideoModal from '../components/Take5/VideoModal';
import ModalVideoProvider from '../context/Take5/ModalVideoProvider';
import VideoPlayer from '../components/Take5/VideoPlayer';

const Take5 = () => {
  return (
    <ModalVideoProvider>
      <Main />
      <VideoModal>
        <VideoPlayer />
      </VideoModal>
    </ModalVideoProvider>
  );
};

export default Take5;
