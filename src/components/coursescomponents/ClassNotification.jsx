import images from '../../assets/Document.png'

const ClassNotification = () => {

    const lectureassignment = [
        {
            icon: [images],
            topic: "Developing Restaurant Apis",
            stack: "Backend 08:00 AM -  23/06"
        },
        {
            icon: [images],
            topic: "Low fidelity frame an e-commerce app",
            stack: "Product Design 08:00 AM -  27/06"
        },
        {
            icon: [images],
            topic: "Write a case study for user experience",
            stack: "Product Design 08:00 AM -  01/07"
        },
    ]


    return (
        <div className=''>
            <h1 className="text-2xl mt-16">Assignment</h1>
            <p className='text-xs mt-2'>It is a long established fact that a reader will be distracted by the readable <br /> content of a page when looking at its layout</p>

            {lectureassignment.map((lecture, index)=> (
                <div key={index} className='flex items-start my-6'>
                     <img src={lecture.icon} alt="" className='w-8' />
                    <div className='space-y-1'>
                        <h2>{ lecture.topic}</h2>
                        <h2 className='text-xs text-assignmentpurple'>{ lecture.stack}</h2>
                    </div>
            </div>
            ))}
        </div>
    )
}

export default ClassNotification