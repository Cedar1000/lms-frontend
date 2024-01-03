import { useState, useEffect } from 'react';
import axios from '../utility/axios';
import loadingicon from '../assets/loading icon.gif'

//assets
import assignmenticon from '../assets/Document.png';

const Assignments = () => {
  const assignmentsheets = [
    {
      icon: [assignmenticon],
      firstassignment: 'Developing Restaurant Apis',
      secondassignment: `Backend 08:00 AM - 23/06`,
    },
    {
      icon: [assignmenticon],
      firstassignment: 'Low fidelity frame an e-commerce app',
      secondassignment: `Product Design 08:00 AM - 27/06`,
    },
    {
      icon: [assignmenticon],
      firstassignment: 'Write a case study for user experience',
      secondassignment: `Product Design 08:00 AM - 01/07`,
    },
  ];

  const [assignments, setAssignments] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  const fetchAssignments = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get('/assignments');

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

  return (
    <div className="w-[28rem] h-fit border border-solid border-borderpurple pl-4 pr-8 py-6 rounded-lg">
      <h1 className="text-white text-2xl mb-8">Assignments </h1>
      {isLoading ? (
        <div className="flex justify-center items-center w-full h-screen">
        <img src={loadingicon} alt="loading icon" className='w-36' />
      </div>
      ) : (
        <div>
          {assignments?.length ? (
            assignmentsheets.map((assigned, index) => (
              <div key={index} className="flex items-start mt-3">
                <img
                  src={assigned.icon}
                  className="w-6 pt-1"
                  alt="assignment icon"
                />
                <div>
                  <h2 className="">{assigned.firstassignment}</h2>
                  <p className="text-xs text-assignmentpurple font-sans">
                    {assigned.secondassignment}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <h2>No Assignments yet!</h2>
          )}
        </div>
      )}
    </div>
  );
};

export default Assignments;
