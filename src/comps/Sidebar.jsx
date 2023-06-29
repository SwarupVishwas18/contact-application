/* eslint-disable react/prop-types */
const Sidebar = ({contactInfo, setContactInfo, id, setId}) => {

  function addContact(){
    setContactInfo(prev => [...prev, {
      name: "Swarup",
    dob:"23/12/2003",
    address:"Eiffel City, Chakan",
    gender:"Male",
    phone:"8668442185",
    email:"swarupvishwas000@gmail.com"
    }])
  }
  const bleachDivs = contactInfo.map((char, index) => {
    return (
      <div key={index} onClick={()=>setId(index)} className="contact-name">
        {char.name}
        </div>
    )
  })
  return (
    <div className="sidebar">
     <h2 className="logo">
        SaveContact
        <div id="add" onClick={addContact}>
          +
        </div>
     </h2>
     <div className="all-contacts">
        {bleachDivs}
     </div>
    </div>
  );
};



export default Sidebar;
