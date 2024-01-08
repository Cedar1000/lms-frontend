import { useState, useEffect } from 'react';
import axios from '../utility/axios';
import loadingicon from '../assets/loading icon.gif';
import moment from 'moment';

//assets
import assignmenticon from '../assets/Document.png';
import AssignmentModal from '../modals/AssignmentModal';

const Assignments = () => {
  const [assignments, setAssignments] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const [selectedAssignment, setSelectedAssignment] = useState(null);

  const fetchAssignments = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(`/assignments/my-assignments`);

      setAssignments(response.data.doc);
    } catch (error) {
      console.error(error.response);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchAssignments();
  }, []);


  
  const handleAssignmentClick = (assignment) => {
    setSelectedAssignment(assignment);
  };

  const closeModal = () => {
    setSelectedAssignment(null);
  };

  return (
    <div className="w-[28rem] h-fit border border-solid border-borderpurple pl-4 pr-8 py-6 rounded-lg">
      <h1 className="text-white text-2xl mb-8">Assignments </h1>
      {isLoading ? (
        <div className="flex justify-center items-center w-full h-screen">
          <img src={loadingicon} alt="loading icon" className="w-36" />
        </div>
      ) : (
        <div>
          {assignments?.length ? (
            assignments.map((assignment, index) => (
              <div key={index} className="cursor-pointer flex items-start mt-3">
                <img
                  src={assignmenticon}
                  className="w-6 pt-1"
                  alt="assignment icon"
                />
                <div onClick={() => handleAssignmentClick(assignment)}>
                  <h2 className="">{assignment.title}</h2>
                  <p className="text-xs text-assignmentpurple font-sans">
                    Due Date:{' '}
                    {moment(assignment.dueDate).format(
                      'MMMM Do YYYY, h:mm:ss a'
                    )}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <h2>No Assignments yet!</h2>
          )}
        </div>
      )}

{selectedAssignment && (
        <AssignmentModal
          assignment={selectedAssignment}
          closeModal={closeModal}
        />
      )}
    </div>
  );
};

export default Assignments;
