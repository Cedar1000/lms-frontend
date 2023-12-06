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
        <option value="UI/UX">UI/UX</option>
        <option value="design">Design Ops</option>
        
        </select>
    </div>




    <div className={`flex flex-col gap-3 w-full md:w-56`}>
    <label htmlFor="stack" className="border border-solid border-white w-full rounded-md p-2">Frontend Development</label>

    <select className="bg-inherit border border-solid border-white rounded-md p-2" id="stack" defaultValue="select Stack">
      <option value="" disabled>
        Select Stack
      </option>
      <option value="web">Web Development</option>
      <option value="mobile">Mobile</option>
     
    </select>
  </div>



<div className={`flex flex-col gap-3 w-full md:w-56`}>
    <label htmlFor="stack"className="border border-solid border-white w-full rounded-md p-2">Backend</label>

    <select className="bg-inherit border border-solid border-white rounded-md p-2" id="stack" defaultValue="select Stack">
      <option value="" disabled>
        Select Stack
      </option>
      <option value="python">Python</option>
      <option value="node">Node Js</option>
     
    </select>
  </div>



<div className={`flex flex-col gap-3 w-full md:w-56`}>
    <label htmlFor="stack" className="border border-solid border-white w-full rounded-md p-2">Management</label>

    <select className="bg-inherit border border-solid border-white rounded-md p-2" id="stack" defaultValue="select Stack">
      <option value="" disabled>
        Select Stack
      </option>
      <option value="product">Product management</option>
      <option value="project">Project management</option>
     
    </select>
  </div> 
</form>
        </>
    )
}

export default Stack