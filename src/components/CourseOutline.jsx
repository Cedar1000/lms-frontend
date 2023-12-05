import iconfirst from '../assets/iconfirst.png';
import iconsecond from '../assets/iconsecond.png';

const CourseOutline = () => {
  const courseLists = [
    {
      courseName: 'Frontend Development',
      arrowOne: [iconfirst],
      title: 'Web development',
      arrowTwo: [iconsecond],
      course2: 'Mobile Development',
      courselink: 'Enroll Now',
    },
    {
      courseName: 'Management',
      arrowOne: [iconfirst],
      title: 'Product Management',
      arrowTwo: [iconsecond],
      course2: 'Project Management',
      courselink: 'Enroll Now',
    },
    {
      courseName: 'Product Design',
      arrowOne: [iconfirst],
      title: 'UI/UX',
      arrowTwo: [iconsecond],
      course2: 'Design Ops',
      courselink: 'Enroll Now',
    },
    {
      courseName: 'Backend Development',
      arrowOne: [iconfirst],
      title: 'Python/Django',
      arrowTwo: [iconsecond],
      course2: 'Design Ops',
      courselink: 'NodeJs/Express',
    },
  ];

  return (
    <div className='w-full flex justify-between gap-y-4 flex-grow-1 flex-wrap mt-12'>
      {courseLists.map((courses, index) => (
        <div key={index} className='w-64 bg-shadedblue p-8 flex flex-col items-center rounded-lg shadow-full'>
          <h1 className='mb-6'>{courses.courseName}</h1>
          <div className='space-y-2'>
            <h2 className='flex items-center gap-3'>
              <span><img src={courses.arrowOne} alt="first arrow" /></span>
              {courses.title}
            </h2>
            <h2 className='flex items-center gap-3'>
              <span><img src={courses.arrowTwo} alt="second arrow" /></span>
              {courses.course2}
            </h2>
            </div>
              <button className='mx-auto bg-tertiary_blue px-6 py-2 rounded-lg mt-6 w-full'>{ courses.courselink}</button> 
        </div>
      ))}
    </div>
  );
};

export default CourseOutline;
