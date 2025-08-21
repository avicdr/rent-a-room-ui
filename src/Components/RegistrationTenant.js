import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "../ComponentsCSS/RegistrationForm.css";
import { faHourglass1 } from "@fortawesome/free-solid-svg-icons";
function RegistrationTenant() {
  const [name, setName] = useState("");
  const [lookingFor, setLookingFor] = useState("");
  const [location, setLocation] = useState("");
  const [gender, setGender] = useState("");
  const [amenities, setAmenities] = useState([]);
  const [description, setDescription] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleLookingForChange = (event) => {
    setLookingFor(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleAmenitiesChange = (event) => {
    const amenity = event.target.value;
    const isChecked = event.target.checked;
    if (isChecked) {
      setAmenities([...amenities, amenity]);
    } else {
      setAmenities(amenities.filter((a) => a !== amenity));
    }
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({
      name,
      lookingFor,
      location,
      amenities,
      description,
    });
  };

  return (
    <div className="form">
      <p className="ptag">Home &#x3e; Register</p>
      <h1 className="heading">Advertise your room</h1>
      {/* <br /> */}

      {/* <div className="form-container">
        <div className="rfEntry">
          <h2>Name</h2>
          <input className="rfInput" type="text" name="" id="" placeholder="Enter text" />
        </div>
        <div className="rfEntry">
          <h2>What are you <br /> looking for?</h2>
          <div className="checkBox-container">
          <label className="right-label">
                <input
                 
                  type="checkbox"
                  name="lookingFor"
                  value="rentMyPlace"
                  checked={lookingFor === "rentMyPlace"}
                  onChange={handleLookingForChange}
                />
                Rent my place
              </label><label className="right-label">
                <input
                 
                  type="checkbox"
                  name="lookingFor"
                  value="rentMyPlace"
                  checked={lookingFor === "rentMyPlace"}
                  onChange={handleLookingForChange}
                />
                Rent my place
              </label><label className="right-label">
                <input
                 
                  type="checkbox"
                  name="lookingFor"
                  value="rentMyPlace"
                  checked={lookingFor === "rentMyPlace"}
                  onChange={handleLookingForChange}
                />
                Rent my place
              </label>
          </div>
        </div>
        <div className="rfEntry"></div>
        <div className="rfEntry"></div>
        <div className="rfEntry"></div>
      </div> */}

      <form onSubmit={handleSubmit}>
        <table style={{marginLeft:"20px"}} className="table">
          <tr>
            <th>
              <label style={{paddingTop: "1000px"}} className="label" htmlFor="name">
                Name
              </label>
            </th>
            <th >
              <input
                style={{marginLeft:"50px"}}
                className="right-label"
                placeholder="Enter Text"
                id="name"
                type="text"
                value={name}
                onChange={handleNameChange}
              />
            </th>
          </tr>
          <tr>
            <th>
              <label className="label" htmlFor="lookingFor">
                What are you <br /> looking for?
              </label>
            </th>

            <th style={{padding:"0px"}}>
              <th >
                <label style={{marginRight:"70px"}} className="right-label">
                  <input
                  style={{marginLeft:"50px"}}
                    className="dotbuttons"
                    type="checkbox"
                    name="lookingFor"
                    value="rentMyPlace"
                    checked={lookingFor === "rentMyPlace"}
                    onChange={handleLookingForChange}
                  />
                  Rent my place
                </label>
              </th>
              <th>
                <label style={{marginRight:"70px"}} className="right-label">
                  <input
                    className="dotbuttons"
                    type="checkbox"
                    name="lookingFor"
                    value="findRoommate"
                    checked={lookingFor === "findRoommate"}
                    onChange={handleLookingForChange}
                  />
                  Find roommate
                </label>
              </th>
              <th>
                <label style={{marginRight:"70px"}} className="right-label">
                  <input
                    className="dotbuttons"
                    type="checkbox"
                    name="lookingFor"
                    value="rentAPlace"
                    checked={lookingFor === "rentAPlace"}
                    onChange={handleLookingForChange}
                  />
                  Rent a place
                </label>
              </th>
            </th>
          </tr>
          <tr>
            <th>
              <label className="label" htmlFor="location">
                Location
              </label>
            </th>
            <th>
              <input
              style={{marginLeft:"50px"}}
                className="right-label"
                placeholder="Enter Text"
                id="location"
                type="text"
                value={location}
                onChange={handleLocationChange}
              />
            </th>
          </tr>
          <tr>
            <th>
              <label className="label" htmlFor="location">
                Add Profile Photo
              </label>
            </th>
            <th>
              {/* <input
              style={{marginLeft:"50px"}}
                className="right-label"
                placeholder="Enter Text"
                id="image"
                type="image"
                value={location}
                onChange={handleLocationChange}
              /> */}
              <input style={{marginLeft:"50px"}} className="right-label" type="file" multiple accept="image/*" 
              // onChange={onImageChange} 
              />
            </th>
          </tr>
          {/* <tr>
            <th>
              <label className="label" htmlFor="Gender">
                Gender
              </label>
            </th>

            <th className="gender-box" style={{padding:"0px"}}>
              <th>
                <label className="right-label">
                  <input
                  style={{marginLeft:"50px"}}
                    className="radio-input"
                    type="radio"
                    value="male"
                    checked={gender === "male"}
                    onChange={handleGenderChange}
                  />
                  Male
                </label>
              </th>
              <th>
                <label className="right-label">
                  <input
                    className="radio-input"
                    type="radio"
                    value="female"
                    checked={gender === "female"}
                    onChange={handleGenderChange}
                  />
                  Female
                </label>
              </th>
              <th>
                <label className="right-label">
                  <input
                    className="radio-input"
                    type="radio"
                    value="non-binary"
                    checked={gender === "non-binary"}
                    onChange={handleGenderChange}
                  />
                  Non-Binary
                </label>
              </th>
            </th>
          </tr> */}
          <tr>
            <th>
              <label className="label">Amenities:</label>
            </th>
            <th>
              <table className="table-small">
                <tr  className="amenity-row">
                  <div className="amenity-container" >
                    <th style={{padding:"10px"}}>
                      <label className="right-label">
                        <input
                        style={{marginLeft:"50px"}}
                          className="dotbuttons right-label"
                          type="checkbox"
                          name="amenities"
                          value="wifi"
                          checked={amenities.includes("wifi")}
                          onChange={handleAmenitiesChange}
                        />
                        WiFi
                      </label>
                    </th>

                    <th style={{padding:"10px"}}>
                      <label className="right-label">
                        <input
                        style={{marginLeft:"50px"}}
                          className="dotbuttons right-label"
                          type="checkbox"
                          name="amenities"
                          value="bathroom"
                          checked={amenities.includes("bathroom")}
                          onChange={handleAmenitiesChange}
                        />
                        Bathroom
                      </label>
                    </th>

                    <th style={{padding:"10px"}}>
                      <label className="right-label">
                        <input
                        style={{marginLeft:"50px"}}
                          className="dotbuttons right-label"
                          type="checkbox"
                          name="amenities"
                          value="kitchen"
                          checked={amenities.includes("kitchen")}
                          onChange={handleAmenitiesChange}
                        />
                        Kitchen
                      </label>
                    </th>
                  </div>

                  <div className="amenity-container">
                    <th style={{padding:"10px"}}>
                      <label className="right-label">
                        <input
                        style={{marginLeft:"50px"}}
                          className="dotbuttons right-label"
                          type="checkbox"
                          name="amenities"
                          value="water"
                          checked={amenities.includes("water")}
                          onChange={handleAmenitiesChange}
                        />
                        Water
                      </label>
                    </th>

                    <th style={{padding:"10px"}}>
                      {" "}
                      <label className="right-label">
                        <input
                        style={{marginLeft:"50px"}}
                          className="dotbuttons right-label"
                          type="checkbox"
                          name="amenities"
                          value="pool"
                          checked={amenities.includes("pool")}
                          onChange={handleAmenitiesChange}
                        />
                        Pool
                      </label>
                    </th>

                    <th style={{padding:"10px"}}>
                      <label className="right-label">
                        <input
                        style={{marginLeft:"50px"}}
                          className="dotbuttons right-label"
                          type="checkbox"
                          name="amenities"
                          value="AC"
                          checked={amenities.includes("AC")}
                          onChange={handleAmenitiesChange}
                        />
                        AC
                      </label>
                    </th>
                  </div>
                </tr>
              </table>
            </th>
          </tr>
        </table>
        <div className="description-box">
          <label className="disc-label label" htmlFor="description">
            Description
          </label>

          <textarea
            className="desc right-label"
            id="description"
            placeholder="Enter Text"
            value={description}
            onChange={handleDescriptionChange}
          />
        </div>
      </form>
      <br />
      <button className="submit-button" type="submit">
        Submit
      </button>
    </div>
  );
}

export default RegistrationTenant;
