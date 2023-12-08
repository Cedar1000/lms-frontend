const Stack = () => {

    return (
        
        <>
        <form action="" className="stack-form flex flex-wrap gap-6 w-full mt-6">

    <div className={`flex flex-col gap-3 w-full md:w-56`}>
        <label htmlFor="stack" className="border border-solid border-white w-full rounded-md p-2">Product Design</label>

        <select className="bg-inherit border border-solid border-white rounded-md p-2" id="stack" defaultValue="select Stack">
        <option value="" disabled>
            Select Stack
        </option>
        <option value="UI/UX" className="text-black" >UI/UX</option>
        <option value="design" className="text-black">Design Ops</option>
        
        </select>
    </div>




    <div className={`flex flex-col gap-3 w-full md:w-56`}>
    <label htmlFor="stack" className="border border-solid border-white w-full rounded-md p-2">Frontend Development</label>

    <select className="bg-inherit border border-solid border-white rounded-md p-2" id="stack" defaultValue="select Stack">
      <option value="" disabled>
        Select Stack
      </option>
      <option value="web" className="text-black">Web Development</option>
      <option value="mobile" className="text-black">Mobile</option>
     
    </select>
  </div>



<div className={`flex flex-col gap-3 w-full md:w-56`}>
    <label htmlFor="stack"className="border border-solid border-white w-full rounded-md p-2">Backend</label>

    <select className="bg-inherit border border-solid border-white rounded-md p-2" id="stack" defaultValue="select Stack">
      <option value="" disabled>
        Select Stack
      </option>
      <option value="python" className="text-black">Python</option>
      <option value="node" className="text-black">Node Js</option>
     
    </select>
  </div>



<div className={`flex flex-col gap-3 w-full md:w-56`}>
    <label htmlFor="stack" className="border border-solid border-white w-full rounded-md p-2">Management</label>

    <select className="bg-inherit border border-solid border-white rounded-md p-2" id="stack" defaultValue="select Stack">
      <option value="" disabled>
        Select Stack
      </option>
      <option value="product" className="text-black">Product management</option>
      <option value="project" className="text-black">Project management</option>
     
    </select>
  </div> 
</form>
        </>
    )
}

export default Stack