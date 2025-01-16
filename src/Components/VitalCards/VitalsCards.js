import "./VitalsCards.css";

// Importing images from the assets directory
import respiratoryRateImg from '../../assets/respiratory-rate.png';
import temperatureImg from '../../assets/temperature.png';
import heartRateImg from '../../assets/heart-rate.png';

const VitalsCards = () => {
  const vitals = [
    { label: "Respiratory Rate", value: "20 bpm", status: "Normal", imageUrl: respiratoryRateImg, colorClass: "respiratory-rate" },
    { label: "Temperature", value: "98.6°F", status: "Normal", imageUrl: temperatureImg, colorClass: "temperature" },
    { label: "Heart Rate", value: "78 bpm", status: "Lower than Average", imageUrl: heartRateImg, colorClass: "heart-rate" },
  ];

  return (
    <div className="vitals-cards">
      {vitals.map((vital, index) => (
        <div className={`card ${vital.colorClass}`} key={index}>
          <img src={vital.imageUrl} alt={vital.label} className="vital-image" />
          <p>{vital.label}</p>
          <h4>{vital.value}</h4>
          <p className=" smalltext marginTop">{vital.status}</p>
        </div>
      ))}
    </div>
  );
};

export default VitalsCards;
