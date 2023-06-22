// eslint-disable-next-line react/prop-types
function Card({name, dob,address, gender, phone, email}){
    return(
        <div className="card">
            <div className="header">
            <h1 className="name">
                Name : {name}
            </h1>
            <h3 className="name">
                Date Of Birth : {dob}
            </h3>
            </div>
            <hr />
            <div className="card-body">

            <div className="address">
                Address : 
                <blockquote>
                    {address}
                </blockquote>
            </div>
            <div className="other-contact">
                <div className="gender">
                    Gender : {gender}
                </div>
                <div className="phone">
                    Phone : {phone}
                </div>
                <div className="email">
                    Email : {email}
                </div>
            </div>
            </div>
        </div>
    )
}

export default Card