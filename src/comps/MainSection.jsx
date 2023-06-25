import { useState } from "react";
import Card from "./Card";
import EditScreen from "./EditScreen";

const MainSection = function () {
  const [isPreview, setIsPreview] = useState(true)

  return (
    <div className="main-section">
      <div className="tab">
        <button onClick={() => setIsPreview(true)}>
          Preview
        </button>
        <button onClick={()=>{setIsPreview(false)}}>
          Edit
        </button>
      </div>
      <div className="contact-card">
        {
          isPreview ?
          <Card 
          name={"Swarup Vishwas"}
          dob={"23/12/2003"}
          address={"Eiffel City, Chakan"}
          gender={"Male i guess"}
          phone={"8668442185"}
          email={"swarupvishwas000@gmail.com"}
        />
      :
        <EditScreen />
      }
      </div>
    </div>
    );
};

export default MainSection;
