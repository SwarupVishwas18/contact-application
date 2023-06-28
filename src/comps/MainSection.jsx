import { useState } from "react";
import Card from "./Card";
import EditScreen from "./EditScreen";

const MainSection = function () {
  const [isPreview, setIsPreview] = useState(true)
  const [contactInfo, setContactInfo] = useState({
    name: "Swarup",
    dob:"23/12/2003",
    address:"Eiffel City, Chakan",
    gender:"Male",
    phone:"8668442185",
    email:"swarupvishwas000@gmail.com"
  })
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
