import Card from "./Card";

const MainSection = function () {
  return (
    <div className="main-section">
      <div className="tab">
        <button>
          Preview
        </button>
        <button>
          Edit
        </button>
      </div>
      <div className="contact-card">
        <Card 
          name={"Swarup Vishwas"}
          dob={"23/12/2003"}
          address={"Eiffel City, Chakan"}
          gender={"Male i guess"}
          phone={"8668442185"}
          email={"swarupvishwas000@gmail.com"}
        />
      </div>
    </div>
    );
};

export default MainSection;
