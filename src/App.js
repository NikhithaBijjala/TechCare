import "./App.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import DiagnosisHistory from "./Components/DiagnosisHistory/DiagnosisHistory";
import Navbar from "./Components/Navbar/Navbar";
import DiagnosticList from "./Components/DiagosticList/DiagnosticList";
import LabResults from "./Components/LabResults/LabResults";
import PatientDetails from "./Components/PatientDetails/PatientDetails";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="dashboard">
        <Sidebar />
        <div>
          <section className="diagnosis">
            <DiagnosisHistory />
          </section>
          <section className="diagnostic-lab-results">
            <DiagnosticList />
          </section>
        </div>
        <section className="patient-details sidebar">
          <PatientDetails />
          <LabResults />
        </section>
      </div>
    </div>
  );
}

export default App;
