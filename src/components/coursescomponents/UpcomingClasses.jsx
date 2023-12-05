import images from '../../assets/Zoom.png'

const UpcomingClasses = () => {

    const lectureassignment = [
        {
            icon: [images],
            topic: "HTML: Structure of the web",
            stack: "Frontend 08:00 AM -  23/06"
        },
        {
            icon: [images],
            topic: "The lifecycle of a product",
            stack: "Management 08:00 AM -  23/06"
        },
        {
            icon: [images],
            topic: "Write a case study for user experience",
            stack: "Backend 08:00 AM -  23/06"
        },
    ]


    return (
        <div className=''>
            <h1 className="text-2xl mt-16">Upcoming Classes</h1>
            <p className='text-xs mt-3 text-lightpink'>Your classes have been scheduled for these times, do well to attend  to <br /> them</p>

            {lectureassignment.map((lecture, index)=> (
                <div key={index} className='flex gap-2 items-start my-6 bg-shadedblue p-1'>
                     <img src={lecture.icon} alt="" className='w-6' />
                    <div className='space-y-1'>
                        <h2>{ lecture.topic}</h2>
                        <h2 className='text-xs text-assignmentpurple'>{ lecture.stack}</h2>
                    </div>
            </div>
            ))}
        </div>
    )
}

export default UpcomingClasses