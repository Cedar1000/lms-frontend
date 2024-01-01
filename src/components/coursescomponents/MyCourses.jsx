import { useState } from 'react';
import { Link } from 'react-router-dom';

// Components
import DeleteModal from '../../modals/DeleteModal';

const MyCourses = () => {
  const [coursesection, setCoursesection] = useState([
    {
      heading: 'Management',
      coursename: 'Product Management',
      progress: 'Progress: 45%',
      instructor: 'Instructor: Simon Carrel',
    },
    {
      heading: 'Backend Development',
      coursename: 'Python',
      progress: 'Progress: 30%',
      instructor: 'Instructor: Cedar White',
    },
  ]);

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteIndex, setDeleteIndex] = useState(null);

  const handleDelete = () => {
    // Close the modal
    setShowDeleteModal(false);

    if (deleteIndex !== null) {
      // Create a new array without the item at the specified index
      const updatedCourses = coursesection.filter((_, i) => i !== deleteIndex);
      setCoursesection(updatedCourses);
      // Reset the deleteIndex
      setDeleteIndex(null);
    }
  };

  const openDeleteModal = (index) => {
    // Set the deleteIndex and open the modal
    setDeleteIndex(index);
    setShowDeleteModal(true);
  };

  const closeDeleteModal = () => {
    // Close the modal without deleting
    setShowDeleteModal(false);
    // Reset the deleteIndex
    setDeleteIndex(null);
  };

  return (
    <div className="flex gap-4 flex-wrap w-full mt-6">
      {coursesection.map((section, index) => (
        <div
          key={index}
          className="w-full md:w-64 flex items-center flex-col gap-3"
        >
          <button className="w-full bg-tertiary_blue py-2 rounded-sm">
            {section.heading}
          </button>
          <div className="w-full md:w-60 bg-shadedblue rounded-xs px-6 py-2">
            <div className="space-y-3">
              <h3>{section.coursename}</h3>
              <h3>{section.progress}</h3>
              <h3>{section.instructor}</h3>
            </div>
            <div className="flex justify-between mt-6 mb-3">
              <Link to={`/lms/lessons`}>
                <button className="bg-inherit text-tertiary_blue">
                  Continue
                </button>
              </Link>
              <button
                onClick={() => openDeleteModal(index)}
                className="bg-lightred px-6 py-1 text-xs rounded-sm"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Confirmation Modal */}
      {showDeleteModal && (
        <DeleteModal
          handleDelete={handleDelete}
          closeDeleteModal={closeDeleteModal}
        />
      )}
    </div>
  );
};

export default MyCourses;
