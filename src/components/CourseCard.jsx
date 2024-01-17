import { Link, useNavigate } from 'react-router-dom';

import PropTypes from 'prop-types';

import { usePaystackPayment } from 'react-paystack';
import commafy from 'commafy';

import axios from '../utility/axios';

//assets
import iconfirst from '../assets/iconfirst.png';
import iconsecond from '../assets/iconsecond.png';

const CourseCard = ({ course }) => {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem('user'));

  const publicKey = import.meta.env.VITE_APP_PAYSTACK_KEY;

  const config = () => ({
    reference: new Date().getTime().toString(),
    email: user.email,
    amount: course?.amount * 100,
    publicKey,
  });

  const initializePayment = usePaystackPayment(config());

  const handleBuy = () => {
    initializePayment({
      onSuccess: () => createPurchase(),
      onClose: () => onClose(),
    });
  };

  const createPurchase = async () => {
    try {
      const response = await axios.post(`/purchase`, { course });
      const { doc } = response.data;

      user.coursesPurchased[doc.course] = doc.course;

      localStorage.setItem('user', JSON.stringify(user));

      navigate(`/lms/lessons/${course.id}`);
    } catch (error) {
      console.error(error.response);
    }
  };

  const onClose = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log('closed');
  };

  return (
    <div>
      <div className="w-full md:w-60 bg-shadedblue p-8 flex flex-col items-center rounded-lg shadow-full">
        <h1 className="mb-6">{course.name}</h1>
        <div className="space-y-2">
          <h2 className="flex items-center gap-3 ">
            <span>
              <img src={iconfirst} alt="first arrow" />
            </span>
            {`Instructor: ${course.instructor}`}
          </h2>
          <h2 className="flex items-center gap-3">
            <span>
              <img src={iconsecond} alt="second arrow" />
            </span>
            {`Lessons: ${course.lessonCount}`}
          </h2>

          <h2 className="flex items-center gap-3">
            {' '}
            <span>
              <img src={iconfirst} alt="first arrow" />
            </span>{' '}
            &#8358;{commafy(course.amount)}
          </h2>
        </div>

        {user.coursesPurchased[course.id] ? (
          <Link
            to={`/lms/lessons/${course.id}?selectedCourse=${encodeURIComponent(
              JSON.stringify(course)
            )}`}
            className="mx-auto bg-tertiary_blue px-6 py-2 rounded-lg mt-6 w-full text-center"
          >
            <button>View</button>
          </Link>
        ) : (
          <button
            onClick={() => handleBuy(course)}
            className="mx-auto bg-tertiary_blue px-6 py-2 rounded-lg mt-6 w-full text-center"
          >
            Buy Now
          </button>
        )}
      </div>
    </div>
  );
};

CourseCard.propTypes = {
  course: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    instructor: PropTypes.string.isRequired,
    lessonCount: PropTypes.number.isRequired,
    amount: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,

    // Other properties of the 'course' object if applicable
  }).isRequired,
};
export default CourseCard;
