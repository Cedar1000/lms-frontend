import React from 'react'

const SelectCourse = () => {
  return (
    <form action="" className="stack-form">

          <div className={``}
            >
              <label htmlFor="stack" className={`border border-white rounded-[0.19rem] py-[0.44rem] pl-[0.63rem] w-full`}>Product Design</label>

              <select
                className="bg-inherit border border-white rounded-[0.19rem] py-[0.44rem] pl-[0.63rem] w-full"
                id="stack"
                defaultValue="select Stack" 
              >
                <option value=""  className="bg-[#082450]">
                  Select Stack
                </option>
                <option value="UI/UX">UI/UX</option>
                <option value="design">Design Ops</option>
               
              </select>
            </div>




          <div className={``}
            >
              <label htmlFor="stack">Frontend</label>

              <select
                className="bg-inherit"
                id="stack"
                defaultValue="select Stack" 
              >
                <option value="" disabled>
                  Select Stack
                </option>
                <option value="web">Web</option>
                <option value="mobile">Mobile</option>
               
              </select>
            </div>



          <div className={``}
            >
              <label htmlFor="stack">Backend</label>

              <select
                className="bg-inherit"
                id="stack"
                defaultValue="select Stack" 
              >
                <option value="" disabled>
                  Select Stack
                </option>
                <option value="python">Python</option>
                <option value="node">Node Js</option>
               
              </select>
            </div>



          <div className={``}
            >
              <label htmlFor="stack">Management</label>

              <select
                className="bg-inherit"
                id="stack"
                defaultValue="select Stack" 
              >
                <option value="" disabled>
                  Select Stack
                </option>
                <option value="product">Product management</option>
                <option value="project">Project management</option>
               
              </select>
            </div>















            
          </form>
  )
}

export default SelectCourse