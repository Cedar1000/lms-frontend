import assignmenticon from '../assets/Document.png'

const Assignments = () => {

    const assignmentsheets = [
        {
            icon: [assignmenticon],
            firstassignment: "Developing Restaurant Apis",
            secondassignment: `Backend 08:00 AM - 23/06`
        },
        {
            icon: [assignmenticon],
            firstassignment: "Low fidelity frame an e-commerce app",
            secondassignment: `Product Design 08:00 AM - 27/06`
        },
        {
            icon: [assignmenticon],
            firstassignment: "Write a case study for user experience",
            secondassignment: `Product Design 08:00 AM - 01/07`
        },
    ]

    return (
        <div className="w-[28rem] h-fit border border-solid border-borderpurple pl-4 pr-8 py-6 rounded-lg">
            <h1 className="text-white text-2xl mb-8">Assignments </h1>
            {assignmentsheets.map((assigned, index) => (
                <div key={index} className='flex items-start mt-3'>
                    <img src={assigned.icon} className='w-6 pt-1' alt="assignment icon" />
                    <div>
                    <h2 className=''>{assigned.firstassignment}</h2>
                    <p className='text-xs text-assignmentpurple font-sans'>{ assigned.secondassignment}</p>
                   </div>
                </div>
            ))}
        </div>
        
    )
}

export default Assignments