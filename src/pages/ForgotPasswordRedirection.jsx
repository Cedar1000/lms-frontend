import Layout from "./Layout"
const ForgotPasswordRedirection = () => {
    
    return (
        <Layout className="w-full md:w-[100%] bg-primary_blue">
            <div className="min-h-screen">

                <form action="" className="flex justify-center items-center outline-none md:min-h-screen">
                  
                    <div className="space-y-12">
                    <h1 className="text-3xl">Please input your email address</h1>
                    <div className="flex gap-5 items-center w-full md:w-[30rem]">
                        <label htmlFor="email" className="text-2xl">Email</label>
                        <input type="email" id="email" placeholder="enter your email" className="w-full bg-transparent border-2 border-solid border-white p-3 rounded-2xl outline-none" />
                    </div>
                    <button className="bg-tertiary_blue px-8 py-2 rounded-xl">
                        submit
                    </button>
                   </div>
                </form>

            </div>
        </Layout>
    )
}
export default ForgotPasswordRedirection