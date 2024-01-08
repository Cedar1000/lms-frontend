

const AssignmentModal = ({ assignment, closeModal }) => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
        <div className="z-50 bg-white p-8 rounded-lg shadow-lg">
          <span className="absolute top-0 right-0 m-4 cursor-pointer text-gray-500 hover:text-gray-700" onClick={closeModal}>
            &times;
          </span>
          <h2 className="text-2xl font-bold mb-4">{assignment.title}</h2>
          <p className="text-gray-800">{assignment.description}</p>
          {/* Add more details as needed */}
        </div>
      </div>
    );
  };

export default AssignmentModal;