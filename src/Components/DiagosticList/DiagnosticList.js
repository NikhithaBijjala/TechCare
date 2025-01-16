
// import "./DiagnosticList.css"
const DiagnosticList = () => {
  const diagnostics = [
    { problem: "Hypertension", description: "Chronic high blood pressure", status: "Under Observation" },
    { problem: "Type 2 Diabetes", description: "Insulin resistance", status: "Queued" },
    { problem: "Asthma", description: "Bronchial constriction", status: "Inactive" },
    { problem: "Asthma", description: "Bronchial constriction", status: "Inactive" },
  ];

  return (
    <div className="diagnostic-list">
      <h3>Diagnostic List</h3>
      <div className="diagnostic-table">
      <table >
        <thead>
          <tr>
            <th>Problem/Diagnosis</th>
            <th>Description</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {diagnostics.map((item, index) => (
            <tr key={index}>
              <td>{item.problem}</td>
              <td>{item.description}</td>
              <td>{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default DiagnosticList;
