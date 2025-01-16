import "./PatientDetails.css";

import profilePic from "../../assets/Layer 2.png";
import { MdOutlineDateRange, MdOutlineCall } from "react-icons/md";
import { PiGenderFemaleLight } from "react-icons/pi";
import { IoShieldCheckmarkOutline } from "react-icons/io5";

const PatientDetails = () => {
  const patient = {
    name: "Jessica Taylor",
    dob: "28 Aug 2002",
    gender: "Female",
    contact: "(415) 555-1234",
    insurance: "Sunrise Health",
  };

  return (
    <div className="patient-details-card">
      {/* Profile picture in a circle */}
      <div className="profile-pic-container">
        <img src={profilePic} alt="Profile" className="profile-pic" />
      </div>

      {/* Patient details */}
      <div className="patient-info">
        <h3>{patient.name}</h3>

        <div className="info-item">
          <div className="icon">
            <MdOutlineDateRange />
          </div>
          <div className="details">
            <div>
              <p>Date of Birth</p>
            </div>
            <div>
              <p>{patient.dob}</p>
            </div>
          </div>
        </div>

        <div className="info-item">
          <div className="icon">
            <PiGenderFemaleLight />
          </div>
          <div className="details">
            <div>
              <p>Gender</p>
            </div>
            <div>
              <p>{patient.gender}</p>
            </div>
          </div>
        </div>

        <div className="info-item">
          <div className="icon">
            <MdOutlineCall />
          </div>
          <div className="details">
            <div>
              <p>Contact</p>
            </div>
            <div>
              <p>{patient.contact}</p>
            </div>
          </div>
        </div>

        <div className="info-item">
          <div className="icon">
            <MdOutlineCall />
          </div>
          <div className="details">
            <div>
              <p>Emergency Contact</p>
            </div>
            <div>
              <p>{patient.contact}</p>
            </div>
          </div>
        </div>

        <div className="info-item">
          <div className="icon">
            <IoShieldCheckmarkOutline />
          </div>
          <div className="details">
            <div>
              <p>Insurance</p>
            </div>
            <div>
              <p>{patient.insurance}</p>
            </div>
          </div>
        </div>
        <div className="info-button">
          <p>Show All Information</p>
        </div>
      </div>
    </div>
  );
};

export default PatientDetails;
