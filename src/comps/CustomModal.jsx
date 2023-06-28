// eslint-disable-next-line react/prop-types
const CustomModal = ({contactIp,setContactIp, setVisibility}) => {
    return (
      <div className="modal">
        <div className="model-form">
          <input type="text" name="takeData" onChange={(e)=>setContactIp(e.target.value)} value={contactIp} />
  
        </div>
        <div className="modal-btn"><button onClick={setVisibility(false)}>Submit</button></div>
      </div>
    )
  }

  export default CustomModal;