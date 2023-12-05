import progresscourse from '../assets/progresscourseicon.png'
import certificateearned from '../assets/certificateearned.png'
import completedcourse from '../assets/completedcourseicon.png'
// import certificateearned from '../assets/certificateearned.png'

const Overview = () => {

    const courseList = [
        {

            courselogo: [progresscourse],
            coursename: 'Course In Progress',
            coursecounter: '3'
    
        },

        {

            courselogo: [certificateearned],
            coursename: 'Assignment',
            coursecounter: '12'
    
        },

        {

            courselogo: [completedcourse],
            coursename: 'Completed courses',
            coursecounter: '1'
    
        },

        {

            courselogo: [certificateearned],
            coursename: 'Certificates earned',
            coursecounter: '1'
    
        }
    ]

    return(
        
        <div className='w-full flex justify-between gap-y-4 flex-wrap'>
        {courseList.map((course, index) => (
          <div key={index} className='flex justify-between border border-solid border-slate-300 w-64 px-3 py-2 rounded-3xl'>
            <div className='flex gap-2'>
            <img src={course.courselogo} alt="Course Logo" />
            <h2>{course.coursename}</h2>    
            </div>
            <p>{course.coursecounter}</p>
          </div>
        ))}
      </div>
    )
}

export default Overview