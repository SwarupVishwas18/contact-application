/* eslint-disable react/prop-types */
import { useState } from "react";
import Card from "./Card";
import EditScreen from "./EditScreen";

const MainSection = function ({contactInfo, setContactInfo, id}) {
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
          data={contactInfo}
          id={id}
        />
      :
        <EditScreen 
        data={contactInfo}
        setData={setContactInfo}
        />
      }
      </div>
    </div>
    );
};

export default MainSection;
