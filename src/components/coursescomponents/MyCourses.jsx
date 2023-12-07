import { Link } from "react-router-dom"

const MyCourses = () => {

    const coursesection = [
            {
            heading: "Management",
            coursename: "Product Management",
            progress: "Progress: 45%",
            instructor: "Instructor: Simon Carrel"
            },
            
            {
            heading: "Backend Development",
            coursename: "Python",
            progress: "Progress: 30%",
            instructor: "Instructor: Cedar White"
            }
        ]

    return (
        <div className="flex gap-4 flex-wrap w-full mt-6">

            {coursesection.map((section, index) => (
                <div key={index} className="w-full md:w-64 flex items-center flex-col gap-3">
                    <button className="w-full bg-tertiary_blue py-2 rounded-sm">{section.heading}</button>
                    <div className="w-full md:w-60 bg-shadedblue rounded-xs px-6 py-2">
                        <div className="space-y-3">
                        <h3>{ section.coursename}</h3>
                        <h3>{ section.progress}</h3>
                        <h3>{section.instructor}</h3>
                        </div>
                        <div className="flex justify-between mt-6 mb-3">
                            <Link to={`/lms/lessons`}>
                        <button className="bg-inherit text-tertiary_blue">Continue</button>
                            </Link>
                        <button className="bg-lightred px-6 py-1 text-xs rounded-sm">delete</button>
                        </div>
                    </div>
                </div>
            ))}

        </div>
    )
}

export default MyCourses