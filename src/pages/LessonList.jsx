import React from "react";
import { random } from "../utility/dummy";

const LessonList = () => {
  return (
    <div>
      
      {random.map((item, index) => (
        <div key={index} className="flex items-center gap-2 pt-2">
          <ReactPlayer
            url={item.url}
            width={`10.5rem`}
            height={`5.875rem`}
            controls={true}
          />
          <div>
            <p>{item.title}</p>
            <p>{item.author}</p>
            <p>{item.time}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LessonList;
