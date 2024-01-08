import moment from "moment";

const AssignmentModal = ({ assignment, closeModal }) => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
        <div className="z-50 bg-white p-8 rounded-lg shadow-lg text-gray-800 relative">
          <div className="absolute top-0 right-0 m-4 cursor-pointer text-3xl text-black hover:text-blue-500" onClick={closeModal}>
            &times;
          </div>
          <h2 className="text-2xl font-bold mb-4 text-center">Assignment Details</h2>
          <p className=" mb-4"><span className="font-bold text-xl">Title:</span> {assignment.title}</p>
          <p className=" mb-4"><span className="font-bold text-xl">Assignment Content:</span> {assignment.description}</p>
          <p className=" ">
          <span className="font-bold text-xl">Due Date: </span> 
                    {moment(assignment.dueDate).format(
                      'MMMM Do YYYY, h:mm:ss a'
                    )}
                  </p>
        </div>
      </div>
    );
  };

export default AssignmentModal;