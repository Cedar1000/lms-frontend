import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from '../utility/axios';
import AssignmentModal from '../modals/AssignmentModal';

const Assignments = () => {
    const [selectedAssignment, setSelectedAssignment] = useState(null);

    const assignmentfetch = async () => {
        const response = await axios.get(
            `/assignments/my-assignments`
           );
           return response.data.doc;
    }

    const { data: assignments, isLoading, isError } = useQuery({queryKey:["fetchAssignments"], 
    queryFn: {assignmentfetch},
    
});
  
    const handleAssignmentClick = (assignment) => {
      setSelectedAssignment(assignment);
    };
  
    const closeModal = () => {
      setSelectedAssignment(null);
    };
  
    return (
      <div>
        <h1>My Assignments</h1>
        {isLoading && <div>Loading...</div>}
        {isError && <div>Error fetching assignments</div>}
        {assignments && (
          <ul>
            {assignments.map((assignment) => (
              <li key={assignment.id} onClick={() => handleAssignmentClick(assignment)}>
                {assignment.title}
              </li>
            ))}
          </ul>
        )}
        {selectedAssignment && (
          <AssignmentModal
            assignment={selectedAssignment}
            closeModal={closeModal}
          />
        )}
      </div>
    );
}

export default Assignments