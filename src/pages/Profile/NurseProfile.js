import React, { useState } from "react";
import MintButton from "../../Common/MintButton";
import { Link } from "react-router-dom";
function NurseProfile() {
  const [selectGender, setGender] = useState("");
  const handleGenderType = (gender) => {
    setGender(gender);
  };
  return (
    <div className="patientProfileContainer">
      {/* profile item 1 */}
      <div className="patientProfileContainer__item1">
        <h4 className="fw-bolder mt-5">
          Hello Dr.
          <span className="text-decoration-none fw-bolder ms-2 me-2 mt-3">
            Ahmed
          </span>
          !
        </h4>
        <p style={{ color: "#2f9c95" }}>Ahmad@gmail.com</p>

        {/* profile items */}
        <div className="profileSettings mt-5">
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex">
              <img src="/assets/svg/🦆 icon _person_.svg" alt="profile" />
              <p className="fw-bolder ms-3">Profile</p>
            </div>
          </div>
          <div className="d-flex align-items-center">
            <img src="/assets/svg/Vector.svg" alt="fav" />
            <p className="mt-3 ms-3 fw-bolder">Favorites</p>
          </div>
          <div className="d-flex align-items-center">
            <img src="/assets/images/Group 481330.png" alt="payment" />
            <p className="mt-3 ms-3 fw-bolder">Payment</p>
          </div>
          <div className="d-flex align-items-center">
            <img src="/assets/images/support.png" alt="help support" />
            <p className="mt-3 ms-3 fw-bolder">Help Support</p>
          </div>
          <div className="d-flex align-items-center">
            <img src="/assets/images/vector (1).png" alt="settings" />
            <p className="mt-3 ms-3 fw-bolder">
              <Link to={"/Settings"}>Settings</Link>
            </p>
          </div>
          <div className="d-flex align-items-center">
            <img src="/assets/images/vector (2).png" alt="privacy policy" />
            <p className="mt-3 ms-3 fw-bolder">Privacy Policy</p>
          </div>

          <hr />
          <div className="d-flex align-items-center">
            <img src="/assets/images/Group.png" alt="logout" />
            <p className="mt-3 ms-3 fw-bolder">Log Out</p>
          </div>
        </div>
      </div>
      <div className="patientProfileContainer__item2">
        <div className="d-flex flex-column align-items-center justify-content-center position-relative">
          <div className="position-relative">
            <img
              src="/assets/images/Group 481328.png"
              alt="patient img"
              width={"150px"}
              height={"165.42px"}
            />
          </div>
          <div className="position-absolute add-image">
            <img
              src="/assets/images/Frame 119.png"
              alt="add img"
              width={"60px"}
              height={"60px"}
            />
          </div>
        </div>
        <p className="text-center mt-5">Specialized massage therapist focused on therapeutic treatments for pain relief and recovery.</p>
        <form className="patient-info mt-5">
          {/* 1 */}
          <div className="d-flex align-items-center">
            <div className="d-flex flex-column">
              <label className="fw-bolder mb-3">Nationality ID</label>
              <input placeholder="3333111100005555" className="national me-5" />
            </div>
            <div className="d-flex">
              <div className="d-flex flex-column">
                <label className="fw-bolder mb-3">First Name</label>
                <input placeholder="Ahmed" className="nameFiled me-3" />
              </div>
              <div className="d-flex flex-column">
                <label className="fw-bolder mb-3">Last Name</label>
                <input placeholder="Mohammed" className="nameFiled" />
              </div>
            </div>
          </div>

          {/* 2 */}
          <div className="d-flex">
            <div className="d-flex flex-column">
              <label className="fw-bolder mb-3 mt-3">Nationality </label>
              <input placeholder="Saudi Arabian" className="nationall me-5" />
            </div>
            <div className="d-flex">
              <div className="d-flex flex-column">
                <label className="fw-bolder mb-3 mt-3">Country</label>
                <input className="city me-3" />
              </div>
              <div className="d-flex flex-column">
                <label className="fw-bolder mb-3 mt-3">City</label>
                <input className="city" />
              </div>
            </div>
          </div>

          {/* 3 */}
          <div className="d-flex align-items-center">
            <div className="d-flex flex-column">
              <label className="mb-3 mt-3 fw-bolder">Date of birth</label>
              <input type="date" className="date" />
            </div>
            <div className="ms-5">
              <label className="fw-bolder mt-3 mb-3">Gender</label>
              <div className="d-flex">
                <div>
                  <input
                    type="radio"
                    checked={selectGender === "female"}
                    onClick={() => handleGenderType("female")}
                    className="custom-radio"
                  />
                  <label className="ms-3" style={{ color: "#4A525A" }}>
                    Female
                  </label>
                </div>
                <div className="ms-4">
                  <input
                    type="radio"
                    checked={selectGender === "male"}
                    onClick={() => handleGenderType("male")}
                    className="custom-radio"
                  />
                  <label className="ms-3" style={{ color: "#4A525A" }}>
                    Male
                  </label>
                </div>
              </div>
            </div>
          </div>
          {/* 4 */}
          <div className="d-flex">
            <div className="d-flex">
              <div className="d-flex flex-column">
                <label className="mt-5 mb-3 fw-bolder">Chronic Diseases </label>
                <input className="Disease" />
              </div>
              <input placeholder="+" className="addDiseae ms-3 text-center" />
            </div>

            <div className="d-flex ms-5">
              <div className="d-flex flex-column">
                <label className="mt-5 mb-3 fw-bolder">Medical Report </label>
                <input
                  className="Disease"
                  placeholder="Upload Your Medical Report"
                />
              </div>
              <input placeholder="+" className="addDiseae ms-3 text-center" />
            </div>
          </div>
          <div className="save-info">
            <MintButton text={"Save"} />
          </div>
        </form>
      </div>
    </div>
  );
}

export default NurseProfile;
