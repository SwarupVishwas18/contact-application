/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
function Card({data}){
    return(
        <div className="card">
            <div className="header">
            <h1 className="name">
                Name : {data.name}
            </h1>
            <h3 className="name">
                Date Of Birth : {data.dob}
            </h3>
            </div>
            <hr />
            <div className="card-body">

            <div className="address">
                Address : 
                <blockquote>
                    {data.address}
                </blockquote>
            </div>
            <div className="other-contact">
                <div className="gender">
                    Gender : {data.gender}
                </div>
                <div className="phone">
                    Phone : {data.phone}
                </div>
                <div className="email">
                    Email : {data.email}
                </div>
            </div>
            </div>
        </div>
    )
}

export default Card