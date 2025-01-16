import { FiDownload } from "react-icons/fi";
import "./LabResults.css";
const LabResults = () => {
  const labResults = [
    "Blood Tests",
    "CT Scans",
    "Radiology Reports",
    "X-Rays",
    "Urine Test",
  ];

  return (
    <div className="section">
      <h4>Lab Results</h4>
    <div className="lab-results">
      
        {labResults.map((result, index) => (
          <div className="labSection">
            <p className ="smalltext"key={index}>{result}</p>
            <FiDownload />
          </div>
        ))}
    </div>
    </div>
  );
};

export default LabResults;
