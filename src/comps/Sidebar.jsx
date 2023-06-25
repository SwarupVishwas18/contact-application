const Sidebar = () => {
  const bleachCharacters = [
    "Elena Gilbert",
    "Stefan Salvatore",
    "Damon Salvatore",
    "Caroline Forbes",
    "Bonnie Bennett",
    "Jeremy Gilbert",
    "Matt Donovan",
    "Alaric Saltzman",
    "Klaus Mikaelson",
    "Katherine Pierce",
    "Enzo St. John",
    "Tyler Lockwood",
    "Elijah Mikaelson",
    "Rebekah Mikaelson",
    "Lexi Branson"
  ];
  const bleachDivs = bleachCharacters.map((char, index) => {
    return (
      <div key={index} className="contact-name">
        {char}
        </div>
    )
  })
  return (
    <div className="sidebar">
     <h2 className="logo">
        SaveContact
        <div id="add">
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
