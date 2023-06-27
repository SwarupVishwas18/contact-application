const EditScreen = () => {
    return (
        <div className="edit-screen">
            <h1>
                Update Contact
            </h1>
            <div className="name">
                <label htmlFor="name">Name : </label>
                <input type="text" id="name" />
            </div>

            <div className="name">
                <label htmlFor="dob">Date of Birth : </label>
                <input type="date" id="dob" />
            </div>

            <div className="name">
                <div className="address">
                <label htmlFor="address">Address : </label>
                </div>
                <textarea name="address" id="address" cols="30" rows="10"></textarea>
            </div>

            <div className="name">
    
                <label htmlFor="gender">Gender : </label>
                <select name="gender" id="gender">
                    <option value="0">
                        Select
                    </option>
                    <option value="Male">
                        Male
                    </option>
                    <option value="Female">
                        Female
                    </option>
                    <option value="None">
                        Not Human
                    </option>
                </select>
            </div>

            <div className="name">
                <label htmlFor="phone">Phone : </label>
                <input type="number" id="phone" />
            </div>

            <div className="name">
                <label htmlFor="email">Email : </label>
                <input type="email" id="email" />
            </div>
            <div className="btn">
                <button>
                    Submit
                </button>
            </div>
        </div>
        )
}

export default EditScreen;