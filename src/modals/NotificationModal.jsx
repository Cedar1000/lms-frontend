import { useState } from 'react';
import { useEffect } from 'react';
import Announcement from '../components/Notifications';
import Assignments from '../components/Assignments';
import closeicon from '../assets/closeicon.png';

const NotificationModal = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Set a timeout to open the sidebar after the overlay is rendered
    const timeoutId = setTimeout(() => {
      setIsOpen(true);
    }, 100);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    // Optionally, you can add a delay before fully closing the sidebar
    setTimeout(() => {
      props.handleNotificationModal();
    }, 300); // Adjust the delay time as needed
  };

  return (
    <div className="fixed z-[3000]">
      <div
        className={`w-full h-screen bg-black fixed top-0 left-0 z-[1000] transition-opacity ${
          isOpen ? 'opacity-60' : 'opacity-0'
        }`}
        onClick={handleClose}
      ></div>
      <div
        className={`w-[20rem] fixed  overflow-y-auto custom-scrollbar bg-[#082450] h-screen px-3 top-0 right-0 z-[2000] transform transition-transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } `}
      >
        <img
          src={closeicon}
          alt="close icon"
          className="w-4 absolute top-6 right-1 cursor-pointer"
          onClick={handleClose}
        />

        <div className="mt-24 mb-24 md:mb-12 flex gap-y-8 w-full flex-wrap">
          <Announcement />
          <Assignments />
        </div>
      </div>
    </div>
  );
};

export default NotificationModal;
