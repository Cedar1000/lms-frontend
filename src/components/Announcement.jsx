import bell from '../assets/Bell.png'

const Announcement = () => {


    const newsletter = [
        {
            address: "Welcome  Address",
            addressbody: `It is a long established fact that a reader will be distracted by the readable\n content of a page when looking at its layout`
        },

        {
            address: "Course Registration",
            addressbody: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout`
        },
        {
            address: "Update your student profile",
            addressbody: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout`
        },
        {
            address: "Course Registration",
            addressbody: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout`
        },
      
    ]

    

    return (
        <div className=" text-dullwhite">
            <div className="max-w-[28rem] border border-solid border-borderpurple pl-4 pr-8 py-6 rounded-lg">
            <h1 className="text-white text-2xl mb-8 flex items-center gap-2">Announcements 
                <span><img src={bell} alt="bells" /></span>
            </h1>
            {newsletter.map((news, index) => (
                <div key={index}>
                    <h2 className="mt-4 mb-2 text-white">{news.address}</h2>
                    <p className="text-xs mb-2 text-dullwhite">{news.addressbody}</p>
                    <hr className="bg-linecolor border-0 h-[1px]" />
                </div>
            ))}
           </div>
        </div>
    )
}

export default Announcement