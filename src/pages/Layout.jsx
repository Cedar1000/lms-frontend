import auth from '../assets/auth.png'

const Layout = ({children, className, wrapper}) => {


    return (
        <div className={`flex flex-col lg:flex-row bg-primary_blue text-white h-screen ${wrapper}`}>
        <div className="container1 flex lg:w-1/2  justify-center items-center">
          <img src={auth} alt="Background Image" className={`${className} lg:w-full rounded`} />
        </div>
  
        <div className=" rounded-tl-[2rem] rounded-tr-[2rem] lg:rounded-none lg:flex-1 lg:py-24 lg:px-12 flex flex-col justify-center items-center bg-secondary_blue shadow-lg p-8">
          {children}
        </div>
      </div>
    )
}

export default Layout   