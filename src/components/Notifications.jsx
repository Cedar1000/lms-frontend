import { useEffect, useState } from 'react';
import axios from '../utility/axios';

//assets
import bell from '../assets/Bell.png';

const Notifications = () => {
  const [notifications, setNotifications] = useState(null);

  const fetcthNotifications = async () => {
    try {
      const response = await axios.get('/notifications/my-notifications');
      setNotifications(response.data.doc);
    } catch (error) {
      console.error(error.response);
    }
  };

  useEffect(() => {
    fetcthNotifications();
  }, []);

  return (
    <div className=" text-dullwhite">
      <div className="max-w-[28rem] border border-solid border-borderpurple pl-4 pr-8 py-6 rounded-lg">
        <h1 className="text-white text-2xl mb-8 flex items-center gap-2">
          Notifications
          <span>
            <img src={bell} alt="bells" />
          </span>
        </h1>
        {notifications?.length ? (
          notifications?.map((news, index) => (
            <div key={index}>
              <h2 className="mt-4 mb-2 text-white">{news.address}</h2>
              <p className="text-xs mb-2 text-dullwhite">{news.addressbody}</p>
              <hr className="bg-linecolor border-0 h-[1px]" />
            </div>
          ))
        ) : (
          <h2>No notifications yet!</h2>
        )}
      </div>
    </div>
  );
};

export default Notifications;
